# `dataFactoryTriggerTumblingWindow` Submodule <a name="`dataFactoryTriggerTumblingWindow` Submodule" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryTriggerTumblingWindow <a name="DataFactoryTriggerTumblingWindow" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window azurerm_data_factory_trigger_tumbling_window}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_tumbling_window.DataFactoryTriggerTumblingWindow;

DataFactoryTriggerTumblingWindow.Builder.create(Construct scope, java.lang.String id)
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
    .frequency(java.lang.String)
    .interval(java.lang.Number)
    .name(java.lang.String)
    .pipeline(DataFactoryTriggerTumblingWindowPipeline)
    .startTime(java.lang.String)
//  .activated(java.lang.Boolean)
//  .activated(IResolvable)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .delay(java.lang.String)
//  .description(java.lang.String)
//  .endTime(java.lang.String)
//  .id(java.lang.String)
//  .maxConcurrency(java.lang.Number)
//  .retry(DataFactoryTriggerTumblingWindowRetry)
//  .timeouts(DataFactoryTriggerTumblingWindowTimeouts)
//  .triggerDependency(IResolvable)
//  .triggerDependency(java.util.List<DataFactoryTriggerTumblingWindowTriggerDependency>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#data_factory_id DataFactoryTriggerTumblingWindow#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.frequency">frequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#frequency DataFactoryTriggerTumblingWindow#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#interval DataFactoryTriggerTumblingWindow#interval}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#name DataFactoryTriggerTumblingWindow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.pipeline">pipeline</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a></code> | pipeline block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#start_time DataFactoryTriggerTumblingWindow#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.activated">activated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#activated DataFactoryTriggerTumblingWindow#activated}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#additional_properties DataFactoryTriggerTumblingWindow#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#annotations DataFactoryTriggerTumblingWindow#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.delay">delay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#delay DataFactoryTriggerTumblingWindow#delay}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#description DataFactoryTriggerTumblingWindow#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#end_time DataFactoryTriggerTumblingWindow#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#id DataFactoryTriggerTumblingWindow#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#max_concurrency DataFactoryTriggerTumblingWindow#max_concurrency}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.retry">retry</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a></code> | retry block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.triggerDependency">triggerDependency</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>></code> | trigger_dependency block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.dataFactoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#data_factory_id DataFactoryTriggerTumblingWindow#data_factory_id}.

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.frequency"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#frequency DataFactoryTriggerTumblingWindow#frequency}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.interval"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#interval DataFactoryTriggerTumblingWindow#interval}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#name DataFactoryTriggerTumblingWindow#name}.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.pipeline"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a>

pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#pipeline DataFactoryTriggerTumblingWindow#pipeline}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.startTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#start_time DataFactoryTriggerTumblingWindow#start_time}.

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.activated"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#activated DataFactoryTriggerTumblingWindow#activated}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.additionalProperties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#additional_properties DataFactoryTriggerTumblingWindow#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.annotations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#annotations DataFactoryTriggerTumblingWindow#annotations}.

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.delay"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#delay DataFactoryTriggerTumblingWindow#delay}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#description DataFactoryTriggerTumblingWindow#description}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.endTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#end_time DataFactoryTriggerTumblingWindow#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#id DataFactoryTriggerTumblingWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.maxConcurrency"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#max_concurrency DataFactoryTriggerTumblingWindow#max_concurrency}.

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.retry"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a>

retry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#retry DataFactoryTriggerTumblingWindow#retry}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#timeouts DataFactoryTriggerTumblingWindow#timeouts}

---

##### `triggerDependency`<sup>Optional</sup> <a name="triggerDependency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.triggerDependency"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>>

trigger_dependency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#trigger_dependency DataFactoryTriggerTumblingWindow#trigger_dependency}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putPipeline">putPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTriggerDependency">putTriggerDependency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetActivated">resetActivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetDelay">resetDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetMaxConcurrency">resetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetTriggerDependency">resetTriggerDependency</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPipeline` <a name="putPipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putPipeline"></a>

