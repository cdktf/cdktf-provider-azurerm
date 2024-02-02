# `pimActiveRoleAssignment` Submodule <a name="`pimActiveRoleAssignment` Submodule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PimActiveRoleAssignment <a name="PimActiveRoleAssignment" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment azurerm_pim_active_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.pim_active_role_assignment.PimActiveRoleAssignment;

PimActiveRoleAssignment.Builder.create(Construct scope, java.lang.String id)
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
    .principalId(java.lang.String)
    .roleDefinitionId(java.lang.String)
    .scope(java.lang.String)
//  .id(java.lang.String)
//  .justification(java.lang.String)
//  .schedule(PimActiveRoleAssignmentSchedule)
//  .ticket(PimActiveRoleAssignmentTicket)
//  .timeouts(PimActiveRoleAssignmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.principalId">principalId</a></code> | <code>java.lang.String</code> | The principal id. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.roleDefinitionId">roleDefinitionId</a></code> | <code>java.lang.String</code> | The role definition id. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | The scope. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#id PimActiveRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.justification">justification</a></code> | <code>java.lang.String</code> | The justification of the role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.ticket">ticket</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a></code> | ticket block. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.principalId"></a>

- *Type:* java.lang.String

The principal id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#principal_id PimActiveRoleAssignment#principal_id}

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.roleDefinitionId"></a>

- *Type:* java.lang.String

The role definition id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#role_definition_id PimActiveRoleAssignment#role_definition_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

The scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#scope PimActiveRoleAssignment#scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#id PimActiveRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `justification`<sup>Optional</sup> <a name="justification" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.justification"></a>

- *Type:* java.lang.String

The justification of the role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#justification PimActiveRoleAssignment#justification}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#schedule PimActiveRoleAssignment#schedule}

---

##### `ticket`<sup>Optional</sup> <a name="ticket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.ticket"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a>

ticket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#ticket PimActiveRoleAssignment#ticket}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#timeouts PimActiveRoleAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTicket">putTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetJustification">resetJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetTicket">resetTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putSchedule"></a>

