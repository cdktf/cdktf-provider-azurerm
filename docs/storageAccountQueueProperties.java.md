# `storageAccountQueueProperties` Submodule <a name="`storageAccountQueueProperties` Submodule" id="@cdktf/provider-azurerm.storageAccountQueueProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountQueuePropertiesA <a name="StorageAccountQueuePropertiesA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties azurerm_storage_account_queue_properties}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_queue_properties.StorageAccountQueuePropertiesA;

StorageAccountQueuePropertiesA.Builder.create(Construct scope, java.lang.String id)
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
    .storageAccountId(java.lang.String)
//  .corsRule(IResolvable)
//  .corsRule(java.util.List<StorageAccountQueuePropertiesCorsRuleA>)
//  .hourMetrics(StorageAccountQueuePropertiesHourMetricsA)
//  .id(java.lang.String)
//  .logging(StorageAccountQueuePropertiesLoggingA)
//  .minuteMetrics(StorageAccountQueuePropertiesMinuteMetricsA)
//  .timeouts(StorageAccountQueuePropertiesTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueuePropertiesA#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.corsRule">corsRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>></code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.hourMetrics">hourMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a></code> | hour_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#id StorageAccountQueuePropertiesA#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a></code> | logging block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.minuteMetrics">minuteMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a></code> | minute_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.storageAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueuePropertiesA#storage_account_id}.

---

##### `corsRule`<sup>Optional</sup> <a name="corsRule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.corsRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>>

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#cors_rule StorageAccountQueuePropertiesA#cors_rule}

---

##### `hourMetrics`<sup>Optional</sup> <a name="hourMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.hourMetrics"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#hour_metrics StorageAccountQueuePropertiesA#hour_metrics}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#id StorageAccountQueuePropertiesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#logging StorageAccountQueuePropertiesA#logging}

---

##### `minuteMetrics`<sup>Optional</sup> <a name="minuteMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.minuteMetrics"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#minute_metrics StorageAccountQueuePropertiesA#minute_metrics}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#timeouts StorageAccountQueuePropertiesA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putCorsRule">putCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putHourMetrics">putHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putMinuteMetrics">putMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetCorsRule">resetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetHourMetrics">resetHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetMinuteMetrics">resetMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCorsRule` <a name="putCorsRule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putCorsRule"></a>

