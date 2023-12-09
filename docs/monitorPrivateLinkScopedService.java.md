# `monitorPrivateLinkScopedService` Submodule <a name="`monitorPrivateLinkScopedService` Submodule" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorPrivateLinkScopedService <a name="MonitorPrivateLinkScopedService" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service azurerm_monitor_private_link_scoped_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_private_link_scoped_service.MonitorPrivateLinkScopedService;

MonitorPrivateLinkScopedService.Builder.create(Construct scope, java.lang.String id)
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
    .linkedResourceId(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .scopeName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(MonitorPrivateLinkScopedServiceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.linkedResourceId">linkedResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#linked_resource_id MonitorPrivateLinkScopedService#linked_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#name MonitorPrivateLinkScopedService#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#resource_group_name MonitorPrivateLinkScopedService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.scopeName">scopeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#scope_name MonitorPrivateLinkScopedService#scope_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#id MonitorPrivateLinkScopedService#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts">MonitorPrivateLinkScopedServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `linkedResourceId`<sup>Required</sup> <a name="linkedResourceId" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.linkedResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#linked_resource_id MonitorPrivateLinkScopedService#linked_resource_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#name MonitorPrivateLinkScopedService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#resource_group_name MonitorPrivateLinkScopedService#resource_group_name}.

---

##### `scopeName`<sup>Required</sup> <a name="scopeName" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.scopeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#scope_name MonitorPrivateLinkScopedService#scope_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#id MonitorPrivateLinkScopedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts">MonitorPrivateLinkScopedServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#timeouts MonitorPrivateLinkScopedService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.putTimeouts"></a>

```java
public void putTimeouts(MonitorPrivateLinkScopedServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts">MonitorPrivateLinkScopedServiceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorPrivateLinkScopedService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_private_link_scoped_service.MonitorPrivateLinkScopedService;

MonitorPrivateLinkScopedService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_private_link_scoped_service.MonitorPrivateLinkScopedService;

MonitorPrivateLinkScopedService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_private_link_scoped_service.MonitorPrivateLinkScopedService;

MonitorPrivateLinkScopedService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_private_link_scoped_service.MonitorPrivateLinkScopedService;

MonitorPrivateLinkScopedService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MonitorPrivateLinkScopedService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MonitorPrivateLinkScopedService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MonitorPrivateLinkScopedService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MonitorPrivateLinkScopedService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MonitorPrivateLinkScopedService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference">MonitorPrivateLinkScopedServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.linkedResourceIdInput">linkedResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.scopeNameInput">scopeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts">MonitorPrivateLinkScopedServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.linkedResourceId">linkedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.scopeName">scopeName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.timeouts"></a>

```java
public MonitorPrivateLinkScopedServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference">MonitorPrivateLinkScopedServiceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `linkedResourceIdInput`<sup>Optional</sup> <a name="linkedResourceIdInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.linkedResourceIdInput"></a>

```java
public java.lang.String getLinkedResourceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `scopeNameInput`<sup>Optional</sup> <a name="scopeNameInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.scopeNameInput"></a>

```java
public java.lang.String getScopeNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts">MonitorPrivateLinkScopedServiceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `linkedResourceId`<sup>Required</sup> <a name="linkedResourceId" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.linkedResourceId"></a>

```java
public java.lang.String getLinkedResourceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `scopeName`<sup>Required</sup> <a name="scopeName" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.scopeName"></a>

```java
public java.lang.String getScopeName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorPrivateLinkScopedServiceConfig <a name="MonitorPrivateLinkScopedServiceConfig" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_private_link_scoped_service.MonitorPrivateLinkScopedServiceConfig;

MonitorPrivateLinkScopedServiceConfig.builder()
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
    .linkedResourceId(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .scopeName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(MonitorPrivateLinkScopedServiceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.linkedResourceId">linkedResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#linked_resource_id MonitorPrivateLinkScopedService#linked_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#name MonitorPrivateLinkScopedService#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#resource_group_name MonitorPrivateLinkScopedService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.scopeName">scopeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#scope_name MonitorPrivateLinkScopedService#scope_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#id MonitorPrivateLinkScopedService#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts">MonitorPrivateLinkScopedServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `linkedResourceId`<sup>Required</sup> <a name="linkedResourceId" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.linkedResourceId"></a>

```java
public java.lang.String getLinkedResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#linked_resource_id MonitorPrivateLinkScopedService#linked_resource_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#name MonitorPrivateLinkScopedService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#resource_group_name MonitorPrivateLinkScopedService#resource_group_name}.

---

##### `scopeName`<sup>Required</sup> <a name="scopeName" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.scopeName"></a>

```java
public java.lang.String getScopeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#scope_name MonitorPrivateLinkScopedService#scope_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#id MonitorPrivateLinkScopedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.timeouts"></a>

```java
public MonitorPrivateLinkScopedServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts">MonitorPrivateLinkScopedServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#timeouts MonitorPrivateLinkScopedService#timeouts}

---

### MonitorPrivateLinkScopedServiceTimeouts <a name="MonitorPrivateLinkScopedServiceTimeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_private_link_scoped_service.MonitorPrivateLinkScopedServiceTimeouts;

MonitorPrivateLinkScopedServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#create MonitorPrivateLinkScopedService#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#delete MonitorPrivateLinkScopedService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#read MonitorPrivateLinkScopedService#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#create MonitorPrivateLinkScopedService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#delete MonitorPrivateLinkScopedService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#read MonitorPrivateLinkScopedService#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorPrivateLinkScopedServiceTimeoutsOutputReference <a name="MonitorPrivateLinkScopedServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_private_link_scoped_service.MonitorPrivateLinkScopedServiceTimeoutsOutputReference;

new MonitorPrivateLinkScopedServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts">MonitorPrivateLinkScopedServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts">MonitorPrivateLinkScopedServiceTimeouts</a>

---



