# `dynatraceTagRules` Submodule <a name="`dynatraceTagRules` Submodule" id="@cdktf/provider-azurerm.dynatraceTagRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynatraceTagRules <a name="DynatraceTagRules" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules azurerm_dynatrace_tag_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRules;

DynatraceTagRules.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .monitorId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .logRule(DynatraceTagRulesLogRule)
//  .metricRule(DynatraceTagRulesMetricRule)
//  .timeouts(DynatraceTagRulesTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.monitorId">monitorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#monitor_id DynatraceTagRules#monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#id DynatraceTagRules#id}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.logRule">logRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a></code> | log_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.metricRule">metricRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a></code> | metric_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.monitorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#monitor_id DynatraceTagRules#monitor_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#id DynatraceTagRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logRule`<sup>Optional</sup> <a name="logRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.logRule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a>

log_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#log_rule DynatraceTagRules#log_rule}

---

##### `metricRule`<sup>Optional</sup> <a name="metricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.metricRule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a>

metric_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#metric_rule DynatraceTagRules#metric_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#timeouts DynatraceTagRules#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putLogRule">putLogRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putMetricRule">putMetricRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetLogRule">resetLogRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetMetricRule">resetMetricRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogRule` <a name="putLogRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putLogRule"></a>

```java
public void putLogRule(DynatraceTagRulesLogRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putLogRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a>

---

##### `putMetricRule` <a name="putMetricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putMetricRule"></a>

```java
public void putMetricRule(DynatraceTagRulesMetricRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putMetricRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putTimeouts"></a>

```java
public void putTimeouts(DynatraceTagRulesTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetId"></a>

```java
public void resetId()
```

##### `resetLogRule` <a name="resetLogRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetLogRule"></a>

```java
public void resetLogRule()
```

##### `resetMetricRule` <a name="resetMetricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetMetricRule"></a>

```java
public void resetMetricRule()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DynatraceTagRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRules;

DynatraceTagRules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRules;

DynatraceTagRules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRules;

DynatraceTagRules.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRules;

DynatraceTagRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DynatraceTagRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DynatraceTagRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DynatraceTagRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DynatraceTagRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DynatraceTagRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.logRule">logRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference">DynatraceTagRulesLogRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.metricRule">metricRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference">DynatraceTagRulesMetricRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference">DynatraceTagRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.logRuleInput">logRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.metricRuleInput">metricRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.monitorIdInput">monitorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.monitorId">monitorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logRule`<sup>Required</sup> <a name="logRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.logRule"></a>

```java
public DynatraceTagRulesLogRuleOutputReference getLogRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference">DynatraceTagRulesLogRuleOutputReference</a>

---

##### `metricRule`<sup>Required</sup> <a name="metricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.metricRule"></a>

```java
public DynatraceTagRulesMetricRuleOutputReference getMetricRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference">DynatraceTagRulesMetricRuleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.timeouts"></a>

```java
public DynatraceTagRulesTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference">DynatraceTagRulesTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logRuleInput`<sup>Optional</sup> <a name="logRuleInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.logRuleInput"></a>

```java
public DynatraceTagRulesLogRule getLogRuleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a>

---

##### `metricRuleInput`<sup>Optional</sup> <a name="metricRuleInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.metricRuleInput"></a>

```java
public DynatraceTagRulesMetricRule getMetricRuleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a>

---

##### `monitorIdInput`<sup>Optional</sup> <a name="monitorIdInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.monitorIdInput"></a>

```java
public java.lang.String getMonitorIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.timeoutsInput"></a>

```java
public IResolvable|DynatraceTagRulesTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.monitorId"></a>

```java
public java.lang.String getMonitorId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DynatraceTagRulesConfig <a name="DynatraceTagRulesConfig" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRulesConfig;

DynatraceTagRulesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .monitorId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .logRule(DynatraceTagRulesLogRule)
//  .metricRule(DynatraceTagRulesMetricRule)
//  .timeouts(DynatraceTagRulesTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.monitorId">monitorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#monitor_id DynatraceTagRules#monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#id DynatraceTagRules#id}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.logRule">logRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a></code> | log_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.metricRule">metricRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a></code> | metric_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.monitorId"></a>

```java
public java.lang.String getMonitorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#monitor_id DynatraceTagRules#monitor_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#id DynatraceTagRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logRule`<sup>Optional</sup> <a name="logRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.logRule"></a>

```java
public DynatraceTagRulesLogRule getLogRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a>

log_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#log_rule DynatraceTagRules#log_rule}

---

##### `metricRule`<sup>Optional</sup> <a name="metricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.metricRule"></a>

```java
public DynatraceTagRulesMetricRule getMetricRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a>

metric_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#metric_rule DynatraceTagRules#metric_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.timeouts"></a>

```java
public DynatraceTagRulesTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#timeouts DynatraceTagRules#timeouts}

---

### DynatraceTagRulesLogRule <a name="DynatraceTagRulesLogRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRulesLogRule;

DynatraceTagRulesLogRule.builder()
    .filteringTag(IResolvable|java.util.List<DynatraceTagRulesLogRuleFilteringTag>)
//  .sendActivityLogsEnabled(java.lang.Boolean|IResolvable)
//  .sendAzureActiveDirectoryLogsEnabled(java.lang.Boolean|IResolvable)
//  .sendSubscriptionLogsEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.filteringTag">filteringTag</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>></code> | filtering_tag block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendActivityLogsEnabled">sendActivityLogsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#send_activity_logs_enabled DynatraceTagRules#send_activity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendAzureActiveDirectoryLogsEnabled">sendAzureActiveDirectoryLogsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#send_azure_active_directory_logs_enabled DynatraceTagRules#send_azure_active_directory_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendSubscriptionLogsEnabled">sendSubscriptionLogsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#send_subscription_logs_enabled DynatraceTagRules#send_subscription_logs_enabled}. |

---

##### `filteringTag`<sup>Required</sup> <a name="filteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.filteringTag"></a>

```java
public IResolvable|java.util.List<DynatraceTagRulesLogRuleFilteringTag> getFilteringTag();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>>

filtering_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#filtering_tag DynatraceTagRules#filtering_tag}

---

##### `sendActivityLogsEnabled`<sup>Optional</sup> <a name="sendActivityLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendActivityLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSendActivityLogsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#send_activity_logs_enabled DynatraceTagRules#send_activity_logs_enabled}.

---

##### `sendAzureActiveDirectoryLogsEnabled`<sup>Optional</sup> <a name="sendAzureActiveDirectoryLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendAzureActiveDirectoryLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSendAzureActiveDirectoryLogsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#send_azure_active_directory_logs_enabled DynatraceTagRules#send_azure_active_directory_logs_enabled}.

---

##### `sendSubscriptionLogsEnabled`<sup>Optional</sup> <a name="sendSubscriptionLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendSubscriptionLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSendSubscriptionLogsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#send_subscription_logs_enabled DynatraceTagRules#send_subscription_logs_enabled}.

---

### DynatraceTagRulesLogRuleFilteringTag <a name="DynatraceTagRulesLogRuleFilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRulesLogRuleFilteringTag;

DynatraceTagRulesLogRuleFilteringTag.builder()
    .action(java.lang.String)
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}.

