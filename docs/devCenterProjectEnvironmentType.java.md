# `devCenterProjectEnvironmentType` Submodule <a name="`devCenterProjectEnvironmentType` Submodule" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevCenterProjectEnvironmentType <a name="DevCenterProjectEnvironmentType" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type azurerm_dev_center_project_environment_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_environment_type.DevCenterProjectEnvironmentType;

DevCenterProjectEnvironmentType.Builder.create(Construct scope, java.lang.String id)
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
    .deploymentTargetId(java.lang.String)
    .devCenterProjectId(java.lang.String)
    .identity(DevCenterProjectEnvironmentTypeIdentity)
    .location(java.lang.String)
    .name(java.lang.String)
//  .creatorRoleAssignmentRoles(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DevCenterProjectEnvironmentTypeTimeouts)
//  .userRoleAssignment(IResolvable)
//  .userRoleAssignment(java.util.List<DevCenterProjectEnvironmentTypeUserRoleAssignment>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.deploymentTargetId">deploymentTargetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#deployment_target_id DevCenterProjectEnvironmentType#deployment_target_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.devCenterProjectId">devCenterProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#dev_center_project_id DevCenterProjectEnvironmentType#dev_center_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#location DevCenterProjectEnvironmentType#location}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#name DevCenterProjectEnvironmentType#name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.creatorRoleAssignmentRoles">creatorRoleAssignmentRoles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#creator_role_assignment_roles DevCenterProjectEnvironmentType#creator_role_assignment_roles}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#id DevCenterProjectEnvironmentType#id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#tags DevCenterProjectEnvironmentType#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.userRoleAssignment">userRoleAssignment</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>></code> | user_role_assignment block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentTargetId`<sup>Required</sup> <a name="deploymentTargetId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.deploymentTargetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#deployment_target_id DevCenterProjectEnvironmentType#deployment_target_id}.

---

##### `devCenterProjectId`<sup>Required</sup> <a name="devCenterProjectId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.devCenterProjectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#dev_center_project_id DevCenterProjectEnvironmentType#dev_center_project_id}.

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#identity DevCenterProjectEnvironmentType#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#location DevCenterProjectEnvironmentType#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#name DevCenterProjectEnvironmentType#name}.

---

##### `creatorRoleAssignmentRoles`<sup>Optional</sup> <a name="creatorRoleAssignmentRoles" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.creatorRoleAssignmentRoles"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#creator_role_assignment_roles DevCenterProjectEnvironmentType#creator_role_assignment_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#id DevCenterProjectEnvironmentType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#tags DevCenterProjectEnvironmentType#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#timeouts DevCenterProjectEnvironmentType#timeouts}

---

##### `userRoleAssignment`<sup>Optional</sup> <a name="userRoleAssignment" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.userRoleAssignment"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>>

user_role_assignment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#user_role_assignment DevCenterProjectEnvironmentType#user_role_assignment}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putUserRoleAssignment">putUserRoleAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetCreatorRoleAssignmentRoles">resetCreatorRoleAssignmentRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetUserRoleAssignment">resetUserRoleAssignment</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putIdentity"></a>

