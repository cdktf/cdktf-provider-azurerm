# `monitorPrivateLinkScope` Submodule <a name="`monitorPrivateLinkScope` Submodule" id="@cdktf/provider-azurerm.monitorPrivateLinkScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorPrivateLinkScope <a name="MonitorPrivateLinkScope" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope azurerm_monitor_private_link_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_private_link_scope.MonitorPrivateLinkScope;

MonitorPrivateLinkScope.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .ingestionAccessMode(java.lang.String)
//  .queryAccessMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MonitorPrivateLinkScopeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#name MonitorPrivateLinkScope#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#resource_group_name MonitorPrivateLinkScope#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#id MonitorPrivateLinkScope#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.ingestionAccessMode">ingestionAccessMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#ingestion_access_mode MonitorPrivateLinkScope#ingestion_access_mode}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.queryAccessMode">queryAccessMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#query_access_mode MonitorPrivateLinkScope#query_access_mode}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#tags MonitorPrivateLinkScope#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts">MonitorPrivateLinkScopeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#name MonitorPrivateLinkScope#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#resource_group_name MonitorPrivateLinkScope#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#id MonitorPrivateLinkScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestionAccessMode`<sup>Optional</sup> <a name="ingestionAccessMode" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.ingestionAccessMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#ingestion_access_mode MonitorPrivateLinkScope#ingestion_access_mode}.

---

##### `queryAccessMode`<sup>Optional</sup> <a name="queryAccessMode" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.queryAccessMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#query_access_mode MonitorPrivateLinkScope#query_access_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#tags MonitorPrivateLinkScope#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts">MonitorPrivateLinkScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#timeouts MonitorPrivateLinkScope#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetIngestionAccessMode">resetIngestionAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetQueryAccessMode">resetQueryAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.putTimeouts"></a>

```java
public void putTimeouts(MonitorPrivateLinkScopeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts">MonitorPrivateLinkScopeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetId"></a>

```java
public void resetId()
```

##### `resetIngestionAccessMode` <a name="resetIngestionAccessMode" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetIngestionAccessMode"></a>

```java
public void resetIngestionAccessMode()
```

##### `resetQueryAccessMode` <a name="resetQueryAccessMode" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetQueryAccessMode"></a>

```java
public void resetQueryAccessMode()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorPrivateLinkScope resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_private_link_scope.MonitorPrivateLinkScope;

MonitorPrivateLinkScope.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_private_link_scope.MonitorPrivateLinkScope;

MonitorPrivateLinkScope.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_private_link_scope.MonitorPrivateLinkScope;

MonitorPrivateLinkScope.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_private_link_scope.MonitorPrivateLinkScope;

MonitorPrivateLinkScope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MonitorPrivateLinkScope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MonitorPrivateLinkScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MonitorPrivateLinkScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MonitorPrivateLinkScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MonitorPrivateLinkScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference">MonitorPrivateLinkScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.ingestionAccessModeInput">ingestionAccessModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.queryAccessModeInput">queryAccessModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts">MonitorPrivateLinkScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.ingestionAccessMode">ingestionAccessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.queryAccessMode">queryAccessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.timeouts"></a>

```java
public MonitorPrivateLinkScopeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference">MonitorPrivateLinkScopeTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingestionAccessModeInput`<sup>Optional</sup> <a name="ingestionAccessModeInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.ingestionAccessModeInput"></a>

```java
public java.lang.String getIngestionAccessModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryAccessModeInput`<sup>Optional</sup> <a name="queryAccessModeInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.queryAccessModeInput"></a>

```java
public java.lang.String getQueryAccessModeInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts">MonitorPrivateLinkScopeTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingestionAccessMode`<sup>Required</sup> <a name="ingestionAccessMode" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.ingestionAccessMode"></a>

```java
public java.lang.String getIngestionAccessMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `queryAccessMode`<sup>Required</sup> <a name="queryAccessMode" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.queryAccessMode"></a>

```java
public java.lang.String getQueryAccessMode();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorPrivateLinkScopeConfig <a name="MonitorPrivateLinkScopeConfig" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_private_link_scope.MonitorPrivateLinkScopeConfig;

MonitorPrivateLinkScopeConfig.builder()
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
//  .id(java.lang.String)
//  .ingestionAccessMode(java.lang.String)
//  .queryAccessMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MonitorPrivateLinkScopeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#name MonitorPrivateLinkScope#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#resource_group_name MonitorPrivateLinkScope#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#id MonitorPrivateLinkScope#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.ingestionAccessMode">ingestionAccessMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#ingestion_access_mode MonitorPrivateLinkScope#ingestion_access_mode}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.queryAccessMode">queryAccessMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#query_access_mode MonitorPrivateLinkScope#query_access_mode}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#tags MonitorPrivateLinkScope#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts">MonitorPrivateLinkScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#name MonitorPrivateLinkScope#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#resource_group_name MonitorPrivateLinkScope#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#id MonitorPrivateLinkScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestionAccessMode`<sup>Optional</sup> <a name="ingestionAccessMode" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.ingestionAccessMode"></a>

```java
public java.lang.String getIngestionAccessMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#ingestion_access_mode MonitorPrivateLinkScope#ingestion_access_mode}.

---

##### `queryAccessMode`<sup>Optional</sup> <a name="queryAccessMode" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.queryAccessMode"></a>

```java
public java.lang.String getQueryAccessMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#query_access_mode MonitorPrivateLinkScope#query_access_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#tags MonitorPrivateLinkScope#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.timeouts"></a>

```java
public MonitorPrivateLinkScopeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts">MonitorPrivateLinkScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#timeouts MonitorPrivateLinkScope#timeouts}

---

### MonitorPrivateLinkScopeTimeouts <a name="MonitorPrivateLinkScopeTimeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_private_link_scope.MonitorPrivateLinkScopeTimeouts;

MonitorPrivateLinkScopeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#create MonitorPrivateLinkScope#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#delete MonitorPrivateLinkScope#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#read MonitorPrivateLinkScope#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#update MonitorPrivateLinkScope#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#create MonitorPrivateLinkScope#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#delete MonitorPrivateLinkScope#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#read MonitorPrivateLinkScope#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/monitor_private_link_scope#update MonitorPrivateLinkScope#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorPrivateLinkScopeTimeoutsOutputReference <a name="MonitorPrivateLinkScopeTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_private_link_scope.MonitorPrivateLinkScopeTimeoutsOutputReference;

new MonitorPrivateLinkScopeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts">MonitorPrivateLinkScopeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts">MonitorPrivateLinkScopeTimeouts</a>

---



