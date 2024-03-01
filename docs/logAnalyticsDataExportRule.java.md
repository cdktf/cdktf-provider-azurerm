# `logAnalyticsDataExportRule` Submodule <a name="`logAnalyticsDataExportRule` Submodule" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsDataExportRule <a name="LogAnalyticsDataExportRule" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule azurerm_log_analytics_data_export_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_data_export_rule.LogAnalyticsDataExportRule;

LogAnalyticsDataExportRule.Builder.create(Construct scope, java.lang.String id)
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
    .destinationResourceId(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .tableNames(java.util.List<java.lang.String>)
    .workspaceResourceId(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .timeouts(LogAnalyticsDataExportRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.destinationResourceId">destinationResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#destination_resource_id LogAnalyticsDataExportRule#destination_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#name LogAnalyticsDataExportRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#resource_group_name LogAnalyticsDataExportRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.tableNames">tableNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#table_names LogAnalyticsDataExportRule#table_names}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.workspaceResourceId">workspaceResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#workspace_resource_id LogAnalyticsDataExportRule#workspace_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#enabled LogAnalyticsDataExportRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#id LogAnalyticsDataExportRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts">LogAnalyticsDataExportRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destinationResourceId`<sup>Required</sup> <a name="destinationResourceId" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.destinationResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#destination_resource_id LogAnalyticsDataExportRule#destination_resource_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#name LogAnalyticsDataExportRule#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#resource_group_name LogAnalyticsDataExportRule#resource_group_name}.

---

##### `tableNames`<sup>Required</sup> <a name="tableNames" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.tableNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#table_names LogAnalyticsDataExportRule#table_names}.

---

##### `workspaceResourceId`<sup>Required</sup> <a name="workspaceResourceId" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.workspaceResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#workspace_resource_id LogAnalyticsDataExportRule#workspace_resource_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#enabled LogAnalyticsDataExportRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#id LogAnalyticsDataExportRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts">LogAnalyticsDataExportRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#timeouts LogAnalyticsDataExportRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.putTimeouts"></a>

```java
public void putTimeouts(LogAnalyticsDataExportRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts">LogAnalyticsDataExportRuleTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsDataExportRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_data_export_rule.LogAnalyticsDataExportRule;

LogAnalyticsDataExportRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_data_export_rule.LogAnalyticsDataExportRule;

LogAnalyticsDataExportRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_data_export_rule.LogAnalyticsDataExportRule;

LogAnalyticsDataExportRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_data_export_rule.LogAnalyticsDataExportRule;

LogAnalyticsDataExportRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogAnalyticsDataExportRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LogAnalyticsDataExportRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogAnalyticsDataExportRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogAnalyticsDataExportRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsDataExportRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.exportRuleId">exportRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference">LogAnalyticsDataExportRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.destinationResourceIdInput">destinationResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.tableNamesInput">tableNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts">LogAnalyticsDataExportRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.workspaceResourceIdInput">workspaceResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.destinationResourceId">destinationResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.tableNames">tableNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.workspaceResourceId">workspaceResourceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exportRuleId`<sup>Required</sup> <a name="exportRuleId" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.exportRuleId"></a>

```java
public java.lang.String getExportRuleId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.timeouts"></a>

```java
public LogAnalyticsDataExportRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference">LogAnalyticsDataExportRuleTimeoutsOutputReference</a>

---

##### `destinationResourceIdInput`<sup>Optional</sup> <a name="destinationResourceIdInput" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.destinationResourceIdInput"></a>

```java
public java.lang.String getDestinationResourceIdInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tableNamesInput`<sup>Optional</sup> <a name="tableNamesInput" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.tableNamesInput"></a>

```java
public java.util.List<java.lang.String> getTableNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts">LogAnalyticsDataExportRuleTimeouts</a>

---

##### `workspaceResourceIdInput`<sup>Optional</sup> <a name="workspaceResourceIdInput" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.workspaceResourceIdInput"></a>

```java
public java.lang.String getWorkspaceResourceIdInput();
```

- *Type:* java.lang.String

---

##### `destinationResourceId`<sup>Required</sup> <a name="destinationResourceId" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.destinationResourceId"></a>

```java
public java.lang.String getDestinationResourceId();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tableNames`<sup>Required</sup> <a name="tableNames" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.tableNames"></a>

```java
public java.util.List<java.lang.String> getTableNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workspaceResourceId`<sup>Required</sup> <a name="workspaceResourceId" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.workspaceResourceId"></a>

```java
public java.lang.String getWorkspaceResourceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsDataExportRuleConfig <a name="LogAnalyticsDataExportRuleConfig" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_data_export_rule.LogAnalyticsDataExportRuleConfig;

LogAnalyticsDataExportRuleConfig.builder()
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
    .destinationResourceId(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .tableNames(java.util.List<java.lang.String>)
    .workspaceResourceId(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .timeouts(LogAnalyticsDataExportRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.destinationResourceId">destinationResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#destination_resource_id LogAnalyticsDataExportRule#destination_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#name LogAnalyticsDataExportRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#resource_group_name LogAnalyticsDataExportRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.tableNames">tableNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#table_names LogAnalyticsDataExportRule#table_names}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.workspaceResourceId">workspaceResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#workspace_resource_id LogAnalyticsDataExportRule#workspace_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#enabled LogAnalyticsDataExportRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#id LogAnalyticsDataExportRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts">LogAnalyticsDataExportRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destinationResourceId`<sup>Required</sup> <a name="destinationResourceId" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.destinationResourceId"></a>

```java
public java.lang.String getDestinationResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#destination_resource_id LogAnalyticsDataExportRule#destination_resource_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#name LogAnalyticsDataExportRule#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#resource_group_name LogAnalyticsDataExportRule#resource_group_name}.

---

##### `tableNames`<sup>Required</sup> <a name="tableNames" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.tableNames"></a>

```java
public java.util.List<java.lang.String> getTableNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#table_names LogAnalyticsDataExportRule#table_names}.

---

##### `workspaceResourceId`<sup>Required</sup> <a name="workspaceResourceId" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.workspaceResourceId"></a>

```java
public java.lang.String getWorkspaceResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#workspace_resource_id LogAnalyticsDataExportRule#workspace_resource_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#enabled LogAnalyticsDataExportRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#id LogAnalyticsDataExportRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleConfig.property.timeouts"></a>

```java
public LogAnalyticsDataExportRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts">LogAnalyticsDataExportRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#timeouts LogAnalyticsDataExportRule#timeouts}

---

### LogAnalyticsDataExportRuleTimeouts <a name="LogAnalyticsDataExportRuleTimeouts" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_data_export_rule.LogAnalyticsDataExportRuleTimeouts;

LogAnalyticsDataExportRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#create LogAnalyticsDataExportRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#delete LogAnalyticsDataExportRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#read LogAnalyticsDataExportRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#update LogAnalyticsDataExportRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#create LogAnalyticsDataExportRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#delete LogAnalyticsDataExportRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#read LogAnalyticsDataExportRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/log_analytics_data_export_rule#update LogAnalyticsDataExportRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsDataExportRuleTimeoutsOutputReference <a name="LogAnalyticsDataExportRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.log_analytics_data_export_rule.LogAnalyticsDataExportRuleTimeoutsOutputReference;

new LogAnalyticsDataExportRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts">LogAnalyticsDataExportRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logAnalyticsDataExportRule.LogAnalyticsDataExportRuleTimeouts">LogAnalyticsDataExportRuleTimeouts</a>

---