---

### DynatraceTagRulesMetricRule <a name="DynatraceTagRulesMetricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRulesMetricRule;

DynatraceTagRulesMetricRule.builder()
    .filteringTag(IResolvable|java.util.List<DynatraceTagRulesMetricRuleFilteringTag>)
//  .sendingMetricsEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule.property.filteringTag">filteringTag</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>></code> | filtering_tag block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule.property.sendingMetricsEnabled">sendingMetricsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#sending_metrics_enabled DynatraceTagRules#sending_metrics_enabled}. |

---

##### `filteringTag`<sup>Required</sup> <a name="filteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule.property.filteringTag"></a>

```java
public IResolvable|java.util.List<DynatraceTagRulesMetricRuleFilteringTag> getFilteringTag();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>>

filtering_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#filtering_tag DynatraceTagRules#filtering_tag}

---

##### `sendingMetricsEnabled`<sup>Optional</sup> <a name="sendingMetricsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule.property.sendingMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSendingMetricsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#sending_metrics_enabled DynatraceTagRules#sending_metrics_enabled}.

---

### DynatraceTagRulesMetricRuleFilteringTag <a name="DynatraceTagRulesMetricRuleFilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRulesMetricRuleFilteringTag;

DynatraceTagRulesMetricRuleFilteringTag.builder()
    .action(java.lang.String)
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}.

---

### DynatraceTagRulesTimeouts <a name="DynatraceTagRulesTimeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRulesTimeouts;

DynatraceTagRulesTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#create DynatraceTagRules#create}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#delete DynatraceTagRules#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#read DynatraceTagRules#read}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#update DynatraceTagRules#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#create DynatraceTagRules#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#delete DynatraceTagRules#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#read DynatraceTagRules#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dynatrace_tag_rules#update DynatraceTagRules#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynatraceTagRulesLogRuleFilteringTagList <a name="DynatraceTagRulesLogRuleFilteringTagList" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRulesLogRuleFilteringTagList;

new DynatraceTagRulesLogRuleFilteringTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.get"></a>

```java
public DynatraceTagRulesLogRuleFilteringTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DynatraceTagRulesLogRuleFilteringTag> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>>

