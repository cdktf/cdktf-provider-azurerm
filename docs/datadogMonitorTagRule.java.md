# `datadogMonitorTagRule` Submodule <a name="`datadogMonitorTagRule` Submodule" id="@cdktf/provider-azurerm.datadogMonitorTagRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatadogMonitorTagRule <a name="DatadogMonitorTagRule" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule azurerm_datadog_monitor_tag_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRule;

DatadogMonitorTagRule.Builder.create(Construct scope, java.lang.String id)
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
    .datadogMonitorId(java.lang.String)
//  .id(java.lang.String)
//  .log(IResolvable)
//  .log(java.util.List<DatadogMonitorTagRuleLog>)
//  .metric(IResolvable)
//  .metric(java.util.List<DatadogMonitorTagRuleMetric>)
//  .name(java.lang.String)
//  .timeouts(DatadogMonitorTagRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.datadogMonitorId">datadogMonitorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#datadog_monitor_id DatadogMonitorTagRule#datadog_monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#id DatadogMonitorTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.log">log</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>></code> | log block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.metric">metric</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>></code> | metric block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datadogMonitorId`<sup>Required</sup> <a name="datadogMonitorId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.datadogMonitorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#datadog_monitor_id DatadogMonitorTagRule#datadog_monitor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#id DatadogMonitorTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log`<sup>Optional</sup> <a name="log" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.log"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>>

log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#log DatadogMonitorTagRule#log}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.metric"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#metric DatadogMonitorTagRule#metric}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#timeouts DatadogMonitorTagRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putLog">putLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetLog">resetLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLog` <a name="putLog" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putLog"></a>

