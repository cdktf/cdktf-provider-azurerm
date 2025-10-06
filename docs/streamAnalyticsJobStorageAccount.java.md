# `streamAnalyticsJobStorageAccount` Submodule <a name="`streamAnalyticsJobStorageAccount` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsJobStorageAccount <a name="StreamAnalyticsJobStorageAccount" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account azurerm_stream_analytics_job_storage_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_job_storage_account.StreamAnalyticsJobStorageAccount;

StreamAnalyticsJobStorageAccount.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authenticationMode(java.lang.String)
    .storageAccountName(java.lang.String)
    .streamAnalyticsJobId(java.lang.String)
//  .id(java.lang.String)
//  .storageAccountKey(java.lang.String)
//  .timeouts(StreamAnalyticsJobStorageAccountTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#authentication_mode StreamAnalyticsJobStorageAccount#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#storage_account_name StreamAnalyticsJobStorageAccount#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.streamAnalyticsJobId">streamAnalyticsJobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#stream_analytics_job_id StreamAnalyticsJobStorageAccount#stream_analytics_job_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#id StreamAnalyticsJobStorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#storage_account_key StreamAnalyticsJobStorageAccount#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts">StreamAnalyticsJobStorageAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.authenticationMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#authentication_mode StreamAnalyticsJobStorageAccount#authentication_mode}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.storageAccountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#storage_account_name StreamAnalyticsJobStorageAccount#storage_account_name}.

---

##### `streamAnalyticsJobId`<sup>Required</sup> <a name="streamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.streamAnalyticsJobId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#stream_analytics_job_id StreamAnalyticsJobStorageAccount#stream_analytics_job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#id StreamAnalyticsJobStorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storageAccountKey`<sup>Optional</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.storageAccountKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#storage_account_key StreamAnalyticsJobStorageAccount#storage_account_key}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts">StreamAnalyticsJobStorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#timeouts StreamAnalyticsJobStorageAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.resetStorageAccountKey">resetStorageAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.putTimeouts"></a>

```java
public void putTimeouts(StreamAnalyticsJobStorageAccountTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts">StreamAnalyticsJobStorageAccountTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.resetId"></a>

```java
public void resetId()
```

##### `resetStorageAccountKey` <a name="resetStorageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.resetStorageAccountKey"></a>

```java
public void resetStorageAccountKey()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsJobStorageAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_job_storage_account.StreamAnalyticsJobStorageAccount;

StreamAnalyticsJobStorageAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_job_storage_account.StreamAnalyticsJobStorageAccount;

StreamAnalyticsJobStorageAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_job_storage_account.StreamAnalyticsJobStorageAccount;

StreamAnalyticsJobStorageAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_job_storage_account.StreamAnalyticsJobStorageAccount;

StreamAnalyticsJobStorageAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StreamAnalyticsJobStorageAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StreamAnalyticsJobStorageAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StreamAnalyticsJobStorageAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StreamAnalyticsJobStorageAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsJobStorageAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference">StreamAnalyticsJobStorageAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.authenticationModeInput">authenticationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.streamAnalyticsJobIdInput">streamAnalyticsJobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts">StreamAnalyticsJobStorageAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.streamAnalyticsJobId">streamAnalyticsJobId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.timeouts"></a>

```java
public StreamAnalyticsJobStorageAccountTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference">StreamAnalyticsJobStorageAccountTimeoutsOutputReference</a>

---

##### `authenticationModeInput`<sup>Optional</sup> <a name="authenticationModeInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.authenticationModeInput"></a>

```java
public java.lang.String getAuthenticationModeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.storageAccountKeyInput"></a>

```java
public java.lang.String getStorageAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.storageAccountNameInput"></a>

```java
public java.lang.String getStorageAccountNameInput();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobIdInput`<sup>Optional</sup> <a name="streamAnalyticsJobIdInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.streamAnalyticsJobIdInput"></a>

```java
public java.lang.String getStreamAnalyticsJobIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.timeoutsInput"></a>

```java
public IResolvable|StreamAnalyticsJobStorageAccountTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts">StreamAnalyticsJobStorageAccountTimeouts</a>

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobId`<sup>Required</sup> <a name="streamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.streamAnalyticsJobId"></a>

```java
public java.lang.String getStreamAnalyticsJobId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsJobStorageAccountConfig <a name="StreamAnalyticsJobStorageAccountConfig" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_job_storage_account.StreamAnalyticsJobStorageAccountConfig;

StreamAnalyticsJobStorageAccountConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authenticationMode(java.lang.String)
    .storageAccountName(java.lang.String)
    .streamAnalyticsJobId(java.lang.String)
//  .id(java.lang.String)
//  .storageAccountKey(java.lang.String)
//  .timeouts(StreamAnalyticsJobStorageAccountTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#authentication_mode StreamAnalyticsJobStorageAccount#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#storage_account_name StreamAnalyticsJobStorageAccount#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.streamAnalyticsJobId">streamAnalyticsJobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#stream_analytics_job_id StreamAnalyticsJobStorageAccount#stream_analytics_job_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#id StreamAnalyticsJobStorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#storage_account_key StreamAnalyticsJobStorageAccount#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts">StreamAnalyticsJobStorageAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#authentication_mode StreamAnalyticsJobStorageAccount#authentication_mode}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#storage_account_name StreamAnalyticsJobStorageAccount#storage_account_name}.

---

##### `streamAnalyticsJobId`<sup>Required</sup> <a name="streamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.streamAnalyticsJobId"></a>

```java
public java.lang.String getStreamAnalyticsJobId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#stream_analytics_job_id StreamAnalyticsJobStorageAccount#stream_analytics_job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#id StreamAnalyticsJobStorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storageAccountKey`<sup>Optional</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#storage_account_key StreamAnalyticsJobStorageAccount#storage_account_key}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.timeouts"></a>

```java
public StreamAnalyticsJobStorageAccountTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts">StreamAnalyticsJobStorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#timeouts StreamAnalyticsJobStorageAccount#timeouts}

---

### StreamAnalyticsJobStorageAccountTimeouts <a name="StreamAnalyticsJobStorageAccountTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_job_storage_account.StreamAnalyticsJobStorageAccountTimeouts;

StreamAnalyticsJobStorageAccountTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#create StreamAnalyticsJobStorageAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#delete StreamAnalyticsJobStorageAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#read StreamAnalyticsJobStorageAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#update StreamAnalyticsJobStorageAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#create StreamAnalyticsJobStorageAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#delete StreamAnalyticsJobStorageAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#read StreamAnalyticsJobStorageAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_job_storage_account#update StreamAnalyticsJobStorageAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsJobStorageAccountTimeoutsOutputReference <a name="StreamAnalyticsJobStorageAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_job_storage_account.StreamAnalyticsJobStorageAccountTimeoutsOutputReference;

new StreamAnalyticsJobStorageAccountTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts">StreamAnalyticsJobStorageAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|StreamAnalyticsJobStorageAccountTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts">StreamAnalyticsJobStorageAccountTimeouts</a>

---



