# `dataFactoryTriggerCustomEvent` Submodule <a name="`dataFactoryTriggerCustomEvent` Submodule" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryTriggerCustomEvent <a name="DataFactoryTriggerCustomEvent" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event azurerm_data_factory_trigger_custom_event}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_custom_event.DataFactoryTriggerCustomEvent;

DataFactoryTriggerCustomEvent.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .dataFactoryId(java.lang.String)
    .eventgridTopicId(java.lang.String)
    .events(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .pipeline(IResolvable)
    .pipeline(java.util.List<DataFactoryTriggerCustomEventPipeline>)
//  .activated(java.lang.Boolean)
//  .activated(IResolvable)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .subjectBeginsWith(java.lang.String)
//  .subjectEndsWith(java.lang.String)
//  .timeouts(DataFactoryTriggerCustomEventTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#data_factory_id DataFactoryTriggerCustomEvent#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.eventgridTopicId">eventgridTopicId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#eventgrid_topic_id DataFactoryTriggerCustomEvent#eventgrid_topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.events">events</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#events DataFactoryTriggerCustomEvent#events}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.pipeline">pipeline</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>></code> | pipeline block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.activated">activated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#activated DataFactoryTriggerCustomEvent#activated}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#additional_properties DataFactoryTriggerCustomEvent#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#annotations DataFactoryTriggerCustomEvent#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#description DataFactoryTriggerCustomEvent#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#id DataFactoryTriggerCustomEvent#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.subjectBeginsWith">subjectBeginsWith</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#subject_begins_with DataFactoryTriggerCustomEvent#subject_begins_with}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.subjectEndsWith">subjectEndsWith</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#subject_ends_with DataFactoryTriggerCustomEvent#subject_ends_with}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.dataFactoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#data_factory_id DataFactoryTriggerCustomEvent#data_factory_id}.

---

##### `eventgridTopicId`<sup>Required</sup> <a name="eventgridTopicId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.eventgridTopicId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#eventgrid_topic_id DataFactoryTriggerCustomEvent#eventgrid_topic_id}.

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.events"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#events DataFactoryTriggerCustomEvent#events}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.pipeline"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>>

pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#pipeline DataFactoryTriggerCustomEvent#pipeline}

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.activated"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#activated DataFactoryTriggerCustomEvent#activated}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.additionalProperties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#additional_properties DataFactoryTriggerCustomEvent#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.annotations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#annotations DataFactoryTriggerCustomEvent#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#description DataFactoryTriggerCustomEvent#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#id DataFactoryTriggerCustomEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subjectBeginsWith`<sup>Optional</sup> <a name="subjectBeginsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.subjectBeginsWith"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#subject_begins_with DataFactoryTriggerCustomEvent#subject_begins_with}.

---

##### `subjectEndsWith`<sup>Optional</sup> <a name="subjectEndsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.subjectEndsWith"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#subject_ends_with DataFactoryTriggerCustomEvent#subject_ends_with}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#timeouts DataFactoryTriggerCustomEvent#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putPipeline">putPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetActivated">resetActivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetSubjectBeginsWith">resetSubjectBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetSubjectEndsWith">resetSubjectEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPipeline` <a name="putPipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putPipeline"></a>

```java
public void putPipeline(IResolvable OR java.util.List<DataFactoryTriggerCustomEventPipeline> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putPipeline.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putTimeouts"></a>

```java
public void putTimeouts(DataFactoryTriggerCustomEventTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a>

---

##### `resetActivated` <a name="resetActivated" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetActivated"></a>

```java
public void resetActivated()
```

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetId"></a>

```java
public void resetId()
```

##### `resetSubjectBeginsWith` <a name="resetSubjectBeginsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetSubjectBeginsWith"></a>

```java
public void resetSubjectBeginsWith()
```

##### `resetSubjectEndsWith` <a name="resetSubjectEndsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetSubjectEndsWith"></a>

```java
public void resetSubjectEndsWith()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryTriggerCustomEvent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_custom_event.DataFactoryTriggerCustomEvent;

DataFactoryTriggerCustomEvent.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_custom_event.DataFactoryTriggerCustomEvent;

DataFactoryTriggerCustomEvent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_custom_event.DataFactoryTriggerCustomEvent;

DataFactoryTriggerCustomEvent.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_custom_event.DataFactoryTriggerCustomEvent;

DataFactoryTriggerCustomEvent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataFactoryTriggerCustomEvent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataFactoryTriggerCustomEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataFactoryTriggerCustomEvent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataFactoryTriggerCustomEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryTriggerCustomEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.pipeline">pipeline</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList">DataFactoryTriggerCustomEventPipelineList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference">DataFactoryTriggerCustomEventTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.activatedInput">activatedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.annotationsInput">annotationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventgridTopicIdInput">eventgridTopicIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventsInput">eventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.pipelineInput">pipelineInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectBeginsWithInput">subjectBeginsWithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectEndsWithInput">subjectEndsWithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.activated">activated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventgridTopicId">eventgridTopicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectBeginsWith">subjectBeginsWith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectEndsWith">subjectEndsWith</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.pipeline"></a>

```java
public DataFactoryTriggerCustomEventPipelineList getPipeline();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList">DataFactoryTriggerCustomEventPipelineList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.timeouts"></a>

```java
public DataFactoryTriggerCustomEventTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference">DataFactoryTriggerCustomEventTimeoutsOutputReference</a>

---

##### `activatedInput`<sup>Optional</sup> <a name="activatedInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.activatedInput"></a>

```java
public java.lang.Object getActivatedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.additionalPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.annotationsInput"></a>

```java
public java.util.List<java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dataFactoryIdInput"></a>

```java
public java.lang.String getDataFactoryIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `eventgridTopicIdInput`<sup>Optional</sup> <a name="eventgridTopicIdInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventgridTopicIdInput"></a>

```java
public java.lang.String getEventgridTopicIdInput();
```

- *Type:* java.lang.String

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventsInput"></a>

```java
public java.util.List<java.lang.String> getEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pipelineInput`<sup>Optional</sup> <a name="pipelineInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.pipelineInput"></a>

```java
public java.lang.Object getPipelineInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>>

---

##### `subjectBeginsWithInput`<sup>Optional</sup> <a name="subjectBeginsWithInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectBeginsWithInput"></a>

```java
public java.lang.String getSubjectBeginsWithInput();
```

- *Type:* java.lang.String

---

##### `subjectEndsWithInput`<sup>Optional</sup> <a name="subjectEndsWithInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectEndsWithInput"></a>

```java
public java.lang.String getSubjectEndsWithInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a>

---

##### `activated`<sup>Required</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.activated"></a>

```java
public java.lang.Object getActivated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `eventgridTopicId`<sup>Required</sup> <a name="eventgridTopicId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventgridTopicId"></a>

```java
public java.lang.String getEventgridTopicId();
```

- *Type:* java.lang.String

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `subjectBeginsWith`<sup>Required</sup> <a name="subjectBeginsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectBeginsWith"></a>

```java
public java.lang.String getSubjectBeginsWith();
```

- *Type:* java.lang.String

---

##### `subjectEndsWith`<sup>Required</sup> <a name="subjectEndsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectEndsWith"></a>

```java
public java.lang.String getSubjectEndsWith();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryTriggerCustomEventConfig <a name="DataFactoryTriggerCustomEventConfig" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_custom_event.DataFactoryTriggerCustomEventConfig;

DataFactoryTriggerCustomEventConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .dataFactoryId(java.lang.String)
    .eventgridTopicId(java.lang.String)
    .events(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .pipeline(IResolvable)
    .pipeline(java.util.List<DataFactoryTriggerCustomEventPipeline>)
//  .activated(java.lang.Boolean)
//  .activated(IResolvable)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .subjectBeginsWith(java.lang.String)
//  .subjectEndsWith(java.lang.String)
//  .timeouts(DataFactoryTriggerCustomEventTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#data_factory_id DataFactoryTriggerCustomEvent#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.eventgridTopicId">eventgridTopicId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#eventgrid_topic_id DataFactoryTriggerCustomEvent#eventgrid_topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#events DataFactoryTriggerCustomEvent#events}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.pipeline">pipeline</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>></code> | pipeline block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.activated">activated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#activated DataFactoryTriggerCustomEvent#activated}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#additional_properties DataFactoryTriggerCustomEvent#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#annotations DataFactoryTriggerCustomEvent#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#description DataFactoryTriggerCustomEvent#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#id DataFactoryTriggerCustomEvent#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.subjectBeginsWith">subjectBeginsWith</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#subject_begins_with DataFactoryTriggerCustomEvent#subject_begins_with}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.subjectEndsWith">subjectEndsWith</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#subject_ends_with DataFactoryTriggerCustomEvent#subject_ends_with}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#data_factory_id DataFactoryTriggerCustomEvent#data_factory_id}.

---

##### `eventgridTopicId`<sup>Required</sup> <a name="eventgridTopicId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.eventgridTopicId"></a>

```java
public java.lang.String getEventgridTopicId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#eventgrid_topic_id DataFactoryTriggerCustomEvent#eventgrid_topic_id}.

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#events DataFactoryTriggerCustomEvent#events}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.pipeline"></a>

```java
public java.lang.Object getPipeline();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>>

pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#pipeline DataFactoryTriggerCustomEvent#pipeline}

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.activated"></a>

```java
public java.lang.Object getActivated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#activated DataFactoryTriggerCustomEvent#activated}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#additional_properties DataFactoryTriggerCustomEvent#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#annotations DataFactoryTriggerCustomEvent#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#description DataFactoryTriggerCustomEvent#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#id DataFactoryTriggerCustomEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subjectBeginsWith`<sup>Optional</sup> <a name="subjectBeginsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.subjectBeginsWith"></a>

```java
public java.lang.String getSubjectBeginsWith();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#subject_begins_with DataFactoryTriggerCustomEvent#subject_begins_with}.

---

##### `subjectEndsWith`<sup>Optional</sup> <a name="subjectEndsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.subjectEndsWith"></a>

```java
public java.lang.String getSubjectEndsWith();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#subject_ends_with DataFactoryTriggerCustomEvent#subject_ends_with}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.timeouts"></a>

```java
public DataFactoryTriggerCustomEventTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#timeouts DataFactoryTriggerCustomEvent#timeouts}

---

### DataFactoryTriggerCustomEventPipeline <a name="DataFactoryTriggerCustomEventPipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_custom_event.DataFactoryTriggerCustomEventPipeline;

DataFactoryTriggerCustomEventPipeline.builder()
    .name(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#parameters DataFactoryTriggerCustomEvent#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#parameters DataFactoryTriggerCustomEvent#parameters}.

---

### DataFactoryTriggerCustomEventTimeouts <a name="DataFactoryTriggerCustomEventTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_custom_event.DataFactoryTriggerCustomEventTimeouts;

DataFactoryTriggerCustomEventTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#create DataFactoryTriggerCustomEvent#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#delete DataFactoryTriggerCustomEvent#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#read DataFactoryTriggerCustomEvent#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#update DataFactoryTriggerCustomEvent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#create DataFactoryTriggerCustomEvent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#delete DataFactoryTriggerCustomEvent#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#read DataFactoryTriggerCustomEvent#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/data_factory_trigger_custom_event#update DataFactoryTriggerCustomEvent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryTriggerCustomEventPipelineList <a name="DataFactoryTriggerCustomEventPipelineList" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_custom_event.DataFactoryTriggerCustomEventPipelineList;

new DataFactoryTriggerCustomEventPipelineList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.get"></a>

```java
public DataFactoryTriggerCustomEventPipelineOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>>

---


### DataFactoryTriggerCustomEventPipelineOutputReference <a name="DataFactoryTriggerCustomEventPipelineOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_custom_event.DataFactoryTriggerCustomEventPipelineOutputReference;

new DataFactoryTriggerCustomEventPipelineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>

---


### DataFactoryTriggerCustomEventTimeoutsOutputReference <a name="DataFactoryTriggerCustomEventTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_custom_event.DataFactoryTriggerCustomEventTimeoutsOutputReference;

new DataFactoryTriggerCustomEventTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a>

---