```java
public void putPipeline(DataFactoryTriggerTumblingWindowPipeline value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putPipeline.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a>

---

##### `putRetry` <a name="putRetry" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putRetry"></a>

```java
public void putRetry(DataFactoryTriggerTumblingWindowRetry value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTimeouts"></a>

```java
public void putTimeouts(DataFactoryTriggerTumblingWindowTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a>

---

##### `putTriggerDependency` <a name="putTriggerDependency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTriggerDependency"></a>

```java
public void putTriggerDependency(IResolvable OR java.util.List<DataFactoryTriggerTumblingWindowTriggerDependency> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTriggerDependency.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>>

---

##### `resetActivated` <a name="resetActivated" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetActivated"></a>

```java
public void resetActivated()
```

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDelay` <a name="resetDelay" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetDelay"></a>

```java
public void resetDelay()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetId"></a>

```java
public void resetId()
```

##### `resetMaxConcurrency` <a name="resetMaxConcurrency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetMaxConcurrency"></a>

```java
public void resetMaxConcurrency()
```

##### `resetRetry` <a name="resetRetry" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetRetry"></a>

```java
public void resetRetry()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTriggerDependency` <a name="resetTriggerDependency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetTriggerDependency"></a>

```java
public void resetTriggerDependency()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryTriggerTumblingWindow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_tumbling_window.DataFactoryTriggerTumblingWindow;

DataFactoryTriggerTumblingWindow.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_tumbling_window.DataFactoryTriggerTumblingWindow;

DataFactoryTriggerTumblingWindow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_tumbling_window.DataFactoryTriggerTumblingWindow;

DataFactoryTriggerTumblingWindow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_tumbling_window.DataFactoryTriggerTumblingWindow;

DataFactoryTriggerTumblingWindow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataFactoryTriggerTumblingWindow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataFactoryTriggerTumblingWindow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataFactoryTriggerTumblingWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataFactoryTriggerTumblingWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryTriggerTumblingWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.pipeline">pipeline</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference">DataFactoryTriggerTumblingWindowPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.retry">retry</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference">DataFactoryTriggerTumblingWindowRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference">DataFactoryTriggerTumblingWindowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.triggerDependency">triggerDependency</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList">DataFactoryTriggerTumblingWindowTriggerDependencyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.activatedInput">activatedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.annotationsInput">annotationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.delayInput">delayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.maxConcurrencyInput">maxConcurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.pipelineInput">pipelineInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.retryInput">retryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.triggerDependencyInput">triggerDependencyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.activated">activated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.delay">delay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.pipeline"></a>

```java
public DataFactoryTriggerTumblingWindowPipelineOutputReference getPipeline();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference">DataFactoryTriggerTumblingWindowPipelineOutputReference</a>

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.retry"></a>

```java
public DataFactoryTriggerTumblingWindowRetryOutputReference getRetry();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference">DataFactoryTriggerTumblingWindowRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.timeouts"></a>

```java
public DataFactoryTriggerTumblingWindowTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference">DataFactoryTriggerTumblingWindowTimeoutsOutputReference</a>

---

##### `triggerDependency`<sup>Required</sup> <a name="triggerDependency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.triggerDependency"></a>

```java
public DataFactoryTriggerTumblingWindowTriggerDependencyList getTriggerDependency();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList">DataFactoryTriggerTumblingWindowTriggerDependencyList</a>

---

##### `activatedInput`<sup>Optional</sup> <a name="activatedInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.activatedInput"></a>

```java
public java.lang.Object getActivatedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.additionalPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.annotationsInput"></a>

```java
public java.util.List<java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dataFactoryIdInput"></a>

```java
public java.lang.String getDataFactoryIdInput();
```

- *Type:* java.lang.String

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.delayInput"></a>

```java
public java.lang.String getDelayInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrencyInput`<sup>Optional</sup> <a name="maxConcurrencyInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.maxConcurrencyInput"></a>

```java
public java.lang.Number getMaxConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pipelineInput`<sup>Optional</sup> <a name="pipelineInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.pipelineInput"></a>

```java
public DataFactoryTriggerTumblingWindowPipeline getPipelineInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a>

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.retryInput"></a>

```java
public DataFactoryTriggerTumblingWindowRetry getRetryInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a>

---

##### `triggerDependencyInput`<sup>Optional</sup> <a name="triggerDependencyInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.triggerDependencyInput"></a>

```java
public java.lang.Object getTriggerDependencyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>>

---

##### `activated`<sup>Required</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.activated"></a>

```java
public java.lang.Object getActivated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.delay"></a>

```java
public java.lang.String getDelay();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.maxConcurrency"></a>

```java
public java.lang.Number getMaxConcurrency();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryTriggerTumblingWindowConfig <a name="DataFactoryTriggerTumblingWindowConfig" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_tumbling_window.DataFactoryTriggerTumblingWindowConfig;

DataFactoryTriggerTumblingWindowConfig.builder()
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
    .frequency(java.lang.String)
    .interval(java.lang.Number)
    .name(java.lang.String)
    .pipeline(DataFactoryTriggerTumblingWindowPipeline)
    .startTime(java.lang.String)
//  .activated(java.lang.Boolean)
//  .activated(IResolvable)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .delay(java.lang.String)
//  .description(java.lang.String)
//  .endTime(java.lang.String)
//  .id(java.lang.String)
//  .maxConcurrency(java.lang.Number)
//  .retry(DataFactoryTriggerTumblingWindowRetry)
//  .timeouts(DataFactoryTriggerTumblingWindowTimeouts)
//  .triggerDependency(IResolvable)
//  .triggerDependency(java.util.List<DataFactoryTriggerTumblingWindowTriggerDependency>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#data_factory_id DataFactoryTriggerTumblingWindow#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.frequency">frequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#frequency DataFactoryTriggerTumblingWindow#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#interval DataFactoryTriggerTumblingWindow#interval}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#name DataFactoryTriggerTumblingWindow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.pipeline">pipeline</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a></code> | pipeline block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#start_time DataFactoryTriggerTumblingWindow#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.activated">activated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#activated DataFactoryTriggerTumblingWindow#activated}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#additional_properties DataFactoryTriggerTumblingWindow#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#annotations DataFactoryTriggerTumblingWindow#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.delay">delay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#delay DataFactoryTriggerTumblingWindow#delay}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#description DataFactoryTriggerTumblingWindow#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#end_time DataFactoryTriggerTumblingWindow#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#id DataFactoryTriggerTumblingWindow#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#max_concurrency DataFactoryTriggerTumblingWindow#max_concurrency}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.retry">retry</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a></code> | retry block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.triggerDependency">triggerDependency</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>></code> | trigger_dependency block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#data_factory_id DataFactoryTriggerTumblingWindow#data_factory_id}.

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#frequency DataFactoryTriggerTumblingWindow#frequency}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#interval DataFactoryTriggerTumblingWindow#interval}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#name DataFactoryTriggerTumblingWindow#name}.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.pipeline"></a>

```java
public DataFactoryTriggerTumblingWindowPipeline getPipeline();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a>

pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#pipeline DataFactoryTriggerTumblingWindow#pipeline}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#start_time DataFactoryTriggerTumblingWindow#start_time}.

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.activated"></a>

```java
public java.lang.Object getActivated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#activated DataFactoryTriggerTumblingWindow#activated}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#additional_properties DataFactoryTriggerTumblingWindow#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#annotations DataFactoryTriggerTumblingWindow#annotations}.

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.delay"></a>

```java
public java.lang.String getDelay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#delay DataFactoryTriggerTumblingWindow#delay}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#description DataFactoryTriggerTumblingWindow#description}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#end_time DataFactoryTriggerTumblingWindow#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#id DataFactoryTriggerTumblingWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.maxConcurrency"></a>

```java
public java.lang.Number getMaxConcurrency();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#max_concurrency DataFactoryTriggerTumblingWindow#max_concurrency}.

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.retry"></a>

```java
public DataFactoryTriggerTumblingWindowRetry getRetry();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a>

retry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#retry DataFactoryTriggerTumblingWindow#retry}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.timeouts"></a>

```java
public DataFactoryTriggerTumblingWindowTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#timeouts DataFactoryTriggerTumblingWindow#timeouts}

---

##### `triggerDependency`<sup>Optional</sup> <a name="triggerDependency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.triggerDependency"></a>

```java
public java.lang.Object getTriggerDependency();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>>

trigger_dependency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#trigger_dependency DataFactoryTriggerTumblingWindow#trigger_dependency}

---

### DataFactoryTriggerTumblingWindowPipeline <a name="DataFactoryTriggerTumblingWindowPipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_tumbling_window.DataFactoryTriggerTumblingWindowPipeline;

DataFactoryTriggerTumblingWindowPipeline.builder()
    .name(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#name DataFactoryTriggerTumblingWindow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#parameters DataFactoryTriggerTumblingWindow#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#name DataFactoryTriggerTumblingWindow#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#parameters DataFactoryTriggerTumblingWindow#parameters}.

---

### DataFactoryTriggerTumblingWindowRetry <a name="DataFactoryTriggerTumblingWindowRetry" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_tumbling_window.DataFactoryTriggerTumblingWindowRetry;

DataFactoryTriggerTumblingWindowRetry.builder()
    .count(java.lang.Number)
//  .interval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#count DataFactoryTriggerTumblingWindow#count}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#interval DataFactoryTriggerTumblingWindow#interval}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#count DataFactoryTriggerTumblingWindow#count}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#interval DataFactoryTriggerTumblingWindow#interval}.

---

### DataFactoryTriggerTumblingWindowTimeouts <a name="DataFactoryTriggerTumblingWindowTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_tumbling_window.DataFactoryTriggerTumblingWindowTimeouts;

DataFactoryTriggerTumblingWindowTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#create DataFactoryTriggerTumblingWindow#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#delete DataFactoryTriggerTumblingWindow#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#read DataFactoryTriggerTumblingWindow#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#update DataFactoryTriggerTumblingWindow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#create DataFactoryTriggerTumblingWindow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#delete DataFactoryTriggerTumblingWindow#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#read DataFactoryTriggerTumblingWindow#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#update DataFactoryTriggerTumblingWindow#update}.

---

### DataFactoryTriggerTumblingWindowTriggerDependency <a name="DataFactoryTriggerTumblingWindowTriggerDependency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_tumbling_window.DataFactoryTriggerTumblingWindowTriggerDependency;

DataFactoryTriggerTumblingWindowTriggerDependency.builder()
//  .offset(java.lang.String)
//  .size(java.lang.String)
//  .triggerName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.offset">offset</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#offset DataFactoryTriggerTumblingWindow#offset}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#size DataFactoryTriggerTumblingWindow#size}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.triggerName">triggerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#trigger_name DataFactoryTriggerTumblingWindow#trigger_name}. |

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.offset"></a>

```java
public java.lang.String getOffset();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#offset DataFactoryTriggerTumblingWindow#offset}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#size DataFactoryTriggerTumblingWindow#size}.

---

##### `triggerName`<sup>Optional</sup> <a name="triggerName" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.triggerName"></a>

```java
public java.lang.String getTriggerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/data_factory_trigger_tumbling_window#trigger_name DataFactoryTriggerTumblingWindow#trigger_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryTriggerTumblingWindowPipelineOutputReference <a name="DataFactoryTriggerTumblingWindowPipelineOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_tumbling_window.DataFactoryTriggerTumblingWindowPipelineOutputReference;

new DataFactoryTriggerTumblingWindowPipelineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.internalValue"></a>

```java
public DataFactoryTriggerTumblingWindowPipeline getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a>

---


### DataFactoryTriggerTumblingWindowRetryOutputReference <a name="DataFactoryTriggerTumblingWindowRetryOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_tumbling_window.DataFactoryTriggerTumblingWindowRetryOutputReference;

new DataFactoryTriggerTumblingWindowRetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.resetInterval">resetInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.resetInterval"></a>

```java
public void resetInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.internalValue"></a>

```java
public DataFactoryTriggerTumblingWindowRetry getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a>

---


### DataFactoryTriggerTumblingWindowTimeoutsOutputReference <a name="DataFactoryTriggerTumblingWindowTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_tumbling_window.DataFactoryTriggerTumblingWindowTimeoutsOutputReference;

new DataFactoryTriggerTumblingWindowTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a>

---


### DataFactoryTriggerTumblingWindowTriggerDependencyList <a name="DataFactoryTriggerTumblingWindowTriggerDependencyList" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_tumbling_window.DataFactoryTriggerTumblingWindowTriggerDependencyList;

new DataFactoryTriggerTumblingWindowTriggerDependencyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.get"></a>

```java
public DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>>

---


### DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference <a name="DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_trigger_tumbling_window.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference;

new DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetTriggerName">resetTriggerName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetOffset"></a>

```java
public void resetOffset()
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetSize"></a>

```java
public void resetSize()
```

##### `resetTriggerName` <a name="resetTriggerName" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetTriggerName"></a>

```java
public void resetTriggerName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.offsetInput">offsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.triggerNameInput">triggerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.offset">offset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.size">size</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.triggerName">triggerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.offsetInput"></a>

```java
public java.lang.String getOffsetInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.sizeInput"></a>

```java
public java.lang.String getSizeInput();
```

- *Type:* java.lang.String

---

##### `triggerNameInput`<sup>Optional</sup> <a name="triggerNameInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.triggerNameInput"></a>

```java
public java.lang.String getTriggerNameInput();
```

- *Type:* java.lang.String

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.offset"></a>

```java
public java.lang.String getOffset();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

---

##### `triggerName`<sup>Required</sup> <a name="triggerName" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.triggerName"></a>

```java
public java.lang.String getTriggerName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>

---