```java
public void putSchedule(PimActiveRoleAssignmentSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a>

---

##### `putTicket` <a name="putTicket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTicket"></a>

```java
public void putTicket(PimActiveRoleAssignmentTicket value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTicket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTimeouts"></a>

```java
public void putTimeouts(PimActiveRoleAssignmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetId"></a>

```java
public void resetId()
```

##### `resetJustification` <a name="resetJustification" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetJustification"></a>

```java
public void resetJustification()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetTicket` <a name="resetTicket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetTicket"></a>

```java
public void resetTicket()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PimActiveRoleAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.pim_active_role_assignment.PimActiveRoleAssignment;

PimActiveRoleAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.pim_active_role_assignment.PimActiveRoleAssignment;

PimActiveRoleAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.pim_active_role_assignment.PimActiveRoleAssignment;

PimActiveRoleAssignment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.pim_active_role_assignment.PimActiveRoleAssignment;

PimActiveRoleAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PimActiveRoleAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PimActiveRoleAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PimActiveRoleAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PimActiveRoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PimActiveRoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference">PimActiveRoleAssignmentScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.ticket">ticket</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference">PimActiveRoleAssignmentTicketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference">PimActiveRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.justificationInput">justificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalIdInput">principalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.roleDefinitionIdInput">roleDefinitionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.ticketInput">ticketInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.justification">justification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.roleDefinitionId">roleDefinitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.schedule"></a>

```java
public PimActiveRoleAssignmentScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference">PimActiveRoleAssignmentScheduleOutputReference</a>

---

##### `ticket`<sup>Required</sup> <a name="ticket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.ticket"></a>

```java
public PimActiveRoleAssignmentTicketOutputReference getTicket();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference">PimActiveRoleAssignmentTicketOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.timeouts"></a>

```java
public PimActiveRoleAssignmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference">PimActiveRoleAssignmentTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `justificationInput`<sup>Optional</sup> <a name="justificationInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.justificationInput"></a>

```java
public java.lang.String getJustificationInput();
```

- *Type:* java.lang.String

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalIdInput"></a>

```java
public java.lang.String getPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `roleDefinitionIdInput`<sup>Optional</sup> <a name="roleDefinitionIdInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.roleDefinitionIdInput"></a>

```java
public java.lang.String getRoleDefinitionIdInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scheduleInput"></a>

```java
public PimActiveRoleAssignmentSchedule getScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `ticketInput`<sup>Optional</sup> <a name="ticketInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.ticketInput"></a>

```java
public PimActiveRoleAssignmentTicket getTicketInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `justification`<sup>Required</sup> <a name="justification" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.justification"></a>

```java
public java.lang.String getJustification();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.roleDefinitionId"></a>

```java
public java.lang.String getRoleDefinitionId();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PimActiveRoleAssignmentConfig <a name="PimActiveRoleAssignmentConfig" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.pim_active_role_assignment.PimActiveRoleAssignmentConfig;

PimActiveRoleAssignmentConfig.builder()
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
    .principalId(java.lang.String)
    .roleDefinitionId(java.lang.String)
    .scope(java.lang.String)
//  .id(java.lang.String)
//  .justification(java.lang.String)
//  .schedule(PimActiveRoleAssignmentSchedule)
//  .ticket(PimActiveRoleAssignmentTicket)
//  .timeouts(PimActiveRoleAssignmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.principalId">principalId</a></code> | <code>java.lang.String</code> | The principal id. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.roleDefinitionId">roleDefinitionId</a></code> | <code>java.lang.String</code> | The role definition id. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | The scope. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#id PimActiveRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.justification">justification</a></code> | <code>java.lang.String</code> | The justification of the role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.ticket">ticket</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a></code> | ticket block. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

The principal id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#principal_id PimActiveRoleAssignment#principal_id}

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.roleDefinitionId"></a>

```java
public java.lang.String getRoleDefinitionId();
```

- *Type:* java.lang.String

The role definition id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#role_definition_id PimActiveRoleAssignment#role_definition_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#scope PimActiveRoleAssignment#scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#id PimActiveRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `justification`<sup>Optional</sup> <a name="justification" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.justification"></a>

```java
public java.lang.String getJustification();
```

- *Type:* java.lang.String

The justification of the role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#justification PimActiveRoleAssignment#justification}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.schedule"></a>

```java
public PimActiveRoleAssignmentSchedule getSchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#schedule PimActiveRoleAssignment#schedule}

---

##### `ticket`<sup>Optional</sup> <a name="ticket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.ticket"></a>

```java
public PimActiveRoleAssignmentTicket getTicket();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a>

ticket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#ticket PimActiveRoleAssignment#ticket}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.timeouts"></a>

```java
public PimActiveRoleAssignmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#timeouts PimActiveRoleAssignment#timeouts}

---

### PimActiveRoleAssignmentSchedule <a name="PimActiveRoleAssignmentSchedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.pim_active_role_assignment.PimActiveRoleAssignmentSchedule;

PimActiveRoleAssignmentSchedule.builder()
//  .expiration(PimActiveRoleAssignmentScheduleExpiration)
//  .startDateTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a></code> | expiration block. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.property.startDateTime">startDateTime</a></code> | <code>java.lang.String</code> | The start date time. |

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.property.expiration"></a>

```java
public PimActiveRoleAssignmentScheduleExpiration getExpiration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a>

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#expiration PimActiveRoleAssignment#expiration}

---

##### `startDateTime`<sup>Optional</sup> <a name="startDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.property.startDateTime"></a>

```java
public java.lang.String getStartDateTime();
```

- *Type:* java.lang.String

The start date time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#start_date_time PimActiveRoleAssignment#start_date_time}

---

### PimActiveRoleAssignmentScheduleExpiration <a name="PimActiveRoleAssignmentScheduleExpiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.pim_active_role_assignment.PimActiveRoleAssignmentScheduleExpiration;

PimActiveRoleAssignmentScheduleExpiration.builder()
//  .durationDays(java.lang.Number)
//  .durationHours(java.lang.Number)
//  .endDateTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.durationDays">durationDays</a></code> | <code>java.lang.Number</code> | The duration of the assignment in days. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.durationHours">durationHours</a></code> | <code>java.lang.Number</code> | The duration of the assignment in hours. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.endDateTime">endDateTime</a></code> | <code>java.lang.String</code> | The end date time of the assignment. |

---

##### `durationDays`<sup>Optional</sup> <a name="durationDays" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.durationDays"></a>

```java
public java.lang.Number getDurationDays();
```

- *Type:* java.lang.Number

The duration of the assignment in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#duration_days PimActiveRoleAssignment#duration_days}

---

##### `durationHours`<sup>Optional</sup> <a name="durationHours" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.durationHours"></a>

```java
public java.lang.Number getDurationHours();
```

- *Type:* java.lang.Number

The duration of the assignment in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#duration_hours PimActiveRoleAssignment#duration_hours}

---

##### `endDateTime`<sup>Optional</sup> <a name="endDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.endDateTime"></a>

```java
public java.lang.String getEndDateTime();
```

- *Type:* java.lang.String

The end date time of the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#end_date_time PimActiveRoleAssignment#end_date_time}

---

### PimActiveRoleAssignmentTicket <a name="PimActiveRoleAssignmentTicket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.pim_active_role_assignment.PimActiveRoleAssignmentTicket;

PimActiveRoleAssignmentTicket.builder()
//  .number(java.lang.String)
//  .systemAttribute(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.property.number">number</a></code> | <code>java.lang.String</code> | The ticket number. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.property.systemAttribute">systemAttribute</a></code> | <code>java.lang.String</code> | The ticket system. |

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.property.number"></a>

```java
public java.lang.String getNumber();
```

- *Type:* java.lang.String

The ticket number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#number PimActiveRoleAssignment#number}

---

##### `systemAttribute`<sup>Optional</sup> <a name="systemAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.property.systemAttribute"></a>

```java
public java.lang.String getSystemAttribute();
```

- *Type:* java.lang.String

The ticket system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#system PimActiveRoleAssignment#system}

---

### PimActiveRoleAssignmentTimeouts <a name="PimActiveRoleAssignmentTimeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.pim_active_role_assignment.PimActiveRoleAssignmentTimeouts;

PimActiveRoleAssignmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#create PimActiveRoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#delete PimActiveRoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#read PimActiveRoleAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#create PimActiveRoleAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#delete PimActiveRoleAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/pim_active_role_assignment#read PimActiveRoleAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### PimActiveRoleAssignmentScheduleExpirationOutputReference <a name="PimActiveRoleAssignmentScheduleExpirationOutputReference" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.pim_active_role_assignment.PimActiveRoleAssignmentScheduleExpirationOutputReference;

new PimActiveRoleAssignmentScheduleExpirationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetDurationDays">resetDurationDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetDurationHours">resetDurationHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetEndDateTime">resetEndDateTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurationDays` <a name="resetDurationDays" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetDurationDays"></a>

```java
public void resetDurationDays()
```

##### `resetDurationHours` <a name="resetDurationHours" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetDurationHours"></a>

```java
public void resetDurationHours()
```

##### `resetEndDateTime` <a name="resetEndDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetEndDateTime"></a>

```java
public void resetEndDateTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationDaysInput">durationDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationHoursInput">durationHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.endDateTimeInput">endDateTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationDays">durationDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationHours">durationHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.endDateTime">endDateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationDaysInput`<sup>Optional</sup> <a name="durationDaysInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationDaysInput"></a>

```java
public java.lang.Number getDurationDaysInput();
```

- *Type:* java.lang.Number

---

##### `durationHoursInput`<sup>Optional</sup> <a name="durationHoursInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationHoursInput"></a>

```java
public java.lang.Number getDurationHoursInput();
```

- *Type:* java.lang.Number

---

##### `endDateTimeInput`<sup>Optional</sup> <a name="endDateTimeInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.endDateTimeInput"></a>

```java
public java.lang.String getEndDateTimeInput();
```

- *Type:* java.lang.String

---

##### `durationDays`<sup>Required</sup> <a name="durationDays" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationDays"></a>

```java
public java.lang.Number getDurationDays();
```

- *Type:* java.lang.Number

---

##### `durationHours`<sup>Required</sup> <a name="durationHours" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationHours"></a>

```java
public java.lang.Number getDurationHours();
```

- *Type:* java.lang.Number

---

##### `endDateTime`<sup>Required</sup> <a name="endDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.endDateTime"></a>

```java
public java.lang.String getEndDateTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.internalValue"></a>

```java
public PimActiveRoleAssignmentScheduleExpiration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a>

---


### PimActiveRoleAssignmentScheduleOutputReference <a name="PimActiveRoleAssignmentScheduleOutputReference" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.pim_active_role_assignment.PimActiveRoleAssignmentScheduleOutputReference;

new PimActiveRoleAssignmentScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.putExpiration">putExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resetStartDateTime">resetStartDateTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpiration` <a name="putExpiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.putExpiration"></a>

```java
public void putExpiration(PimActiveRoleAssignmentScheduleExpiration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a>

---

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resetExpiration"></a>

```java
public void resetExpiration()
```

##### `resetStartDateTime` <a name="resetStartDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resetStartDateTime"></a>

```java
public void resetStartDateTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference">PimActiveRoleAssignmentScheduleExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.expirationInput">expirationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.startDateTimeInput">startDateTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.startDateTime">startDateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.expiration"></a>

```java
public PimActiveRoleAssignmentScheduleExpirationOutputReference getExpiration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference">PimActiveRoleAssignmentScheduleExpirationOutputReference</a>

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.expirationInput"></a>

```java
public PimActiveRoleAssignmentScheduleExpiration getExpirationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a>

---

##### `startDateTimeInput`<sup>Optional</sup> <a name="startDateTimeInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.startDateTimeInput"></a>

```java
public java.lang.String getStartDateTimeInput();
```

- *Type:* java.lang.String

---

##### `startDateTime`<sup>Required</sup> <a name="startDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.startDateTime"></a>

```java
public java.lang.String getStartDateTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.internalValue"></a>

```java
public PimActiveRoleAssignmentSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a>

---


### PimActiveRoleAssignmentTicketOutputReference <a name="PimActiveRoleAssignmentTicketOutputReference" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.pim_active_role_assignment.PimActiveRoleAssignmentTicketOutputReference;

new PimActiveRoleAssignmentTicketOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resetNumber">resetNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resetSystemAttribute">resetSystemAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumber` <a name="resetNumber" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resetNumber"></a>

```java
public void resetNumber()
```

##### `resetSystemAttribute` <a name="resetSystemAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resetSystemAttribute"></a>

```java
public void resetSystemAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.numberInput">numberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.systemAttributeInput">systemAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.number">number</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.systemAttribute">systemAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.numberInput"></a>

```java
public java.lang.String getNumberInput();
```

- *Type:* java.lang.String

---

##### `systemAttributeInput`<sup>Optional</sup> <a name="systemAttributeInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.systemAttributeInput"></a>

```java
public java.lang.String getSystemAttributeInput();
```

- *Type:* java.lang.String

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.number"></a>

```java
public java.lang.String getNumber();
```

- *Type:* java.lang.String

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.systemAttribute"></a>

```java
public java.lang.String getSystemAttribute();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.internalValue"></a>

```java
public PimActiveRoleAssignmentTicket getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a>

---


### PimActiveRoleAssignmentTimeoutsOutputReference <a name="PimActiveRoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.pim_active_role_assignment.PimActiveRoleAssignmentTimeoutsOutputReference;

new PimActiveRoleAssignmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a>

---