```java
public void putCorsRule(IResolvable OR java.util.List<StorageAccountQueuePropertiesCorsRuleA> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putCorsRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>>

---

##### `putHourMetrics` <a name="putHourMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putHourMetrics"></a>

```java
public void putHourMetrics(StorageAccountQueuePropertiesHourMetricsA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putHourMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

---

##### `putLogging` <a name="putLogging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging"></a>

```java
public void putLogging(StorageAccountQueuePropertiesLoggingA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

---

##### `putMinuteMetrics` <a name="putMinuteMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putMinuteMetrics"></a>

```java
public void putMinuteMetrics(StorageAccountQueuePropertiesMinuteMetricsA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putMinuteMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts"></a>

```java
public void putTimeouts(StorageAccountQueuePropertiesTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

---

##### `resetCorsRule` <a name="resetCorsRule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetCorsRule"></a>

```java
public void resetCorsRule()
```

##### `resetHourMetrics` <a name="resetHourMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetHourMetrics"></a>

```java
public void resetHourMetrics()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetId"></a>

```java
public void resetId()
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetLogging"></a>

```java
public void resetLogging()
```

##### `resetMinuteMetrics` <a name="resetMinuteMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetMinuteMetrics"></a>

```java
public void resetMinuteMetrics()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageAccountQueuePropertiesA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_queue_properties.StorageAccountQueuePropertiesA;

StorageAccountQueuePropertiesA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_queue_properties.StorageAccountQueuePropertiesA;

StorageAccountQueuePropertiesA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_queue_properties.StorageAccountQueuePropertiesA;

StorageAccountQueuePropertiesA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_queue_properties.StorageAccountQueuePropertiesA;

StorageAccountQueuePropertiesA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageAccountQueuePropertiesA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StorageAccountQueuePropertiesA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageAccountQueuePropertiesA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageAccountQueuePropertiesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StorageAccountQueuePropertiesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRule">corsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList">StorageAccountQueuePropertiesCorsRuleAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetrics">hourMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference">StorageAccountQueuePropertiesHourMetricsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference">StorageAccountQueuePropertiesLoggingAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetrics">minuteMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference">StorageAccountQueuePropertiesMinuteMetricsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference">StorageAccountQueuePropertiesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRuleInput">corsRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetricsInput">hourMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.loggingInput">loggingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetricsInput">minuteMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRule"></a>

```java
public StorageAccountQueuePropertiesCorsRuleAList getCorsRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList">StorageAccountQueuePropertiesCorsRuleAList</a>

---

##### `hourMetrics`<sup>Required</sup> <a name="hourMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetrics"></a>

```java
public StorageAccountQueuePropertiesHourMetricsAOutputReference getHourMetrics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference">StorageAccountQueuePropertiesHourMetricsAOutputReference</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.logging"></a>

```java
public StorageAccountQueuePropertiesLoggingAOutputReference getLogging();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference">StorageAccountQueuePropertiesLoggingAOutputReference</a>

---

##### `minuteMetrics`<sup>Required</sup> <a name="minuteMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetrics"></a>

```java
public StorageAccountQueuePropertiesMinuteMetricsAOutputReference getMinuteMetrics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference">StorageAccountQueuePropertiesMinuteMetricsAOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeouts"></a>

```java
public StorageAccountQueuePropertiesTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference">StorageAccountQueuePropertiesTimeoutsOutputReference</a>

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRuleInput"></a>

```java
public java.lang.Object getCorsRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>>

---

##### `hourMetricsInput`<sup>Optional</sup> <a name="hourMetricsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetricsInput"></a>

```java
public StorageAccountQueuePropertiesHourMetricsA getHourMetricsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.loggingInput"></a>

```java
public StorageAccountQueuePropertiesLoggingA getLoggingInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

---

##### `minuteMetricsInput`<sup>Optional</sup> <a name="minuteMetricsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetricsInput"></a>

```java
public StorageAccountQueuePropertiesMinuteMetricsA getMinuteMetricsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountQueuePropertiesAConfig <a name="StorageAccountQueuePropertiesAConfig" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_queue_properties.StorageAccountQueuePropertiesAConfig;

StorageAccountQueuePropertiesAConfig.builder()
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
    .storageAccountId(java.lang.String)
//  .corsRule(IResolvable)
//  .corsRule(java.util.List<StorageAccountQueuePropertiesCorsRuleA>)
//  .hourMetrics(StorageAccountQueuePropertiesHourMetricsA)
//  .id(java.lang.String)
//  .logging(StorageAccountQueuePropertiesLoggingA)
//  .minuteMetrics(StorageAccountQueuePropertiesMinuteMetricsA)
//  .timeouts(StorageAccountQueuePropertiesTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueuePropertiesA#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.corsRule">corsRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>></code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.hourMetrics">hourMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a></code> | hour_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#id StorageAccountQueuePropertiesA#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a></code> | logging block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.minuteMetrics">minuteMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a></code> | minute_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueuePropertiesA#storage_account_id}.

---

##### `corsRule`<sup>Optional</sup> <a name="corsRule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.corsRule"></a>

```java
public java.lang.Object getCorsRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>>

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#cors_rule StorageAccountQueuePropertiesA#cors_rule}

---

##### `hourMetrics`<sup>Optional</sup> <a name="hourMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.hourMetrics"></a>

```java
public StorageAccountQueuePropertiesHourMetricsA getHourMetrics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#hour_metrics StorageAccountQueuePropertiesA#hour_metrics}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#id StorageAccountQueuePropertiesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.logging"></a>

```java
public StorageAccountQueuePropertiesLoggingA getLogging();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#logging StorageAccountQueuePropertiesA#logging}

---

##### `minuteMetrics`<sup>Optional</sup> <a name="minuteMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.minuteMetrics"></a>

```java
public StorageAccountQueuePropertiesMinuteMetricsA getMinuteMetrics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#minute_metrics StorageAccountQueuePropertiesA#minute_metrics}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.timeouts"></a>

```java
public StorageAccountQueuePropertiesTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#timeouts StorageAccountQueuePropertiesA#timeouts}

---

### StorageAccountQueuePropertiesCorsRuleA <a name="StorageAccountQueuePropertiesCorsRuleA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_queue_properties.StorageAccountQueuePropertiesCorsRuleA;

StorageAccountQueuePropertiesCorsRuleA.builder()
    .allowedHeaders(java.util.List<java.lang.String>)
    .allowedMethods(java.util.List<java.lang.String>)
    .allowedOrigins(java.util.List<java.lang.String>)
    .exposedHeaders(java.util.List<java.lang.String>)
    .maxAgeInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#allowed_headers StorageAccountQueuePropertiesA#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#allowed_methods StorageAccountQueuePropertiesA#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#allowed_origins StorageAccountQueuePropertiesA#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.exposedHeaders">exposedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#exposed_headers StorageAccountQueuePropertiesA#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#max_age_in_seconds StorageAccountQueuePropertiesA#max_age_in_seconds}. |

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#allowed_headers StorageAccountQueuePropertiesA#allowed_headers}.

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#allowed_methods StorageAccountQueuePropertiesA#allowed_methods}.

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#allowed_origins StorageAccountQueuePropertiesA#allowed_origins}.

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.exposedHeaders"></a>

```java
public java.util.List<java.lang.String> getExposedHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#exposed_headers StorageAccountQueuePropertiesA#exposed_headers}.

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.maxAgeInSeconds"></a>

```java
public java.lang.Number getMaxAgeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#max_age_in_seconds StorageAccountQueuePropertiesA#max_age_in_seconds}.

---

### StorageAccountQueuePropertiesHourMetricsA <a name="StorageAccountQueuePropertiesHourMetricsA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_queue_properties.StorageAccountQueuePropertiesHourMetricsA;

StorageAccountQueuePropertiesHourMetricsA.builder()
    .version(java.lang.String)
//  .includeApis(java.lang.Boolean)
//  .includeApis(IResolvable)
//  .retentionPolicyDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.includeApis">includeApis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

##### `includeApis`<sup>Optional</sup> <a name="includeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.includeApis"></a>

```java
public java.lang.Object getIncludeApis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}.

---

##### `retentionPolicyDays`<sup>Optional</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.retentionPolicyDays"></a>

```java
public java.lang.Number getRetentionPolicyDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

### StorageAccountQueuePropertiesLoggingA <a name="StorageAccountQueuePropertiesLoggingA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_queue_properties.StorageAccountQueuePropertiesLoggingA;

StorageAccountQueuePropertiesLoggingA.builder()
    .delete(java.lang.Boolean)
    .delete(IResolvable)
    .read(java.lang.Boolean)
    .read(IResolvable)
    .version(java.lang.String)
    .write(java.lang.Boolean)
    .write(IResolvable)
//  .retentionPolicyDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.delete">delete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.read">read</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.write">write</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#write StorageAccountQueuePropertiesA#write}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}. |

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.delete"></a>

```java
public java.lang.Object getDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}.

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.read"></a>

```java
public java.lang.Object getRead();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.write"></a>

```java
public java.lang.Object getWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#write StorageAccountQueuePropertiesA#write}.

---

##### `retentionPolicyDays`<sup>Optional</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.retentionPolicyDays"></a>

```java
public java.lang.Number getRetentionPolicyDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

### StorageAccountQueuePropertiesMinuteMetricsA <a name="StorageAccountQueuePropertiesMinuteMetricsA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_queue_properties.StorageAccountQueuePropertiesMinuteMetricsA;

StorageAccountQueuePropertiesMinuteMetricsA.builder()
    .version(java.lang.String)
//  .includeApis(java.lang.Boolean)
//  .includeApis(IResolvable)
//  .retentionPolicyDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.includeApis">includeApis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

##### `includeApis`<sup>Optional</sup> <a name="includeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.includeApis"></a>

```java
public java.lang.Object getIncludeApis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}.

---

##### `retentionPolicyDays`<sup>Optional</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.retentionPolicyDays"></a>

```java
public java.lang.Number getRetentionPolicyDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

### StorageAccountQueuePropertiesTimeouts <a name="StorageAccountQueuePropertiesTimeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_queue_properties.StorageAccountQueuePropertiesTimeouts;

StorageAccountQueuePropertiesTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#create StorageAccountQueuePropertiesA#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#update StorageAccountQueuePropertiesA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#create StorageAccountQueuePropertiesA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#update StorageAccountQueuePropertiesA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountQueuePropertiesCorsRuleAList <a name="StorageAccountQueuePropertiesCorsRuleAList" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_queue_properties.StorageAccountQueuePropertiesCorsRuleAList;

new StorageAccountQueuePropertiesCorsRuleAList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.get"></a>

```java
public StorageAccountQueuePropertiesCorsRuleAOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>>

---


### StorageAccountQueuePropertiesCorsRuleAOutputReference <a name="StorageAccountQueuePropertiesCorsRuleAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_queue_properties.StorageAccountQueuePropertiesCorsRuleAOutputReference;

new StorageAccountQueuePropertiesCorsRuleAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeadersInput">exposedHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSecondsInput">maxAgeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeaders">exposedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposedHeadersInput`<sup>Optional</sup> <a name="exposedHeadersInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeadersInput"></a>

```java
public java.util.List<java.lang.String> getExposedHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeInSecondsInput`<sup>Optional</sup> <a name="maxAgeInSecondsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSecondsInput"></a>

```java
public java.lang.Number getMaxAgeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeaders"></a>

```java
public java.util.List<java.lang.String> getExposedHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSeconds"></a>

```java
public java.lang.Number getMaxAgeInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>

---


### StorageAccountQueuePropertiesHourMetricsAOutputReference <a name="StorageAccountQueuePropertiesHourMetricsAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_queue_properties.StorageAccountQueuePropertiesHourMetricsAOutputReference;

new StorageAccountQueuePropertiesHourMetricsAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetIncludeApis">resetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetRetentionPolicyDays">resetRetentionPolicyDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeApis` <a name="resetIncludeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetIncludeApis"></a>

```java
public void resetIncludeApis()
```

##### `resetRetentionPolicyDays` <a name="resetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetRetentionPolicyDays"></a>

```java
public void resetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApisInput">includeApisInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDaysInput">retentionPolicyDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApis">includeApis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeApisInput`<sup>Optional</sup> <a name="includeApisInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApisInput"></a>

```java
public java.lang.Object getIncludeApisInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPolicyDaysInput`<sup>Optional</sup> <a name="retentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDaysInput"></a>

```java
public java.lang.Number getRetentionPolicyDaysInput();
```

- *Type:* java.lang.Number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `includeApis`<sup>Required</sup> <a name="includeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApis"></a>

```java
public java.lang.Object getIncludeApis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPolicyDays`<sup>Required</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDays"></a>

```java
public java.lang.Number getRetentionPolicyDays();
```

- *Type:* java.lang.Number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.internalValue"></a>

```java
public StorageAccountQueuePropertiesHourMetricsA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

---


### StorageAccountQueuePropertiesLoggingAOutputReference <a name="StorageAccountQueuePropertiesLoggingAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_queue_properties.StorageAccountQueuePropertiesLoggingAOutputReference;

new StorageAccountQueuePropertiesLoggingAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resetRetentionPolicyDays">resetRetentionPolicyDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionPolicyDays` <a name="resetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resetRetentionPolicyDays"></a>

```java
public void resetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.readInput">readInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDaysInput">retentionPolicyDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.writeInput">writeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.delete">delete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.read">read</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.write">write</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.deleteInput"></a>

```java
public java.lang.Object getDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.readInput"></a>

```java
public java.lang.Object getReadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPolicyDaysInput`<sup>Optional</sup> <a name="retentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDaysInput"></a>

```java
public java.lang.Number getRetentionPolicyDaysInput();
```

- *Type:* java.lang.Number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `writeInput`<sup>Optional</sup> <a name="writeInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.writeInput"></a>

```java
public java.lang.Object getWriteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.delete"></a>

```java
public java.lang.Object getDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.read"></a>

```java
public java.lang.Object getRead();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPolicyDays`<sup>Required</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDays"></a>

```java
public java.lang.Number getRetentionPolicyDays();
```

- *Type:* java.lang.Number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.write"></a>

```java
public java.lang.Object getWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.internalValue"></a>

```java
public StorageAccountQueuePropertiesLoggingA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

---


### StorageAccountQueuePropertiesMinuteMetricsAOutputReference <a name="StorageAccountQueuePropertiesMinuteMetricsAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_queue_properties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference;

new StorageAccountQueuePropertiesMinuteMetricsAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetIncludeApis">resetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetRetentionPolicyDays">resetRetentionPolicyDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeApis` <a name="resetIncludeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetIncludeApis"></a>

```java
public void resetIncludeApis()
```

##### `resetRetentionPolicyDays` <a name="resetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetRetentionPolicyDays"></a>

```java
public void resetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApisInput">includeApisInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDaysInput">retentionPolicyDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApis">includeApis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeApisInput`<sup>Optional</sup> <a name="includeApisInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApisInput"></a>

```java
public java.lang.Object getIncludeApisInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPolicyDaysInput`<sup>Optional</sup> <a name="retentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDaysInput"></a>

```java
public java.lang.Number getRetentionPolicyDaysInput();
```

- *Type:* java.lang.Number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `includeApis`<sup>Required</sup> <a name="includeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApis"></a>

```java
public java.lang.Object getIncludeApis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPolicyDays`<sup>Required</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDays"></a>

```java
public java.lang.Number getRetentionPolicyDays();
```

- *Type:* java.lang.Number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.internalValue"></a>

```java
public StorageAccountQueuePropertiesMinuteMetricsA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

---


### StorageAccountQueuePropertiesTimeoutsOutputReference <a name="StorageAccountQueuePropertiesTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_queue_properties.StorageAccountQueuePropertiesTimeoutsOutputReference;

new StorageAccountQueuePropertiesTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

---



