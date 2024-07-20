# `logAnalyticsDatasourceWindowsPerformanceCounter` Submodule <a name="`logAnalyticsDatasourceWindowsPerformanceCounter` Submodule" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsDatasourceWindowsPerformanceCounter <a name="LogAnalyticsDatasourceWindowsPerformanceCounter" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter azurerm_log_analytics_datasource_windows_performance_counter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_datasource_windows_performance_counter.LogAnalyticsDatasourceWindowsPerformanceCounter;

LogAnalyticsDatasourceWindowsPerformanceCounter.Builder.create(Construct scope, java.lang.String id)
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
    .counterName(java.lang.String)
    .instanceName(java.lang.String)
    .intervalSeconds(java.lang.Number)
    .name(java.lang.String)
    .objectName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .workspaceName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.counterName">counterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#counter_name LogAnalyticsDatasourceWindowsPerformanceCounter#counter_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.instanceName">instanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#instance_name LogAnalyticsDatasourceWindowsPerformanceCounter#instance_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#interval_seconds LogAnalyticsDatasourceWindowsPerformanceCounter#interval_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#name LogAnalyticsDatasourceWindowsPerformanceCounter#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.objectName">objectName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#object_name LogAnalyticsDatasourceWindowsPerformanceCounter#object_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#resource_group_name LogAnalyticsDatasourceWindowsPerformanceCounter#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.workspaceName">workspaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#workspace_name LogAnalyticsDatasourceWindowsPerformanceCounter#workspace_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#id LogAnalyticsDatasourceWindowsPerformanceCounter#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts">LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `counterName`<sup>Required</sup> <a name="counterName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.counterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#counter_name LogAnalyticsDatasourceWindowsPerformanceCounter#counter_name}.

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.instanceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#instance_name LogAnalyticsDatasourceWindowsPerformanceCounter#instance_name}.

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.intervalSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#interval_seconds LogAnalyticsDatasourceWindowsPerformanceCounter#interval_seconds}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#name LogAnalyticsDatasourceWindowsPerformanceCounter#name}.

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.objectName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#object_name LogAnalyticsDatasourceWindowsPerformanceCounter#object_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#resource_group_name LogAnalyticsDatasourceWindowsPerformanceCounter#resource_group_name}.

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.workspaceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#workspace_name LogAnalyticsDatasourceWindowsPerformanceCounter#workspace_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#id LogAnalyticsDatasourceWindowsPerformanceCounter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts">LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#timeouts LogAnalyticsDatasourceWindowsPerformanceCounter#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.putTimeouts"></a>

```java
public void putTimeouts(LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts">LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsDatasourceWindowsPerformanceCounter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_datasource_windows_performance_counter.LogAnalyticsDatasourceWindowsPerformanceCounter;

LogAnalyticsDatasourceWindowsPerformanceCounter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_datasource_windows_performance_counter.LogAnalyticsDatasourceWindowsPerformanceCounter;

LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_datasource_windows_performance_counter.LogAnalyticsDatasourceWindowsPerformanceCounter;

LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_datasource_windows_performance_counter.LogAnalyticsDatasourceWindowsPerformanceCounter;

LogAnalyticsDatasourceWindowsPerformanceCounter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogAnalyticsDatasourceWindowsPerformanceCounter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LogAnalyticsDatasourceWindowsPerformanceCounter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogAnalyticsDatasourceWindowsPerformanceCounter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogAnalyticsDatasourceWindowsPerformanceCounter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsDatasourceWindowsPerformanceCounter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference">LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.counterNameInput">counterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.instanceNameInput">instanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.objectNameInput">objectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts">LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.workspaceNameInput">workspaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.counterName">counterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.objectName">objectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.workspaceName">workspaceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.timeouts"></a>

```java
public LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference">LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference</a>

---

##### `counterNameInput`<sup>Optional</sup> <a name="counterNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.counterNameInput"></a>