```java
public void putIdentity(DevCenterProjectEnvironmentTypeIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putTimeouts"></a>

```java
public void putTimeouts(DevCenterProjectEnvironmentTypeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a>

---

##### `putUserRoleAssignment` <a name="putUserRoleAssignment" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putUserRoleAssignment"></a>

```java
public void putUserRoleAssignment(IResolvable OR java.util.List<DevCenterProjectEnvironmentTypeUserRoleAssignment> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putUserRoleAssignment.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>>

---

##### `resetCreatorRoleAssignmentRoles` <a name="resetCreatorRoleAssignmentRoles" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetCreatorRoleAssignmentRoles"></a>

```java
public void resetCreatorRoleAssignmentRoles()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserRoleAssignment` <a name="resetUserRoleAssignment" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetUserRoleAssignment"></a>

```java
public void resetUserRoleAssignment()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevCenterProjectEnvironmentType resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_environment_type.DevCenterProjectEnvironmentType;

DevCenterProjectEnvironmentType.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_environment_type.DevCenterProjectEnvironmentType;

DevCenterProjectEnvironmentType.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_environment_type.DevCenterProjectEnvironmentType;

DevCenterProjectEnvironmentType.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_environment_type.DevCenterProjectEnvironmentType;

DevCenterProjectEnvironmentType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevCenterProjectEnvironmentType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DevCenterProjectEnvironmentType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevCenterProjectEnvironmentType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevCenterProjectEnvironmentType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DevCenterProjectEnvironmentType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference">DevCenterProjectEnvironmentTypeIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference">DevCenterProjectEnvironmentTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.userRoleAssignment">userRoleAssignment</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList">DevCenterProjectEnvironmentTypeUserRoleAssignmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.creatorRoleAssignmentRolesInput">creatorRoleAssignmentRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.deploymentTargetIdInput">deploymentTargetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.devCenterProjectIdInput">devCenterProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.userRoleAssignmentInput">userRoleAssignmentInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.creatorRoleAssignmentRoles">creatorRoleAssignmentRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.deploymentTargetId">deploymentTargetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.devCenterProjectId">devCenterProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.identity"></a>

```java
public DevCenterProjectEnvironmentTypeIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference">DevCenterProjectEnvironmentTypeIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.timeouts"></a>

```java
public DevCenterProjectEnvironmentTypeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference">DevCenterProjectEnvironmentTypeTimeoutsOutputReference</a>

---

##### `userRoleAssignment`<sup>Required</sup> <a name="userRoleAssignment" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.userRoleAssignment"></a>

```java
public DevCenterProjectEnvironmentTypeUserRoleAssignmentList getUserRoleAssignment();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList">DevCenterProjectEnvironmentTypeUserRoleAssignmentList</a>

---

##### `creatorRoleAssignmentRolesInput`<sup>Optional</sup> <a name="creatorRoleAssignmentRolesInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.creatorRoleAssignmentRolesInput"></a>

```java
public java.util.List<java.lang.String> getCreatorRoleAssignmentRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deploymentTargetIdInput`<sup>Optional</sup> <a name="deploymentTargetIdInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.deploymentTargetIdInput"></a>

```java
public java.lang.String getDeploymentTargetIdInput();
```

- *Type:* java.lang.String

---

##### `devCenterProjectIdInput`<sup>Optional</sup> <a name="devCenterProjectIdInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.devCenterProjectIdInput"></a>

```java
public java.lang.String getDevCenterProjectIdInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.identityInput"></a>

```java
public DevCenterProjectEnvironmentTypeIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a>

---

##### `userRoleAssignmentInput`<sup>Optional</sup> <a name="userRoleAssignmentInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.userRoleAssignmentInput"></a>

```java
public java.lang.Object getUserRoleAssignmentInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>>

---

##### `creatorRoleAssignmentRoles`<sup>Required</sup> <a name="creatorRoleAssignmentRoles" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.creatorRoleAssignmentRoles"></a>

```java
public java.util.List<java.lang.String> getCreatorRoleAssignmentRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deploymentTargetId`<sup>Required</sup> <a name="deploymentTargetId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.deploymentTargetId"></a>

```java
public java.lang.String getDeploymentTargetId();
```

- *Type:* java.lang.String

---

##### `devCenterProjectId`<sup>Required</sup> <a name="devCenterProjectId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.devCenterProjectId"></a>

```java
public java.lang.String getDevCenterProjectId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevCenterProjectEnvironmentTypeConfig <a name="DevCenterProjectEnvironmentTypeConfig" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_environment_type.DevCenterProjectEnvironmentTypeConfig;

DevCenterProjectEnvironmentTypeConfig.builder()
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
    .deploymentTargetId(java.lang.String)
    .devCenterProjectId(java.lang.String)
    .identity(DevCenterProjectEnvironmentTypeIdentity)
    .location(java.lang.String)
    .name(java.lang.String)
//  .creatorRoleAssignmentRoles(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DevCenterProjectEnvironmentTypeTimeouts)
//  .userRoleAssignment(IResolvable)
//  .userRoleAssignment(java.util.List<DevCenterProjectEnvironmentTypeUserRoleAssignment>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.deploymentTargetId">deploymentTargetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#deployment_target_id DevCenterProjectEnvironmentType#deployment_target_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.devCenterProjectId">devCenterProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#dev_center_project_id DevCenterProjectEnvironmentType#dev_center_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#location DevCenterProjectEnvironmentType#location}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#name DevCenterProjectEnvironmentType#name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.creatorRoleAssignmentRoles">creatorRoleAssignmentRoles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#creator_role_assignment_roles DevCenterProjectEnvironmentType#creator_role_assignment_roles}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#id DevCenterProjectEnvironmentType#id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#tags DevCenterProjectEnvironmentType#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.userRoleAssignment">userRoleAssignment</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>></code> | user_role_assignment block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentTargetId`<sup>Required</sup> <a name="deploymentTargetId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.deploymentTargetId"></a>

```java
public java.lang.String getDeploymentTargetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#deployment_target_id DevCenterProjectEnvironmentType#deployment_target_id}.

---

##### `devCenterProjectId`<sup>Required</sup> <a name="devCenterProjectId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.devCenterProjectId"></a>

```java
public java.lang.String getDevCenterProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#dev_center_project_id DevCenterProjectEnvironmentType#dev_center_project_id}.

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.identity"></a>

```java
public DevCenterProjectEnvironmentTypeIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#identity DevCenterProjectEnvironmentType#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#location DevCenterProjectEnvironmentType#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#name DevCenterProjectEnvironmentType#name}.

---

##### `creatorRoleAssignmentRoles`<sup>Optional</sup> <a name="creatorRoleAssignmentRoles" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.creatorRoleAssignmentRoles"></a>

```java
public java.util.List<java.lang.String> getCreatorRoleAssignmentRoles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#creator_role_assignment_roles DevCenterProjectEnvironmentType#creator_role_assignment_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#id DevCenterProjectEnvironmentType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#tags DevCenterProjectEnvironmentType#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.timeouts"></a>

```java
public DevCenterProjectEnvironmentTypeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#timeouts DevCenterProjectEnvironmentType#timeouts}

---

##### `userRoleAssignment`<sup>Optional</sup> <a name="userRoleAssignment" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.userRoleAssignment"></a>

```java
public java.lang.Object getUserRoleAssignment();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>>

user_role_assignment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#user_role_assignment DevCenterProjectEnvironmentType#user_role_assignment}

---

### DevCenterProjectEnvironmentTypeIdentity <a name="DevCenterProjectEnvironmentTypeIdentity" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_environment_type.DevCenterProjectEnvironmentTypeIdentity;

DevCenterProjectEnvironmentTypeIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#type DevCenterProjectEnvironmentType#type}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#identity_ids DevCenterProjectEnvironmentType#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#type DevCenterProjectEnvironmentType#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#identity_ids DevCenterProjectEnvironmentType#identity_ids}.

---

### DevCenterProjectEnvironmentTypeTimeouts <a name="DevCenterProjectEnvironmentTypeTimeouts" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_environment_type.DevCenterProjectEnvironmentTypeTimeouts;

DevCenterProjectEnvironmentTypeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#create DevCenterProjectEnvironmentType#create}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#delete DevCenterProjectEnvironmentType#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#read DevCenterProjectEnvironmentType#read}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#update DevCenterProjectEnvironmentType#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#create DevCenterProjectEnvironmentType#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#delete DevCenterProjectEnvironmentType#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#read DevCenterProjectEnvironmentType#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#update DevCenterProjectEnvironmentType#update}.

---

### DevCenterProjectEnvironmentTypeUserRoleAssignment <a name="DevCenterProjectEnvironmentTypeUserRoleAssignment" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_environment_type.DevCenterProjectEnvironmentTypeUserRoleAssignment;

DevCenterProjectEnvironmentTypeUserRoleAssignment.builder()
    .roles(java.util.List<java.lang.String>)
    .userId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#roles DevCenterProjectEnvironmentType#roles}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment.property.userId">userId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#user_id DevCenterProjectEnvironmentType#user_id}. |

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#roles DevCenterProjectEnvironmentType#roles}.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#user_id DevCenterProjectEnvironmentType#user_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevCenterProjectEnvironmentTypeIdentityOutputReference <a name="DevCenterProjectEnvironmentTypeIdentityOutputReference" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_environment_type.DevCenterProjectEnvironmentTypeIdentityOutputReference;

new DevCenterProjectEnvironmentTypeIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.internalValue"></a>

```java
public DevCenterProjectEnvironmentTypeIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a>

---


### DevCenterProjectEnvironmentTypeTimeoutsOutputReference <a name="DevCenterProjectEnvironmentTypeTimeoutsOutputReference" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_environment_type.DevCenterProjectEnvironmentTypeTimeoutsOutputReference;

new DevCenterProjectEnvironmentTypeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a>

---


### DevCenterProjectEnvironmentTypeUserRoleAssignmentList <a name="DevCenterProjectEnvironmentTypeUserRoleAssignmentList" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_environment_type.DevCenterProjectEnvironmentTypeUserRoleAssignmentList;

new DevCenterProjectEnvironmentTypeUserRoleAssignmentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.get"></a>

```java
public DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>>

---


### DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference <a name="DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_environment_type.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference;

new DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.rolesInput">rolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.rolesInput"></a>

```java
public java.util.List<java.lang.String> getRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>

---