---


### DynatraceTagRulesLogRuleFilteringTagOutputReference <a name="DynatraceTagRulesLogRuleFilteringTagOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRulesLogRuleFilteringTagOutputReference;

new DynatraceTagRulesLogRuleFilteringTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.internalValue"></a>

```java
public IResolvable|DynatraceTagRulesLogRuleFilteringTag getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>

---


### DynatraceTagRulesLogRuleOutputReference <a name="DynatraceTagRulesLogRuleOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRulesLogRuleOutputReference;

new DynatraceTagRulesLogRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.putFilteringTag">putFilteringTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendActivityLogsEnabled">resetSendActivityLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendAzureActiveDirectoryLogsEnabled">resetSendAzureActiveDirectoryLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendSubscriptionLogsEnabled">resetSendSubscriptionLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilteringTag` <a name="putFilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.putFilteringTag"></a>

```java
public void putFilteringTag(IResolvable|java.util.List<DynatraceTagRulesLogRuleFilteringTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.putFilteringTag.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>>

---

##### `resetSendActivityLogsEnabled` <a name="resetSendActivityLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendActivityLogsEnabled"></a>

```java
public void resetSendActivityLogsEnabled()
```

##### `resetSendAzureActiveDirectoryLogsEnabled` <a name="resetSendAzureActiveDirectoryLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendAzureActiveDirectoryLogsEnabled"></a>

```java
public void resetSendAzureActiveDirectoryLogsEnabled()
```

##### `resetSendSubscriptionLogsEnabled` <a name="resetSendSubscriptionLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendSubscriptionLogsEnabled"></a>

```java
public void resetSendSubscriptionLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.filteringTag">filteringTag</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList">DynatraceTagRulesLogRuleFilteringTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.filteringTagInput">filteringTagInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendActivityLogsEnabledInput">sendActivityLogsEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendAzureActiveDirectoryLogsEnabledInput">sendAzureActiveDirectoryLogsEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendSubscriptionLogsEnabledInput">sendSubscriptionLogsEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendActivityLogsEnabled">sendActivityLogsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendAzureActiveDirectoryLogsEnabled">sendAzureActiveDirectoryLogsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendSubscriptionLogsEnabled">sendSubscriptionLogsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filteringTag`<sup>Required</sup> <a name="filteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.filteringTag"></a>

```java
public DynatraceTagRulesLogRuleFilteringTagList getFilteringTag();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList">DynatraceTagRulesLogRuleFilteringTagList</a>

---

##### `filteringTagInput`<sup>Optional</sup> <a name="filteringTagInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.filteringTagInput"></a>

```java
public IResolvable|java.util.List<DynatraceTagRulesLogRuleFilteringTag> getFilteringTagInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>>

