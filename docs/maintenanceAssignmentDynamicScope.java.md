# `maintenanceAssignmentDynamicScope` Submodule <a name="`maintenanceAssignmentDynamicScope` Submodule" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaintenanceAssignmentDynamicScope <a name="MaintenanceAssignmentDynamicScope" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope azurerm_maintenance_assignment_dynamic_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.maintenance_assignment_dynamic_scope.MaintenanceAssignmentDynamicScope;

MaintenanceAssignmentDynamicScope.Builder.create(Construct scope, java.lang.String id)
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
    .filter(MaintenanceAssignmentDynamicScopeFilter)
    .maintenanceConfigurationId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(MaintenanceAssignmentDynamicScopeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.maintenanceConfigurationId">maintenanceConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#maintenance_configuration_id MaintenanceAssignmentDynamicScope#maintenance_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#name MaintenanceAssignmentDynamicScope#name}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#id MaintenanceAssignmentDynamicScope#id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#filter MaintenanceAssignmentDynamicScope#filter}

---

##### `maintenanceConfigurationId`<sup>Required</sup> <a name="maintenanceConfigurationId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.maintenanceConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#maintenance_configuration_id MaintenanceAssignmentDynamicScope#maintenance_configuration_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#name MaintenanceAssignmentDynamicScope#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#id MaintenanceAssignmentDynamicScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#timeouts MaintenanceAssignmentDynamicScope#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putFilter"></a>

```java
public void putFilter(MaintenanceAssignmentDynamicScopeFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putTimeouts"></a>

```java
public void putTimeouts(MaintenanceAssignmentDynamicScopeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MaintenanceAssignmentDynamicScope resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.maintenance_assignment_dynamic_scope.MaintenanceAssignmentDynamicScope;

MaintenanceAssignmentDynamicScope.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.maintenance_assignment_dynamic_scope.MaintenanceAssignmentDynamicScope;

MaintenanceAssignmentDynamicScope.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.maintenance_assignment_dynamic_scope.MaintenanceAssignmentDynamicScope;

MaintenanceAssignmentDynamicScope.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.maintenance_assignment_dynamic_scope.MaintenanceAssignmentDynamicScope;

MaintenanceAssignmentDynamicScope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MaintenanceAssignmentDynamicScope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MaintenanceAssignmentDynamicScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MaintenanceAssignmentDynamicScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MaintenanceAssignmentDynamicScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MaintenanceAssignmentDynamicScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference">MaintenanceAssignmentDynamicScopeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference">MaintenanceAssignmentDynamicScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.maintenanceConfigurationIdInput">maintenanceConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.maintenanceConfigurationId">maintenanceConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.filter"></a>

```java
public MaintenanceAssignmentDynamicScopeFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference">MaintenanceAssignmentDynamicScopeFilterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.timeouts"></a>

```java
public MaintenanceAssignmentDynamicScopeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference">MaintenanceAssignmentDynamicScopeTimeoutsOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.filterInput"></a>

```java
public MaintenanceAssignmentDynamicScopeFilter getFilterInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maintenanceConfigurationIdInput`<sup>Optional</sup> <a name="maintenanceConfigurationIdInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.maintenanceConfigurationIdInput"></a>

```java
public java.lang.String getMaintenanceConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maintenanceConfigurationId`<sup>Required</sup> <a name="maintenanceConfigurationId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.maintenanceConfigurationId"></a>

```java
public java.lang.String getMaintenanceConfigurationId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MaintenanceAssignmentDynamicScopeConfig <a name="MaintenanceAssignmentDynamicScopeConfig" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.maintenance_assignment_dynamic_scope.MaintenanceAssignmentDynamicScopeConfig;

MaintenanceAssignmentDynamicScopeConfig.builder()
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
    .filter(MaintenanceAssignmentDynamicScopeFilter)
    .maintenanceConfigurationId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(MaintenanceAssignmentDynamicScopeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.maintenanceConfigurationId">maintenanceConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#maintenance_configuration_id MaintenanceAssignmentDynamicScope#maintenance_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#name MaintenanceAssignmentDynamicScope#name}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#id MaintenanceAssignmentDynamicScope#id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.filter"></a>

```java
public MaintenanceAssignmentDynamicScopeFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#filter MaintenanceAssignmentDynamicScope#filter}

---

##### `maintenanceConfigurationId`<sup>Required</sup> <a name="maintenanceConfigurationId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.maintenanceConfigurationId"></a>

```java
public java.lang.String getMaintenanceConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#maintenance_configuration_id MaintenanceAssignmentDynamicScope#maintenance_configuration_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#name MaintenanceAssignmentDynamicScope#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#id MaintenanceAssignmentDynamicScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.timeouts"></a>

```java
public MaintenanceAssignmentDynamicScopeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#timeouts MaintenanceAssignmentDynamicScope#timeouts}

---

### MaintenanceAssignmentDynamicScopeFilter <a name="MaintenanceAssignmentDynamicScopeFilter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.maintenance_assignment_dynamic_scope.MaintenanceAssignmentDynamicScopeFilter;

MaintenanceAssignmentDynamicScopeFilter.builder()
//  .locations(java.util.List<java.lang.String>)
//  .osTypes(java.util.List<java.lang.String>)
//  .resourceGroups(java.util.List<java.lang.String>)
//  .resourceTypes(java.util.List<java.lang.String>)
//  .tagFilter(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<MaintenanceAssignmentDynamicScopeFilterTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#locations MaintenanceAssignmentDynamicScope#locations}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.osTypes">osTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#os_types MaintenanceAssignmentDynamicScope#os_types}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.resourceGroups">resourceGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#resource_groups MaintenanceAssignmentDynamicScope#resource_groups}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#resource_types MaintenanceAssignmentDynamicScope#resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.tagFilter">tagFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#tag_filter MaintenanceAssignmentDynamicScope#tag_filter}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a>></code> | tags block. |

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#locations MaintenanceAssignmentDynamicScope#locations}.

---

##### `osTypes`<sup>Optional</sup> <a name="osTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.osTypes"></a>

```java
public java.util.List<java.lang.String> getOsTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#os_types MaintenanceAssignmentDynamicScope#os_types}.

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.resourceGroups"></a>

```java
public java.util.List<java.lang.String> getResourceGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#resource_groups MaintenanceAssignmentDynamicScope#resource_groups}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#resource_types MaintenanceAssignmentDynamicScope#resource_types}.

---

##### `tagFilter`<sup>Optional</sup> <a name="tagFilter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.tagFilter"></a>

```java
public java.lang.String getTagFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#tag_filter MaintenanceAssignmentDynamicScope#tag_filter}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#tags MaintenanceAssignmentDynamicScope#tags}

---

### MaintenanceAssignmentDynamicScopeFilterTags <a name="MaintenanceAssignmentDynamicScopeFilterTags" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.maintenance_assignment_dynamic_scope.MaintenanceAssignmentDynamicScopeFilterTags;

MaintenanceAssignmentDynamicScopeFilterTags.builder()
    .tag(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags.property.tag">tag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#tag MaintenanceAssignmentDynamicScope#tag}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#values MaintenanceAssignmentDynamicScope#values}. |

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#tag MaintenanceAssignmentDynamicScope#tag}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#values MaintenanceAssignmentDynamicScope#values}.

---

### MaintenanceAssignmentDynamicScopeTimeouts <a name="MaintenanceAssignmentDynamicScopeTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.maintenance_assignment_dynamic_scope.MaintenanceAssignmentDynamicScopeTimeouts;

MaintenanceAssignmentDynamicScopeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#create MaintenanceAssignmentDynamicScope#create}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#delete MaintenanceAssignmentDynamicScope#delete}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#read MaintenanceAssignmentDynamicScope#read}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#update MaintenanceAssignmentDynamicScope#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#create MaintenanceAssignmentDynamicScope#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#delete MaintenanceAssignmentDynamicScope#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#read MaintenanceAssignmentDynamicScope#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/maintenance_assignment_dynamic_scope#update MaintenanceAssignmentDynamicScope#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MaintenanceAssignmentDynamicScopeFilterOutputReference <a name="MaintenanceAssignmentDynamicScopeFilterOutputReference" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.maintenance_assignment_dynamic_scope.MaintenanceAssignmentDynamicScopeFilterOutputReference;

new MaintenanceAssignmentDynamicScopeFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetLocations">resetLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetOsTypes">resetOsTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetTagFilter">resetTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<MaintenanceAssignmentDynamicScopeFilterTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a>>

---

##### `resetLocations` <a name="resetLocations" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetLocations"></a>

```java
public void resetLocations()
```

##### `resetOsTypes` <a name="resetOsTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetOsTypes"></a>

```java
public void resetOsTypes()
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetResourceGroups"></a>

```java
public void resetResourceGroups()
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetResourceTypes"></a>

```java
public void resetResourceTypes()
```

##### `resetTagFilter` <a name="resetTagFilter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetTagFilter"></a>

```java
public void resetTagFilter()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList">MaintenanceAssignmentDynamicScopeFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.locationsInput">locationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.osTypesInput">osTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagFilterInput">tagFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.osTypes">osTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagFilter">tagFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tags"></a>

```java
public MaintenanceAssignmentDynamicScopeFilterTagsList getTags();
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList">MaintenanceAssignmentDynamicScopeFilterTagsList</a>

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.locationsInput"></a>

```java
public java.util.List<java.lang.String> getLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `osTypesInput`<sup>Optional</sup> <a name="osTypesInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.osTypesInput"></a>

```java
public java.util.List<java.lang.String> getOsTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceGroupsInput"></a>

```java
public java.util.List<java.lang.String> getResourceGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagFilterInput`<sup>Optional</sup> <a name="tagFilterInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagFilterInput"></a>

```java
public java.lang.String getTagFilterInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a>>

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `osTypes`<sup>Required</sup> <a name="osTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.osTypes"></a>

```java
public java.util.List<java.lang.String> getOsTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceGroups"></a>

```java
public java.util.List<java.lang.String> getResourceGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagFilter`<sup>Required</sup> <a name="tagFilter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagFilter"></a>

```java
public java.lang.String getTagFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.internalValue"></a>

```java
public MaintenanceAssignmentDynamicScopeFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a>

---


### MaintenanceAssignmentDynamicScopeFilterTagsList <a name="MaintenanceAssignmentDynamicScopeFilterTagsList" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.maintenance_assignment_dynamic_scope.MaintenanceAssignmentDynamicScopeFilterTagsList;

new MaintenanceAssignmentDynamicScopeFilterTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.get"></a>

```java
public MaintenanceAssignmentDynamicScopeFilterTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a>>

---


### MaintenanceAssignmentDynamicScopeFilterTagsOutputReference <a name="MaintenanceAssignmentDynamicScopeFilterTagsOutputReference" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.maintenance_assignment_dynamic_scope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference;

new MaintenanceAssignmentDynamicScopeFilterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.tagInput">tagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.tagInput"></a>

```java
public java.lang.String getTagInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a>

---


### MaintenanceAssignmentDynamicScopeTimeoutsOutputReference <a name="MaintenanceAssignmentDynamicScopeTimeoutsOutputReference" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.maintenance_assignment_dynamic_scope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference;

new MaintenanceAssignmentDynamicScopeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a>

---



