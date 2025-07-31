# `logAnalyticsStorageInsights` Submodule <a name="`logAnalyticsStorageInsights` Submodule" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsStorageInsights <a name="LogAnalyticsStorageInsights" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights azurerm_log_analytics_storage_insights}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_storage_insights.LogAnalyticsStorageInsights;

LogAnalyticsStorageInsights.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageAccountId(java.lang.String)
    .storageAccountKey(java.lang.String)
    .workspaceId(java.lang.String)
//  .blobContainerNames(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .tableNames(java.util.List<java.lang.String>)
//  .timeouts(LogAnalyticsStorageInsightsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#name LogAnalyticsStorageInsights#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#resource_group_name LogAnalyticsStorageInsights#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#storage_account_id LogAnalyticsStorageInsights#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#storage_account_key LogAnalyticsStorageInsights#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#workspace_id LogAnalyticsStorageInsights#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.blobContainerNames">blobContainerNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#blob_container_names LogAnalyticsStorageInsights#blob_container_names}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#id LogAnalyticsStorageInsights#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.tableNames">tableNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#table_names LogAnalyticsStorageInsights#table_names}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts">LogAnalyticsStorageInsightsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#name LogAnalyticsStorageInsights#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#resource_group_name LogAnalyticsStorageInsights#resource_group_name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.storageAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#storage_account_id LogAnalyticsStorageInsights#storage_account_id}.

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.storageAccountKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#storage_account_key LogAnalyticsStorageInsights#storage_account_key}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#workspace_id LogAnalyticsStorageInsights#workspace_id}.

---

##### `blobContainerNames`<sup>Optional</sup> <a name="blobContainerNames" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.blobContainerNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#blob_container_names LogAnalyticsStorageInsights#blob_container_names}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#id LogAnalyticsStorageInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tableNames`<sup>Optional</sup> <a name="tableNames" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.tableNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#table_names LogAnalyticsStorageInsights#table_names}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts">LogAnalyticsStorageInsightsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#timeouts LogAnalyticsStorageInsights#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetBlobContainerNames">resetBlobContainerNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetTableNames">resetTableNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.putTimeouts"></a>

```java
public void putTimeouts(LogAnalyticsStorageInsightsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts">LogAnalyticsStorageInsightsTimeouts</a>

---

##### `resetBlobContainerNames` <a name="resetBlobContainerNames" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetBlobContainerNames"></a>

```java
public void resetBlobContainerNames()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetId"></a>

```java
public void resetId()
```

##### `resetTableNames` <a name="resetTableNames" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetTableNames"></a>

```java
public void resetTableNames()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsStorageInsights resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_storage_insights.LogAnalyticsStorageInsights;

LogAnalyticsStorageInsights.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_storage_insights.LogAnalyticsStorageInsights;

LogAnalyticsStorageInsights.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_storage_insights.LogAnalyticsStorageInsights;

LogAnalyticsStorageInsights.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_storage_insights.LogAnalyticsStorageInsights;

LogAnalyticsStorageInsights.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogAnalyticsStorageInsights.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LogAnalyticsStorageInsights resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogAnalyticsStorageInsights to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogAnalyticsStorageInsights that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsStorageInsights to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference">LogAnalyticsStorageInsightsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.blobContainerNamesInput">blobContainerNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.tableNamesInput">tableNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts">LogAnalyticsStorageInsightsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.blobContainerNames">blobContainerNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.tableNames">tableNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.timeouts"></a>

```java
public LogAnalyticsStorageInsightsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference">LogAnalyticsStorageInsightsTimeoutsOutputReference</a>

---

##### `blobContainerNamesInput`<sup>Optional</sup> <a name="blobContainerNamesInput" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.blobContainerNamesInput"></a>

```java
public java.util.List<java.lang.String> getBlobContainerNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.storageAccountKeyInput"></a>

```java
public java.lang.String getStorageAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `tableNamesInput`<sup>Optional</sup> <a name="tableNamesInput" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.tableNamesInput"></a>

```java
public java.util.List<java.lang.String> getTableNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts">LogAnalyticsStorageInsightsTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `blobContainerNames`<sup>Required</sup> <a name="blobContainerNames" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.blobContainerNames"></a>

```java
public java.util.List<java.lang.String> getBlobContainerNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

---

##### `tableNames`<sup>Required</sup> <a name="tableNames" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.tableNames"></a>

```java
public java.util.List<java.lang.String> getTableNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsStorageInsightsConfig <a name="LogAnalyticsStorageInsightsConfig" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_storage_insights.LogAnalyticsStorageInsightsConfig;

LogAnalyticsStorageInsightsConfig.builder()
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
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageAccountId(java.lang.String)
    .storageAccountKey(java.lang.String)
    .workspaceId(java.lang.String)
//  .blobContainerNames(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .tableNames(java.util.List<java.lang.String>)
//  .timeouts(LogAnalyticsStorageInsightsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#name LogAnalyticsStorageInsights#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#resource_group_name LogAnalyticsStorageInsights#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#storage_account_id LogAnalyticsStorageInsights#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#storage_account_key LogAnalyticsStorageInsights#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#workspace_id LogAnalyticsStorageInsights#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.blobContainerNames">blobContainerNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#blob_container_names LogAnalyticsStorageInsights#blob_container_names}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#id LogAnalyticsStorageInsights#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.tableNames">tableNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#table_names LogAnalyticsStorageInsights#table_names}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts">LogAnalyticsStorageInsightsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#name LogAnalyticsStorageInsights#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#resource_group_name LogAnalyticsStorageInsights#resource_group_name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#storage_account_id LogAnalyticsStorageInsights#storage_account_id}.

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#storage_account_key LogAnalyticsStorageInsights#storage_account_key}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#workspace_id LogAnalyticsStorageInsights#workspace_id}.

---

##### `blobContainerNames`<sup>Optional</sup> <a name="blobContainerNames" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.blobContainerNames"></a>

```java
public java.util.List<java.lang.String> getBlobContainerNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#blob_container_names LogAnalyticsStorageInsights#blob_container_names}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#id LogAnalyticsStorageInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tableNames`<sup>Optional</sup> <a name="tableNames" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.tableNames"></a>

```java
public java.util.List<java.lang.String> getTableNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#table_names LogAnalyticsStorageInsights#table_names}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.timeouts"></a>

```java
public LogAnalyticsStorageInsightsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts">LogAnalyticsStorageInsightsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#timeouts LogAnalyticsStorageInsights#timeouts}

---

### LogAnalyticsStorageInsightsTimeouts <a name="LogAnalyticsStorageInsightsTimeouts" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_storage_insights.LogAnalyticsStorageInsightsTimeouts;

LogAnalyticsStorageInsightsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#create LogAnalyticsStorageInsights#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#delete LogAnalyticsStorageInsights#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#read LogAnalyticsStorageInsights#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#update LogAnalyticsStorageInsights#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#create LogAnalyticsStorageInsights#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#delete LogAnalyticsStorageInsights#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#read LogAnalyticsStorageInsights#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/log_analytics_storage_insights#update LogAnalyticsStorageInsights#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsStorageInsightsTimeoutsOutputReference <a name="LogAnalyticsStorageInsightsTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_storage_insights.LogAnalyticsStorageInsightsTimeoutsOutputReference;

new LogAnalyticsStorageInsightsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts">LogAnalyticsStorageInsightsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts">LogAnalyticsStorageInsightsTimeouts</a>

---