---

##### `sendActivityLogsEnabledInput`<sup>Optional</sup> <a name="sendActivityLogsEnabledInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendActivityLogsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSendActivityLogsEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `sendAzureActiveDirectoryLogsEnabledInput`<sup>Optional</sup> <a name="sendAzureActiveDirectoryLogsEnabledInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendAzureActiveDirectoryLogsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSendAzureActiveDirectoryLogsEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `sendSubscriptionLogsEnabledInput`<sup>Optional</sup> <a name="sendSubscriptionLogsEnabledInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendSubscriptionLogsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSendSubscriptionLogsEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `sendActivityLogsEnabled`<sup>Required</sup> <a name="sendActivityLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendActivityLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSendActivityLogsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `sendAzureActiveDirectoryLogsEnabled`<sup>Required</sup> <a name="sendAzureActiveDirectoryLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendAzureActiveDirectoryLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSendAzureActiveDirectoryLogsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `sendSubscriptionLogsEnabled`<sup>Required</sup> <a name="sendSubscriptionLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendSubscriptionLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSendSubscriptionLogsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.internalValue"></a>

```java
public DynatraceTagRulesLogRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a>

---


### DynatraceTagRulesMetricRuleFilteringTagList <a name="DynatraceTagRulesMetricRuleFilteringTagList" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRulesMetricRuleFilteringTagList;

new DynatraceTagRulesMetricRuleFilteringTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.get"></a>

```java
public DynatraceTagRulesMetricRuleFilteringTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DynatraceTagRulesMetricRuleFilteringTag> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>>

---


### DynatraceTagRulesMetricRuleFilteringTagOutputReference <a name="DynatraceTagRulesMetricRuleFilteringTagOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRulesMetricRuleFilteringTagOutputReference;

new DynatraceTagRulesMetricRuleFilteringTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.internalValue"></a>

```java
public IResolvable|DynatraceTagRulesMetricRuleFilteringTag getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>

---


### DynatraceTagRulesMetricRuleOutputReference <a name="DynatraceTagRulesMetricRuleOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRulesMetricRuleOutputReference;

new DynatraceTagRulesMetricRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.putFilteringTag">putFilteringTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.resetSendingMetricsEnabled">resetSendingMetricsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilteringTag` <a name="putFilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.putFilteringTag"></a>

```java
public void putFilteringTag(IResolvable|java.util.List<DynatraceTagRulesMetricRuleFilteringTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.putFilteringTag.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>>

---

##### `resetSendingMetricsEnabled` <a name="resetSendingMetricsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.resetSendingMetricsEnabled"></a>

```java
public void resetSendingMetricsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.filteringTag">filteringTag</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList">DynatraceTagRulesMetricRuleFilteringTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.filteringTagInput">filteringTagInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.sendingMetricsEnabledInput">sendingMetricsEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.sendingMetricsEnabled">sendingMetricsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filteringTag`<sup>Required</sup> <a name="filteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.filteringTag"></a>

```java
public DynatraceTagRulesMetricRuleFilteringTagList getFilteringTag();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList">DynatraceTagRulesMetricRuleFilteringTagList</a>

---

##### `filteringTagInput`<sup>Optional</sup> <a name="filteringTagInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.filteringTagInput"></a>

```java
public IResolvable|java.util.List<DynatraceTagRulesMetricRuleFilteringTag> getFilteringTagInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>>

---

##### `sendingMetricsEnabledInput`<sup>Optional</sup> <a name="sendingMetricsEnabledInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.sendingMetricsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSendingMetricsEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `sendingMetricsEnabled`<sup>Required</sup> <a name="sendingMetricsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.sendingMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSendingMetricsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.internalValue"></a>

```java
public DynatraceTagRulesMetricRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a>

---


### DynatraceTagRulesTimeoutsOutputReference <a name="DynatraceTagRulesTimeoutsOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dynatrace_tag_rules.DynatraceTagRulesTimeoutsOutputReference;

new DynatraceTagRulesTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DynatraceTagRulesTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a>

---