```java
public java.lang.String getCounterNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.instanceNameInput"></a>

```java
public java.lang.String getInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.intervalSecondsInput"></a>

```java
public java.lang.Number getIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `objectNameInput`<sup>Optional</sup> <a name="objectNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.objectNameInput"></a>

```java
public java.lang.String getObjectNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts">LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts</a>

---

##### `workspaceNameInput`<sup>Optional</sup> <a name="workspaceNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.workspaceNameInput"></a>

```java
public java.lang.String getWorkspaceNameInput();
```

- *Type:* java.lang.String

---

##### `counterName`<sup>Required</sup> <a name="counterName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.counterName"></a>

```java
public java.lang.String getCounterName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.objectName"></a>

```java
public java.lang.String getObjectName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.workspaceName"></a>

```java
public java.lang.String getWorkspaceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsDatasourceWindowsPerformanceCounterConfig <a name="LogAnalyticsDatasourceWindowsPerformanceCounterConfig" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_datasource_windows_performance_counter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig;

LogAnalyticsDatasourceWindowsPerformanceCounterConfig.builder()
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
    .counterName(java.lang.String)
    .instanceName(java.lang.String)
    .intervalSeconds(java.lang.Number)
    .name(java.lang.String)
    .objectName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .workspaceName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.counterName">counterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#counter_name LogAnalyticsDatasourceWindowsPerformanceCounter#counter_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#instance_name LogAnalyticsDatasourceWindowsPerformanceCounter#instance_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#interval_seconds LogAnalyticsDatasourceWindowsPerformanceCounter#interval_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#name LogAnalyticsDatasourceWindowsPerformanceCounter#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.objectName">objectName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#object_name LogAnalyticsDatasourceWindowsPerformanceCounter#object_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#resource_group_name LogAnalyticsDatasourceWindowsPerformanceCounter#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.workspaceName">workspaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#workspace_name LogAnalyticsDatasourceWindowsPerformanceCounter#workspace_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#id LogAnalyticsDatasourceWindowsPerformanceCounter#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts">LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `counterName`<sup>Required</sup> <a name="counterName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.counterName"></a>

```java
public java.lang.String getCounterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#counter_name LogAnalyticsDatasourceWindowsPerformanceCounter#counter_name}.

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#instance_name LogAnalyticsDatasourceWindowsPerformanceCounter#instance_name}.

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#interval_seconds LogAnalyticsDatasourceWindowsPerformanceCounter#interval_seconds}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#name LogAnalyticsDatasourceWindowsPerformanceCounter#name}.

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.objectName"></a>

```java
public java.lang.String getObjectName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#object_name LogAnalyticsDatasourceWindowsPerformanceCounter#object_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#resource_group_name LogAnalyticsDatasourceWindowsPerformanceCounter#resource_group_name}.

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.workspaceName"></a>

```java
public java.lang.String getWorkspaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#workspace_name LogAnalyticsDatasourceWindowsPerformanceCounter#workspace_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#id LogAnalyticsDatasourceWindowsPerformanceCounter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.timeouts"></a>

```java
public LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts">LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#timeouts LogAnalyticsDatasourceWindowsPerformanceCounter#timeouts}

---

### LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts <a name="LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_datasource_windows_performance_counter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts;

LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#create LogAnalyticsDatasourceWindowsPerformanceCounter#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#delete LogAnalyticsDatasourceWindowsPerformanceCounter#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#read LogAnalyticsDatasourceWindowsPerformanceCounter#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#update LogAnalyticsDatasourceWindowsPerformanceCounter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#create LogAnalyticsDatasourceWindowsPerformanceCounter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#delete LogAnalyticsDatasourceWindowsPerformanceCounter#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#read LogAnalyticsDatasourceWindowsPerformanceCounter#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/log_analytics_datasource_windows_performance_counter#update LogAnalyticsDatasourceWindowsPerformanceCounter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference <a name="LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_datasource_windows_performance_counter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference;

new LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts">LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts">LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts</a>

---