```java
public void putLog(IResolvable OR java.util.List<DatadogMonitorTagRuleLog> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putLog.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>>

---

##### `putMetric` <a name="putMetric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putMetric"></a>

```java
public void putMetric(IResolvable OR java.util.List<DatadogMonitorTagRuleMetric> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putMetric.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putTimeouts"></a>

```java
public void putTimeouts(DatadogMonitorTagRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetId"></a>

```java
public void resetId()
```

##### `resetLog` <a name="resetLog" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetLog"></a>

```java
public void resetLog()
```

##### `resetMetric` <a name="resetMetric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetMetric"></a>

```java
public void resetMetric()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetName"></a>

```java
public void resetName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatadogMonitorTagRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRule;

DatadogMonitorTagRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRule;

DatadogMonitorTagRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRule;

DatadogMonitorTagRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRule;

DatadogMonitorTagRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatadogMonitorTagRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatadogMonitorTagRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatadogMonitorTagRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatadogMonitorTagRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatadogMonitorTagRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.log">log</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList">DatadogMonitorTagRuleLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList">DatadogMonitorTagRuleMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference">DatadogMonitorTagRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.datadogMonitorIdInput">datadogMonitorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.logInput">logInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.metricInput">metricInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.datadogMonitorId">datadogMonitorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.log"></a>

```java
public DatadogMonitorTagRuleLogList getLog();
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList">DatadogMonitorTagRuleLogList</a>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.metric"></a>

```java
public DatadogMonitorTagRuleMetricList getMetric();
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList">DatadogMonitorTagRuleMetricList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.timeouts"></a>

```java
public DatadogMonitorTagRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference">DatadogMonitorTagRuleTimeoutsOutputReference</a>

---

##### `datadogMonitorIdInput`<sup>Optional</sup> <a name="datadogMonitorIdInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.datadogMonitorIdInput"></a>

```java
public java.lang.String getDatadogMonitorIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logInput`<sup>Optional</sup> <a name="logInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.logInput"></a>

```java
public java.lang.Object getLogInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.metricInput"></a>

```java
public java.lang.Object getMetricInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a>

---

##### `datadogMonitorId`<sup>Required</sup> <a name="datadogMonitorId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.datadogMonitorId"></a>

```java
public java.lang.String getDatadogMonitorId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatadogMonitorTagRuleConfig <a name="DatadogMonitorTagRuleConfig" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRuleConfig;

DatadogMonitorTagRuleConfig.builder()
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
    .datadogMonitorId(java.lang.String)
//  .id(java.lang.String)
//  .log(IResolvable)
//  .log(java.util.List<DatadogMonitorTagRuleLog>)
//  .metric(IResolvable)
//  .metric(java.util.List<DatadogMonitorTagRuleMetric>)
//  .name(java.lang.String)
//  .timeouts(DatadogMonitorTagRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.datadogMonitorId">datadogMonitorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#datadog_monitor_id DatadogMonitorTagRule#datadog_monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#id DatadogMonitorTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.log">log</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>></code> | log block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.metric">metric</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>></code> | metric block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datadogMonitorId`<sup>Required</sup> <a name="datadogMonitorId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.datadogMonitorId"></a>

```java
public java.lang.String getDatadogMonitorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#datadog_monitor_id DatadogMonitorTagRule#datadog_monitor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#id DatadogMonitorTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log`<sup>Optional</sup> <a name="log" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.log"></a>

```java
public java.lang.Object getLog();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>>

log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#log DatadogMonitorTagRule#log}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.metric"></a>

```java
public java.lang.Object getMetric();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#metric DatadogMonitorTagRule#metric}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.timeouts"></a>

```java
public DatadogMonitorTagRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#timeouts DatadogMonitorTagRule#timeouts}

---

### DatadogMonitorTagRuleLog <a name="DatadogMonitorTagRuleLog" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRuleLog;

DatadogMonitorTagRuleLog.builder()
//  .aadLogEnabled(java.lang.Boolean)
//  .aadLogEnabled(IResolvable)
//  .filter(IResolvable)
//  .filter(java.util.List<DatadogMonitorTagRuleLogFilter>)
//  .resourceLogEnabled(java.lang.Boolean)
//  .resourceLogEnabled(IResolvable)
//  .subscriptionLogEnabled(java.lang.Boolean)
//  .subscriptionLogEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.aadLogEnabled">aadLogEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#aad_log_enabled DatadogMonitorTagRule#aad_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.resourceLogEnabled">resourceLogEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#resource_log_enabled DatadogMonitorTagRule#resource_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.subscriptionLogEnabled">subscriptionLogEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#subscription_log_enabled DatadogMonitorTagRule#subscription_log_enabled}. |

---

##### `aadLogEnabled`<sup>Optional</sup> <a name="aadLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.aadLogEnabled"></a>

```java
public java.lang.Object getAadLogEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#aad_log_enabled DatadogMonitorTagRule#aad_log_enabled}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#filter DatadogMonitorTagRule#filter}

---

##### `resourceLogEnabled`<sup>Optional</sup> <a name="resourceLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.resourceLogEnabled"></a>

```java
public java.lang.Object getResourceLogEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#resource_log_enabled DatadogMonitorTagRule#resource_log_enabled}.

---

##### `subscriptionLogEnabled`<sup>Optional</sup> <a name="subscriptionLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.subscriptionLogEnabled"></a>

```java
public java.lang.Object getSubscriptionLogEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#subscription_log_enabled DatadogMonitorTagRule#subscription_log_enabled}.

---

### DatadogMonitorTagRuleLogFilter <a name="DatadogMonitorTagRuleLogFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRuleLogFilter;

DatadogMonitorTagRuleLogFilter.builder()
    .action(java.lang.String)
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#action DatadogMonitorTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#value DatadogMonitorTagRule#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#action DatadogMonitorTagRule#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#value DatadogMonitorTagRule#value}.

---

### DatadogMonitorTagRuleMetric <a name="DatadogMonitorTagRuleMetric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRuleMetric;

DatadogMonitorTagRuleMetric.builder()
//  .filter(IResolvable)
//  .filter(java.util.List<DatadogMonitorTagRuleMetricFilter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>></code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#filter DatadogMonitorTagRule#filter}

---

### DatadogMonitorTagRuleMetricFilter <a name="DatadogMonitorTagRuleMetricFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRuleMetricFilter;

DatadogMonitorTagRuleMetricFilter.builder()
    .action(java.lang.String)
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#action DatadogMonitorTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#value DatadogMonitorTagRule#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#action DatadogMonitorTagRule#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#value DatadogMonitorTagRule#value}.

---

### DatadogMonitorTagRuleTimeouts <a name="DatadogMonitorTagRuleTimeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRuleTimeouts;

DatadogMonitorTagRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#create DatadogMonitorTagRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#delete DatadogMonitorTagRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#read DatadogMonitorTagRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#update DatadogMonitorTagRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#create DatadogMonitorTagRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#delete DatadogMonitorTagRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#read DatadogMonitorTagRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/datadog_monitor_tag_rule#update DatadogMonitorTagRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatadogMonitorTagRuleLogFilterList <a name="DatadogMonitorTagRuleLogFilterList" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRuleLogFilterList;

new DatadogMonitorTagRuleLogFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.get"></a>

```java
public DatadogMonitorTagRuleLogFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>>

---


### DatadogMonitorTagRuleLogFilterOutputReference <a name="DatadogMonitorTagRuleLogFilterOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRuleLogFilterOutputReference;

new DatadogMonitorTagRuleLogFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>

---


### DatadogMonitorTagRuleLogList <a name="DatadogMonitorTagRuleLogList" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRuleLogList;

new DatadogMonitorTagRuleLogList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.get"></a>

```java
public DatadogMonitorTagRuleLogOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>>

---


### DatadogMonitorTagRuleLogOutputReference <a name="DatadogMonitorTagRuleLogOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRuleLogOutputReference;

new DatadogMonitorTagRuleLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetAadLogEnabled">resetAadLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetResourceLogEnabled">resetResourceLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetSubscriptionLogEnabled">resetSubscriptionLogEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DatadogMonitorTagRuleLogFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>>

---

##### `resetAadLogEnabled` <a name="resetAadLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetAadLogEnabled"></a>

```java
public void resetAadLogEnabled()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetResourceLogEnabled` <a name="resetResourceLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetResourceLogEnabled"></a>

```java
public void resetResourceLogEnabled()
```

##### `resetSubscriptionLogEnabled` <a name="resetSubscriptionLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetSubscriptionLogEnabled"></a>

```java
public void resetSubscriptionLogEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList">DatadogMonitorTagRuleLogFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.aadLogEnabledInput">aadLogEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.resourceLogEnabledInput">resourceLogEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.subscriptionLogEnabledInput">subscriptionLogEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.aadLogEnabled">aadLogEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.resourceLogEnabled">resourceLogEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.subscriptionLogEnabled">subscriptionLogEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.filter"></a>

```java
public DatadogMonitorTagRuleLogFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList">DatadogMonitorTagRuleLogFilterList</a>

---

##### `aadLogEnabledInput`<sup>Optional</sup> <a name="aadLogEnabledInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.aadLogEnabledInput"></a>

```java
public java.lang.Object getAadLogEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>>

---

##### `resourceLogEnabledInput`<sup>Optional</sup> <a name="resourceLogEnabledInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.resourceLogEnabledInput"></a>

```java
public java.lang.Object getResourceLogEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subscriptionLogEnabledInput`<sup>Optional</sup> <a name="subscriptionLogEnabledInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.subscriptionLogEnabledInput"></a>

```java
public java.lang.Object getSubscriptionLogEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `aadLogEnabled`<sup>Required</sup> <a name="aadLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.aadLogEnabled"></a>

```java
public java.lang.Object getAadLogEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceLogEnabled`<sup>Required</sup> <a name="resourceLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.resourceLogEnabled"></a>

```java
public java.lang.Object getResourceLogEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subscriptionLogEnabled`<sup>Required</sup> <a name="subscriptionLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.subscriptionLogEnabled"></a>

```java
public java.lang.Object getSubscriptionLogEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>

---


### DatadogMonitorTagRuleMetricFilterList <a name="DatadogMonitorTagRuleMetricFilterList" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRuleMetricFilterList;

new DatadogMonitorTagRuleMetricFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.get"></a>

```java
public DatadogMonitorTagRuleMetricFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>>

---


### DatadogMonitorTagRuleMetricFilterOutputReference <a name="DatadogMonitorTagRuleMetricFilterOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRuleMetricFilterOutputReference;

new DatadogMonitorTagRuleMetricFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>

---


### DatadogMonitorTagRuleMetricList <a name="DatadogMonitorTagRuleMetricList" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRuleMetricList;

new DatadogMonitorTagRuleMetricList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.get"></a>

```java
public DatadogMonitorTagRuleMetricOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>>

---


### DatadogMonitorTagRuleMetricOutputReference <a name="DatadogMonitorTagRuleMetricOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRuleMetricOutputReference;

new DatadogMonitorTagRuleMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DatadogMonitorTagRuleMetricFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resetFilter"></a>

```java
public void resetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList">DatadogMonitorTagRuleMetricFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.filter"></a>

```java
public DatadogMonitorTagRuleMetricFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList">DatadogMonitorTagRuleMetricFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>

---


### DatadogMonitorTagRuleTimeoutsOutputReference <a name="DatadogMonitorTagRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.datadog_monitor_tag_rule.DatadogMonitorTagRuleTimeoutsOutputReference;

new DatadogMonitorTagRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a>

---



