# `streamAnalyticsFunctionJavascriptUdf` Submodule <a name="`streamAnalyticsFunctionJavascriptUdf` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsFunctionJavascriptUdf <a name="StreamAnalyticsFunctionJavascriptUdf" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf azurerm_stream_analytics_function_javascript_udf}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_udf.StreamAnalyticsFunctionJavascriptUdf;

StreamAnalyticsFunctionJavascriptUdf.Builder.create(Construct scope, java.lang.String id)
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
    .input(IResolvable)
    .input(java.util.List<StreamAnalyticsFunctionJavascriptUdfInput>)
    .name(java.lang.String)
    .output(StreamAnalyticsFunctionJavascriptUdfOutput)
    .resourceGroupName(java.lang.String)
    .script(java.lang.String)
    .streamAnalyticsJobName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(StreamAnalyticsFunctionJavascriptUdfTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.input">input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>></code> | input block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#name StreamAnalyticsFunctionJavascriptUdf#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.output">output</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput">StreamAnalyticsFunctionJavascriptUdfOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#resource_group_name StreamAnalyticsFunctionJavascriptUdf#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.script">script</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#script StreamAnalyticsFunctionJavascriptUdf#script}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#stream_analytics_job_name StreamAnalyticsFunctionJavascriptUdf#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#id StreamAnalyticsFunctionJavascriptUdf#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts">StreamAnalyticsFunctionJavascriptUdfTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.input"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#input StreamAnalyticsFunctionJavascriptUdf#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#name StreamAnalyticsFunctionJavascriptUdf#name}.

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.output"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput">StreamAnalyticsFunctionJavascriptUdfOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#output StreamAnalyticsFunctionJavascriptUdf#output}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#resource_group_name StreamAnalyticsFunctionJavascriptUdf#resource_group_name}.

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.script"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#script StreamAnalyticsFunctionJavascriptUdf#script}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.streamAnalyticsJobName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#stream_analytics_job_name StreamAnalyticsFunctionJavascriptUdf#stream_analytics_job_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#id StreamAnalyticsFunctionJavascriptUdf#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts">StreamAnalyticsFunctionJavascriptUdfTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#timeouts StreamAnalyticsFunctionJavascriptUdf#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInput` <a name="putInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putInput"></a>

```java
public void putInput(IResolvable OR java.util.List<StreamAnalyticsFunctionJavascriptUdfInput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putInput.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>>

---

##### `putOutput` <a name="putOutput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putOutput"></a>

```java
public void putOutput(StreamAnalyticsFunctionJavascriptUdfOutput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput">StreamAnalyticsFunctionJavascriptUdfOutput</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putTimeouts"></a>

```java
public void putTimeouts(StreamAnalyticsFunctionJavascriptUdfTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts">StreamAnalyticsFunctionJavascriptUdfTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsFunctionJavascriptUdf resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_udf.StreamAnalyticsFunctionJavascriptUdf;

StreamAnalyticsFunctionJavascriptUdf.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_udf.StreamAnalyticsFunctionJavascriptUdf;

StreamAnalyticsFunctionJavascriptUdf.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_udf.StreamAnalyticsFunctionJavascriptUdf;

StreamAnalyticsFunctionJavascriptUdf.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_udf.StreamAnalyticsFunctionJavascriptUdf;

StreamAnalyticsFunctionJavascriptUdf.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StreamAnalyticsFunctionJavascriptUdf.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StreamAnalyticsFunctionJavascriptUdf resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StreamAnalyticsFunctionJavascriptUdf to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StreamAnalyticsFunctionJavascriptUdf that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsFunctionJavascriptUdf to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.input">input</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList">StreamAnalyticsFunctionJavascriptUdfInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.output">output</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference">StreamAnalyticsFunctionJavascriptUdfOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference">StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.inputInput">inputInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.outputInput">outputInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput">StreamAnalyticsFunctionJavascriptUdfOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.scriptInput">scriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.streamAnalyticsJobNameInput">streamAnalyticsJobNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts">StreamAnalyticsFunctionJavascriptUdfTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.script">script</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.input"></a>

```java
public StreamAnalyticsFunctionJavascriptUdfInputList getInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList">StreamAnalyticsFunctionJavascriptUdfInputList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.output"></a>

```java
public StreamAnalyticsFunctionJavascriptUdfOutputOutputReference getOutput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference">StreamAnalyticsFunctionJavascriptUdfOutputOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.timeouts"></a>

```java
public StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference">StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.inputInput"></a>

```java
public java.lang.Object getInputInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.outputInput"></a>

```java
public StreamAnalyticsFunctionJavascriptUdfOutput getOutputInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput">StreamAnalyticsFunctionJavascriptUdfOutput</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.scriptInput"></a>

```java
public java.lang.String getScriptInput();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobNameInput`<sup>Optional</sup> <a name="streamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.streamAnalyticsJobNameInput"></a>

```java
public java.lang.String getStreamAnalyticsJobNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts">StreamAnalyticsFunctionJavascriptUdfTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.script"></a>

```java
public java.lang.String getScript();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.streamAnalyticsJobName"></a>

```java
public java.lang.String getStreamAnalyticsJobName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsFunctionJavascriptUdfConfig <a name="StreamAnalyticsFunctionJavascriptUdfConfig" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_udf.StreamAnalyticsFunctionJavascriptUdfConfig;

StreamAnalyticsFunctionJavascriptUdfConfig.builder()
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
    .input(IResolvable)
    .input(java.util.List<StreamAnalyticsFunctionJavascriptUdfInput>)
    .name(java.lang.String)
    .output(StreamAnalyticsFunctionJavascriptUdfOutput)
    .resourceGroupName(java.lang.String)
    .script(java.lang.String)
    .streamAnalyticsJobName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(StreamAnalyticsFunctionJavascriptUdfTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.input">input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>></code> | input block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#name StreamAnalyticsFunctionJavascriptUdf#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.output">output</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput">StreamAnalyticsFunctionJavascriptUdfOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#resource_group_name StreamAnalyticsFunctionJavascriptUdf#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.script">script</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#script StreamAnalyticsFunctionJavascriptUdf#script}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#stream_analytics_job_name StreamAnalyticsFunctionJavascriptUdf#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#id StreamAnalyticsFunctionJavascriptUdf#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts">StreamAnalyticsFunctionJavascriptUdfTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.input"></a>

```java
public java.lang.Object getInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#input StreamAnalyticsFunctionJavascriptUdf#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#name StreamAnalyticsFunctionJavascriptUdf#name}.

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.output"></a>

```java
public StreamAnalyticsFunctionJavascriptUdfOutput getOutput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput">StreamAnalyticsFunctionJavascriptUdfOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#output StreamAnalyticsFunctionJavascriptUdf#output}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#resource_group_name StreamAnalyticsFunctionJavascriptUdf#resource_group_name}.

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.script"></a>

```java
public java.lang.String getScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#script StreamAnalyticsFunctionJavascriptUdf#script}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.streamAnalyticsJobName"></a>

```java
public java.lang.String getStreamAnalyticsJobName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#stream_analytics_job_name StreamAnalyticsFunctionJavascriptUdf#stream_analytics_job_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#id StreamAnalyticsFunctionJavascriptUdf#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.timeouts"></a>

```java
public StreamAnalyticsFunctionJavascriptUdfTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts">StreamAnalyticsFunctionJavascriptUdfTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#timeouts StreamAnalyticsFunctionJavascriptUdf#timeouts}

---

### StreamAnalyticsFunctionJavascriptUdfInput <a name="StreamAnalyticsFunctionJavascriptUdfInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_udf.StreamAnalyticsFunctionJavascriptUdfInput;

StreamAnalyticsFunctionJavascriptUdfInput.builder()
    .type(java.lang.String)
//  .configurationParameter(java.lang.Boolean)
//  .configurationParameter(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#type StreamAnalyticsFunctionJavascriptUdf#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput.property.configurationParameter">configurationParameter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#configuration_parameter StreamAnalyticsFunctionJavascriptUdf#configuration_parameter}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#type StreamAnalyticsFunctionJavascriptUdf#type}.

---

##### `configurationParameter`<sup>Optional</sup> <a name="configurationParameter" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput.property.configurationParameter"></a>

```java
public java.lang.Object getConfigurationParameter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#configuration_parameter StreamAnalyticsFunctionJavascriptUdf#configuration_parameter}.

---

### StreamAnalyticsFunctionJavascriptUdfOutput <a name="StreamAnalyticsFunctionJavascriptUdfOutput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_udf.StreamAnalyticsFunctionJavascriptUdfOutput;

StreamAnalyticsFunctionJavascriptUdfOutput.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#type StreamAnalyticsFunctionJavascriptUdf#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#type StreamAnalyticsFunctionJavascriptUdf#type}.

---

### StreamAnalyticsFunctionJavascriptUdfTimeouts <a name="StreamAnalyticsFunctionJavascriptUdfTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_udf.StreamAnalyticsFunctionJavascriptUdfTimeouts;

StreamAnalyticsFunctionJavascriptUdfTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#create StreamAnalyticsFunctionJavascriptUdf#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#delete StreamAnalyticsFunctionJavascriptUdf#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#read StreamAnalyticsFunctionJavascriptUdf#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#update StreamAnalyticsFunctionJavascriptUdf#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#create StreamAnalyticsFunctionJavascriptUdf#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#delete StreamAnalyticsFunctionJavascriptUdf#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#read StreamAnalyticsFunctionJavascriptUdf#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/stream_analytics_function_javascript_udf#update StreamAnalyticsFunctionJavascriptUdf#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsFunctionJavascriptUdfInputList <a name="StreamAnalyticsFunctionJavascriptUdfInputList" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_udf.StreamAnalyticsFunctionJavascriptUdfInputList;

new StreamAnalyticsFunctionJavascriptUdfInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.get"></a>

```java
public StreamAnalyticsFunctionJavascriptUdfInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>>

---


### StreamAnalyticsFunctionJavascriptUdfInputOutputReference <a name="StreamAnalyticsFunctionJavascriptUdfInputOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_udf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference;

new StreamAnalyticsFunctionJavascriptUdfInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.resetConfigurationParameter">resetConfigurationParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigurationParameter` <a name="resetConfigurationParameter" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.resetConfigurationParameter"></a>

```java
public void resetConfigurationParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.configurationParameterInput">configurationParameterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.configurationParameter">configurationParameter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurationParameterInput`<sup>Optional</sup> <a name="configurationParameterInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.configurationParameterInput"></a>

```java
public java.lang.Object getConfigurationParameterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `configurationParameter`<sup>Required</sup> <a name="configurationParameter" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.configurationParameter"></a>

```java
public java.lang.Object getConfigurationParameter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>

---


### StreamAnalyticsFunctionJavascriptUdfOutputOutputReference <a name="StreamAnalyticsFunctionJavascriptUdfOutputOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_udf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference;

new StreamAnalyticsFunctionJavascriptUdfOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput">StreamAnalyticsFunctionJavascriptUdfOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.internalValue"></a>

```java
public StreamAnalyticsFunctionJavascriptUdfOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput">StreamAnalyticsFunctionJavascriptUdfOutput</a>

---


### StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference <a name="StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_udf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference;

new StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts">StreamAnalyticsFunctionJavascriptUdfTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts">StreamAnalyticsFunctionJavascriptUdfTimeouts</a>

---



