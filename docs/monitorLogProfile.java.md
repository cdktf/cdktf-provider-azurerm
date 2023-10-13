# `azurerm_monitor_log_profile`

Refer to the Terraform Registory for docs: [`azurerm_monitor_log_profile`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile).

# `monitorLogProfile` Submodule <a name="`monitorLogProfile` Submodule" id="@cdktf/provider-azurerm.monitorLogProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorLogProfile <a name="MonitorLogProfile" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile azurerm_monitor_log_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_log_profile.MonitorLogProfile;

MonitorLogProfile.Builder.create(Construct scope, java.lang.String id)
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
    .categories(java.util.List<java.lang.String>)
    .locations(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .retentionPolicy(MonitorLogProfileRetentionPolicy)
//  .id(java.lang.String)
//  .servicebusRuleId(java.lang.String)
//  .storageAccountId(java.lang.String)
//  .timeouts(MonitorLogProfileTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#categories MonitorLogProfile#categories}. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#locations MonitorLogProfile#locations}. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#name MonitorLogProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicy">MonitorLogProfileRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#id MonitorLogProfile#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.servicebusRuleId">servicebusRuleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#servicebus_rule_id MonitorLogProfile#servicebus_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#storage_account_id MonitorLogProfile#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts">MonitorLogProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.categories"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#categories MonitorLogProfile#categories}.

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.locations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#locations MonitorLogProfile#locations}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#name MonitorLogProfile#name}.

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.retentionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicy">MonitorLogProfileRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#retention_policy MonitorLogProfile#retention_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#id MonitorLogProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `servicebusRuleId`<sup>Optional</sup> <a name="servicebusRuleId" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.servicebusRuleId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#servicebus_rule_id MonitorLogProfile#servicebus_rule_id}.

---

##### `storageAccountId`<sup>Optional</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.storageAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#storage_account_id MonitorLogProfile#storage_account_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts">MonitorLogProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#timeouts MonitorLogProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.putRetentionPolicy">putRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.resetServicebusRuleId">resetServicebusRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.resetStorageAccountId">resetStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRetentionPolicy` <a name="putRetentionPolicy" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.putRetentionPolicy"></a>

```java
public void putRetentionPolicy(MonitorLogProfileRetentionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicy">MonitorLogProfileRetentionPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.putTimeouts"></a>

```java
public void putTimeouts(MonitorLogProfileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts">MonitorLogProfileTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.resetId"></a>

```java
public void resetId()
```

##### `resetServicebusRuleId` <a name="resetServicebusRuleId" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.resetServicebusRuleId"></a>

```java
public void resetServicebusRuleId()
```

##### `resetStorageAccountId` <a name="resetStorageAccountId" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.resetStorageAccountId"></a>

```java
public void resetStorageAccountId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_log_profile.MonitorLogProfile;

MonitorLogProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_log_profile.MonitorLogProfile;

MonitorLogProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_log_profile.MonitorLogProfile;

MonitorLogProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference">MonitorLogProfileRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference">MonitorLogProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.categoriesInput">categoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.locationsInput">locationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.retentionPolicyInput">retentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicy">MonitorLogProfileRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.servicebusRuleIdInput">servicebusRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts">MonitorLogProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.servicebusRuleId">servicebusRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.retentionPolicy"></a>

```java
public MonitorLogProfileRetentionPolicyOutputReference getRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference">MonitorLogProfileRetentionPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.timeouts"></a>

```java
public MonitorLogProfileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference">MonitorLogProfileTimeoutsOutputReference</a>

---

##### `categoriesInput`<sup>Optional</sup> <a name="categoriesInput" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.categoriesInput"></a>

```java
public java.util.List<java.lang.String> getCategoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.locationsInput"></a>

```java
public java.util.List<java.lang.String> getLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `retentionPolicyInput`<sup>Optional</sup> <a name="retentionPolicyInput" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.retentionPolicyInput"></a>

```java
public MonitorLogProfileRetentionPolicy getRetentionPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicy">MonitorLogProfileRetentionPolicy</a>

---

##### `servicebusRuleIdInput`<sup>Optional</sup> <a name="servicebusRuleIdInput" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.servicebusRuleIdInput"></a>

```java
public java.lang.String getServicebusRuleIdInput();
```

- *Type:* java.lang.String

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts">MonitorLogProfileTimeouts</a>

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.categories"></a>

```java
public java.util.List<java.lang.String> getCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `servicebusRuleId`<sup>Required</sup> <a name="servicebusRuleId" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.servicebusRuleId"></a>

```java
public java.lang.String getServicebusRuleId();
```

- *Type:* java.lang.String

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorLogProfileConfig <a name="MonitorLogProfileConfig" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_log_profile.MonitorLogProfileConfig;

MonitorLogProfileConfig.builder()
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
    .categories(java.util.List<java.lang.String>)
    .locations(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .retentionPolicy(MonitorLogProfileRetentionPolicy)
//  .id(java.lang.String)
//  .servicebusRuleId(java.lang.String)
//  .storageAccountId(java.lang.String)
//  .timeouts(MonitorLogProfileTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#categories MonitorLogProfile#categories}. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#locations MonitorLogProfile#locations}. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#name MonitorLogProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicy">MonitorLogProfileRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#id MonitorLogProfile#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.servicebusRuleId">servicebusRuleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#servicebus_rule_id MonitorLogProfile#servicebus_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#storage_account_id MonitorLogProfile#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts">MonitorLogProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.categories"></a>

```java
public java.util.List<java.lang.String> getCategories();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#categories MonitorLogProfile#categories}.

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#locations MonitorLogProfile#locations}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#name MonitorLogProfile#name}.

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.retentionPolicy"></a>

```java
public MonitorLogProfileRetentionPolicy getRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicy">MonitorLogProfileRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#retention_policy MonitorLogProfile#retention_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#id MonitorLogProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `servicebusRuleId`<sup>Optional</sup> <a name="servicebusRuleId" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.servicebusRuleId"></a>

```java
public java.lang.String getServicebusRuleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#servicebus_rule_id MonitorLogProfile#servicebus_rule_id}.

---

##### `storageAccountId`<sup>Optional</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#storage_account_id MonitorLogProfile#storage_account_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileConfig.property.timeouts"></a>

```java
public MonitorLogProfileTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts">MonitorLogProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#timeouts MonitorLogProfile#timeouts}

---

### MonitorLogProfileRetentionPolicy <a name="MonitorLogProfileRetentionPolicy" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_log_profile.MonitorLogProfileRetentionPolicy;

MonitorLogProfileRetentionPolicy.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .days(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicy.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#enabled MonitorLogProfile#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicy.property.days">days</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#days MonitorLogProfile#days}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicy.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#enabled MonitorLogProfile#enabled}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicy.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#days MonitorLogProfile#days}.

---

### MonitorLogProfileTimeouts <a name="MonitorLogProfileTimeouts" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_log_profile.MonitorLogProfileTimeouts;

MonitorLogProfileTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#create MonitorLogProfile#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#delete MonitorLogProfile#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#read MonitorLogProfile#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#update MonitorLogProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#create MonitorLogProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#delete MonitorLogProfile#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#read MonitorLogProfile#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_log_profile#update MonitorLogProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorLogProfileRetentionPolicyOutputReference <a name="MonitorLogProfileRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_log_profile.MonitorLogProfileRetentionPolicyOutputReference;

new MonitorLogProfileRetentionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.resetDays">resetDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.resetDays"></a>

```java
public void resetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.property.daysInput">daysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.property.days">days</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicy">MonitorLogProfileRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.property.daysInput"></a>

```java
public java.lang.Number getDaysInput();
```

- *Type:* java.lang.Number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicyOutputReference.property.internalValue"></a>

```java
public MonitorLogProfileRetentionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileRetentionPolicy">MonitorLogProfileRetentionPolicy</a>

---


### MonitorLogProfileTimeoutsOutputReference <a name="MonitorLogProfileTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_log_profile.MonitorLogProfileTimeoutsOutputReference;

new MonitorLogProfileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts">MonitorLogProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorLogProfile.MonitorLogProfileTimeouts">MonitorLogProfileTimeouts</a>

---



