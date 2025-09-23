# `streamAnalyticsFunctionJavascriptUda` Submodule <a name="`streamAnalyticsFunctionJavascriptUda` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsFunctionJavascriptUda <a name="StreamAnalyticsFunctionJavascriptUda" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda azurerm_stream_analytics_function_javascript_uda}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_uda.StreamAnalyticsFunctionJavascriptUda;

StreamAnalyticsFunctionJavascriptUda.Builder.create(Construct scope, java.lang.String id)
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
    .input(java.util.List<StreamAnalyticsFunctionJavascriptUdaInput>)
    .name(java.lang.String)
    .output(StreamAnalyticsFunctionJavascriptUdaOutput)
    .script(java.lang.String)
    .streamAnalyticsJobId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(StreamAnalyticsFunctionJavascriptUdaTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.input">input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>></code> | input block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#name StreamAnalyticsFunctionJavascriptUda#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.output">output</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.script">script</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#script StreamAnalyticsFunctionJavascriptUda#script}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.streamAnalyticsJobId">streamAnalyticsJobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#stream_analytics_job_id StreamAnalyticsFunctionJavascriptUda#stream_analytics_job_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#id StreamAnalyticsFunctionJavascriptUda#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.input"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#input StreamAnalyticsFunctionJavascriptUda#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#name StreamAnalyticsFunctionJavascriptUda#name}.

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.output"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#output StreamAnalyticsFunctionJavascriptUda#output}

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.script"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#script StreamAnalyticsFunctionJavascriptUda#script}.

---

##### `streamAnalyticsJobId`<sup>Required</sup> <a name="streamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.streamAnalyticsJobId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#stream_analytics_job_id StreamAnalyticsFunctionJavascriptUda#stream_analytics_job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#id StreamAnalyticsFunctionJavascriptUda#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#timeouts StreamAnalyticsFunctionJavascriptUda#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInput` <a name="putInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putInput"></a>

```java
public void putInput(IResolvable OR java.util.List<StreamAnalyticsFunctionJavascriptUdaInput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putInput.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>>

---

##### `putOutput` <a name="putOutput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putOutput"></a>

```java
public void putOutput(StreamAnalyticsFunctionJavascriptUdaOutput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putTimeouts"></a>

```java
public void putTimeouts(StreamAnalyticsFunctionJavascriptUdaTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsFunctionJavascriptUda resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_uda.StreamAnalyticsFunctionJavascriptUda;

StreamAnalyticsFunctionJavascriptUda.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_uda.StreamAnalyticsFunctionJavascriptUda;

StreamAnalyticsFunctionJavascriptUda.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_uda.StreamAnalyticsFunctionJavascriptUda;

StreamAnalyticsFunctionJavascriptUda.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_uda.StreamAnalyticsFunctionJavascriptUda;

StreamAnalyticsFunctionJavascriptUda.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StreamAnalyticsFunctionJavascriptUda.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StreamAnalyticsFunctionJavascriptUda resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StreamAnalyticsFunctionJavascriptUda to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StreamAnalyticsFunctionJavascriptUda that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsFunctionJavascriptUda to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.input">input</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList">StreamAnalyticsFunctionJavascriptUdaInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.output">output</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference">StreamAnalyticsFunctionJavascriptUdaOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference">StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.inputInput">inputInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.outputInput">outputInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.scriptInput">scriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.streamAnalyticsJobIdInput">streamAnalyticsJobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.script">script</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.streamAnalyticsJobId">streamAnalyticsJobId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.input"></a>

```java
public StreamAnalyticsFunctionJavascriptUdaInputList getInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList">StreamAnalyticsFunctionJavascriptUdaInputList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.output"></a>

```java
public StreamAnalyticsFunctionJavascriptUdaOutputOutputReference getOutput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference">StreamAnalyticsFunctionJavascriptUdaOutputOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.timeouts"></a>

```java
public StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference">StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.inputInput"></a>

```java
public java.lang.Object getInputInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.outputInput"></a>

```java
public StreamAnalyticsFunctionJavascriptUdaOutput getOutputInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a>

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.scriptInput"></a>

```java
public java.lang.String getScriptInput();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobIdInput`<sup>Optional</sup> <a name="streamAnalyticsJobIdInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.streamAnalyticsJobIdInput"></a>

```java
public java.lang.String getStreamAnalyticsJobIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.script"></a>

```java
public java.lang.String getScript();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobId`<sup>Required</sup> <a name="streamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.streamAnalyticsJobId"></a>

```java
public java.lang.String getStreamAnalyticsJobId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsFunctionJavascriptUdaConfig <a name="StreamAnalyticsFunctionJavascriptUdaConfig" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_uda.StreamAnalyticsFunctionJavascriptUdaConfig;

StreamAnalyticsFunctionJavascriptUdaConfig.builder()
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
    .input(java.util.List<StreamAnalyticsFunctionJavascriptUdaInput>)
    .name(java.lang.String)
    .output(StreamAnalyticsFunctionJavascriptUdaOutput)
    .script(java.lang.String)
    .streamAnalyticsJobId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(StreamAnalyticsFunctionJavascriptUdaTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.input">input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>></code> | input block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#name StreamAnalyticsFunctionJavascriptUda#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.output">output</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.script">script</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#script StreamAnalyticsFunctionJavascriptUda#script}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.streamAnalyticsJobId">streamAnalyticsJobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#stream_analytics_job_id StreamAnalyticsFunctionJavascriptUda#stream_analytics_job_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#id StreamAnalyticsFunctionJavascriptUda#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.input"></a>

```java
public java.lang.Object getInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#input StreamAnalyticsFunctionJavascriptUda#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#name StreamAnalyticsFunctionJavascriptUda#name}.

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.output"></a>

```java
public StreamAnalyticsFunctionJavascriptUdaOutput getOutput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#output StreamAnalyticsFunctionJavascriptUda#output}

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.script"></a>

```java
public java.lang.String getScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#script StreamAnalyticsFunctionJavascriptUda#script}.

---

##### `streamAnalyticsJobId`<sup>Required</sup> <a name="streamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.streamAnalyticsJobId"></a>

```java
public java.lang.String getStreamAnalyticsJobId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#stream_analytics_job_id StreamAnalyticsFunctionJavascriptUda#stream_analytics_job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#id StreamAnalyticsFunctionJavascriptUda#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.timeouts"></a>

```java
public StreamAnalyticsFunctionJavascriptUdaTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#timeouts StreamAnalyticsFunctionJavascriptUda#timeouts}

---

### StreamAnalyticsFunctionJavascriptUdaInput <a name="StreamAnalyticsFunctionJavascriptUdaInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_uda.StreamAnalyticsFunctionJavascriptUdaInput;

StreamAnalyticsFunctionJavascriptUdaInput.builder()
    .type(java.lang.String)
//  .configurationParameter(java.lang.Boolean)
//  .configurationParameter(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#type StreamAnalyticsFunctionJavascriptUda#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput.property.configurationParameter">configurationParameter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#configuration_parameter StreamAnalyticsFunctionJavascriptUda#configuration_parameter}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#type StreamAnalyticsFunctionJavascriptUda#type}.

---

##### `configurationParameter`<sup>Optional</sup> <a name="configurationParameter" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput.property.configurationParameter"></a>

```java
public java.lang.Object getConfigurationParameter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#configuration_parameter StreamAnalyticsFunctionJavascriptUda#configuration_parameter}.

---

### StreamAnalyticsFunctionJavascriptUdaOutput <a name="StreamAnalyticsFunctionJavascriptUdaOutput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_uda.StreamAnalyticsFunctionJavascriptUdaOutput;

StreamAnalyticsFunctionJavascriptUdaOutput.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#type StreamAnalyticsFunctionJavascriptUda#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#type StreamAnalyticsFunctionJavascriptUda#type}.

---

### StreamAnalyticsFunctionJavascriptUdaTimeouts <a name="StreamAnalyticsFunctionJavascriptUdaTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_uda.StreamAnalyticsFunctionJavascriptUdaTimeouts;

StreamAnalyticsFunctionJavascriptUdaTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#create StreamAnalyticsFunctionJavascriptUda#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#delete StreamAnalyticsFunctionJavascriptUda#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#read StreamAnalyticsFunctionJavascriptUda#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#update StreamAnalyticsFunctionJavascriptUda#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#create StreamAnalyticsFunctionJavascriptUda#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#delete StreamAnalyticsFunctionJavascriptUda#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#read StreamAnalyticsFunctionJavascriptUda#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/stream_analytics_function_javascript_uda#update StreamAnalyticsFunctionJavascriptUda#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsFunctionJavascriptUdaInputList <a name="StreamAnalyticsFunctionJavascriptUdaInputList" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_uda.StreamAnalyticsFunctionJavascriptUdaInputList;

new StreamAnalyticsFunctionJavascriptUdaInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.get"></a>

```java
public StreamAnalyticsFunctionJavascriptUdaInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>>

---


### StreamAnalyticsFunctionJavascriptUdaInputOutputReference <a name="StreamAnalyticsFunctionJavascriptUdaInputOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_uda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference;

new StreamAnalyticsFunctionJavascriptUdaInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.resetConfigurationParameter">resetConfigurationParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigurationParameter` <a name="resetConfigurationParameter" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.resetConfigurationParameter"></a>

```java
public void resetConfigurationParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.configurationParameterInput">configurationParameterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.configurationParameter">configurationParameter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurationParameterInput`<sup>Optional</sup> <a name="configurationParameterInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.configurationParameterInput"></a>

```java
public java.lang.Object getConfigurationParameterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `configurationParameter`<sup>Required</sup> <a name="configurationParameter" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.configurationParameter"></a>

```java
public java.lang.Object getConfigurationParameter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>

---


### StreamAnalyticsFunctionJavascriptUdaOutputOutputReference <a name="StreamAnalyticsFunctionJavascriptUdaOutputOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_uda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference;

new StreamAnalyticsFunctionJavascriptUdaOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.internalValue"></a>

```java
public StreamAnalyticsFunctionJavascriptUdaOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a>

---


### StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference <a name="StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_function_javascript_uda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference;

new StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a>

---



