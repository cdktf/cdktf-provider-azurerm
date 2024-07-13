# `marketplaceRoleAssignment` Submodule <a name="`marketplaceRoleAssignment` Submodule" id="@cdktf/provider-azurerm.marketplaceRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MarketplaceRoleAssignment <a name="MarketplaceRoleAssignment" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment azurerm_marketplace_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.marketplace_role_assignment.MarketplaceRoleAssignment;

MarketplaceRoleAssignment.Builder.create(Construct scope, java.lang.String id)
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
//  .condition(java.lang.String)
//  .conditionVersion(java.lang.String)
//  .delegatedManagedIdentityResourceId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .roleDefinitionId(java.lang.String)
//  .roleDefinitionName(java.lang.String)
//  .skipServicePrincipalAadCheck(java.lang.Boolean)
//  .skipServicePrincipalAadCheck(IResolvable)
//  .timeouts(MarketplaceRoleAssignmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.principalId">principalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#principal_id MarketplaceRoleAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.condition">condition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#condition MarketplaceRoleAssignment#condition}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.conditionVersion">conditionVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#condition_version MarketplaceRoleAssignment#condition_version}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.delegatedManagedIdentityResourceId">delegatedManagedIdentityResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#delegated_managed_identity_resource_id MarketplaceRoleAssignment#delegated_managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#description MarketplaceRoleAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#id MarketplaceRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#name MarketplaceRoleAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.roleDefinitionId">roleDefinitionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#role_definition_id MarketplaceRoleAssignment#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.roleDefinitionName">roleDefinitionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#role_definition_name MarketplaceRoleAssignment#role_definition_name}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.skipServicePrincipalAadCheck">skipServicePrincipalAadCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#skip_service_principal_aad_check MarketplaceRoleAssignment#skip_service_principal_aad_check}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.principalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#principal_id MarketplaceRoleAssignment#principal_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.condition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#condition MarketplaceRoleAssignment#condition}.

---

##### `conditionVersion`<sup>Optional</sup> <a name="conditionVersion" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.conditionVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#condition_version MarketplaceRoleAssignment#condition_version}.

---

##### `delegatedManagedIdentityResourceId`<sup>Optional</sup> <a name="delegatedManagedIdentityResourceId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.delegatedManagedIdentityResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#delegated_managed_identity_resource_id MarketplaceRoleAssignment#delegated_managed_identity_resource_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#description MarketplaceRoleAssignment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#id MarketplaceRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#name MarketplaceRoleAssignment#name}.

---

##### `roleDefinitionId`<sup>Optional</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.roleDefinitionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#role_definition_id MarketplaceRoleAssignment#role_definition_id}.

---

##### `roleDefinitionName`<sup>Optional</sup> <a name="roleDefinitionName" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.roleDefinitionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#role_definition_name MarketplaceRoleAssignment#role_definition_name}.

---

##### `skipServicePrincipalAadCheck`<sup>Optional</sup> <a name="skipServicePrincipalAadCheck" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.skipServicePrincipalAadCheck"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#skip_service_principal_aad_check MarketplaceRoleAssignment#skip_service_principal_aad_check}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#timeouts MarketplaceRoleAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetConditionVersion">resetConditionVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetDelegatedManagedIdentityResourceId">resetDelegatedManagedIdentityResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetRoleDefinitionId">resetRoleDefinitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetRoleDefinitionName">resetRoleDefinitionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetSkipServicePrincipalAadCheck">resetSkipServicePrincipalAadCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.putTimeouts"></a>

```java
public void putTimeouts(MarketplaceRoleAssignmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetConditionVersion` <a name="resetConditionVersion" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetConditionVersion"></a>

```java
public void resetConditionVersion()
```

##### `resetDelegatedManagedIdentityResourceId` <a name="resetDelegatedManagedIdentityResourceId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetDelegatedManagedIdentityResourceId"></a>

```java
public void resetDelegatedManagedIdentityResourceId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetName"></a>

```java
public void resetName()
```

##### `resetRoleDefinitionId` <a name="resetRoleDefinitionId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetRoleDefinitionId"></a>

```java
public void resetRoleDefinitionId()
```

##### `resetRoleDefinitionName` <a name="resetRoleDefinitionName" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetRoleDefinitionName"></a>

```java
public void resetRoleDefinitionName()
```

##### `resetSkipServicePrincipalAadCheck` <a name="resetSkipServicePrincipalAadCheck" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetSkipServicePrincipalAadCheck"></a>

```java
public void resetSkipServicePrincipalAadCheck()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MarketplaceRoleAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.marketplace_role_assignment.MarketplaceRoleAssignment;

MarketplaceRoleAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.marketplace_role_assignment.MarketplaceRoleAssignment;

MarketplaceRoleAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.marketplace_role_assignment.MarketplaceRoleAssignment;

MarketplaceRoleAssignment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.marketplace_role_assignment.MarketplaceRoleAssignment;

MarketplaceRoleAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MarketplaceRoleAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MarketplaceRoleAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MarketplaceRoleAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MarketplaceRoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MarketplaceRoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference">MarketplaceRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionVersionInput">conditionVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.delegatedManagedIdentityResourceIdInput">delegatedManagedIdentityResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalIdInput">principalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionIdInput">roleDefinitionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionNameInput">roleDefinitionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.skipServicePrincipalAadCheckInput">skipServicePrincipalAadCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionVersion">conditionVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.delegatedManagedIdentityResourceId">delegatedManagedIdentityResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionId">roleDefinitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionName">roleDefinitionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.skipServicePrincipalAadCheck">skipServicePrincipalAadCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.timeouts"></a>

```java
public MarketplaceRoleAssignmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference">MarketplaceRoleAssignmentTimeoutsOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `conditionVersionInput`<sup>Optional</sup> <a name="conditionVersionInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionVersionInput"></a>

```java
public java.lang.String getConditionVersionInput();
```

- *Type:* java.lang.String

---

##### `delegatedManagedIdentityResourceIdInput`<sup>Optional</sup> <a name="delegatedManagedIdentityResourceIdInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.delegatedManagedIdentityResourceIdInput"></a>

```java
public java.lang.String getDelegatedManagedIdentityResourceIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalIdInput"></a>

```java
public java.lang.String getPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `roleDefinitionIdInput`<sup>Optional</sup> <a name="roleDefinitionIdInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionIdInput"></a>

```java
public java.lang.String getRoleDefinitionIdInput();
```

- *Type:* java.lang.String

---

##### `roleDefinitionNameInput`<sup>Optional</sup> <a name="roleDefinitionNameInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionNameInput"></a>

```java
public java.lang.String getRoleDefinitionNameInput();
```

- *Type:* java.lang.String

---

##### `skipServicePrincipalAadCheckInput`<sup>Optional</sup> <a name="skipServicePrincipalAadCheckInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.skipServicePrincipalAadCheckInput"></a>

```java
public java.lang.Object getSkipServicePrincipalAadCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `conditionVersion`<sup>Required</sup> <a name="conditionVersion" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionVersion"></a>

```java
public java.lang.String getConditionVersion();
```

- *Type:* java.lang.String

---

##### `delegatedManagedIdentityResourceId`<sup>Required</sup> <a name="delegatedManagedIdentityResourceId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.delegatedManagedIdentityResourceId"></a>

```java
public java.lang.String getDelegatedManagedIdentityResourceId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionId"></a>

```java
public java.lang.String getRoleDefinitionId();
```

- *Type:* java.lang.String

---

##### `roleDefinitionName`<sup>Required</sup> <a name="roleDefinitionName" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionName"></a>

```java
public java.lang.String getRoleDefinitionName();
```

- *Type:* java.lang.String

---

##### `skipServicePrincipalAadCheck`<sup>Required</sup> <a name="skipServicePrincipalAadCheck" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.skipServicePrincipalAadCheck"></a>

```java
public java.lang.Object getSkipServicePrincipalAadCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MarketplaceRoleAssignmentConfig <a name="MarketplaceRoleAssignmentConfig" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.marketplace_role_assignment.MarketplaceRoleAssignmentConfig;

MarketplaceRoleAssignmentConfig.builder()
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
//  .condition(java.lang.String)
//  .conditionVersion(java.lang.String)
//  .delegatedManagedIdentityResourceId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .roleDefinitionId(java.lang.String)
//  .roleDefinitionName(java.lang.String)
//  .skipServicePrincipalAadCheck(java.lang.Boolean)
//  .skipServicePrincipalAadCheck(IResolvable)
//  .timeouts(MarketplaceRoleAssignmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.principalId">principalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#principal_id MarketplaceRoleAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.condition">condition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#condition MarketplaceRoleAssignment#condition}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.conditionVersion">conditionVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#condition_version MarketplaceRoleAssignment#condition_version}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.delegatedManagedIdentityResourceId">delegatedManagedIdentityResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#delegated_managed_identity_resource_id MarketplaceRoleAssignment#delegated_managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#description MarketplaceRoleAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#id MarketplaceRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#name MarketplaceRoleAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.roleDefinitionId">roleDefinitionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#role_definition_id MarketplaceRoleAssignment#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.roleDefinitionName">roleDefinitionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#role_definition_name MarketplaceRoleAssignment#role_definition_name}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.skipServicePrincipalAadCheck">skipServicePrincipalAadCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#skip_service_principal_aad_check MarketplaceRoleAssignment#skip_service_principal_aad_check}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#principal_id MarketplaceRoleAssignment#principal_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#condition MarketplaceRoleAssignment#condition}.

---

##### `conditionVersion`<sup>Optional</sup> <a name="conditionVersion" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.conditionVersion"></a>

```java
public java.lang.String getConditionVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#condition_version MarketplaceRoleAssignment#condition_version}.

---

##### `delegatedManagedIdentityResourceId`<sup>Optional</sup> <a name="delegatedManagedIdentityResourceId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.delegatedManagedIdentityResourceId"></a>

```java
public java.lang.String getDelegatedManagedIdentityResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#delegated_managed_identity_resource_id MarketplaceRoleAssignment#delegated_managed_identity_resource_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#description MarketplaceRoleAssignment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#id MarketplaceRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#name MarketplaceRoleAssignment#name}.

---

##### `roleDefinitionId`<sup>Optional</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.roleDefinitionId"></a>

```java
public java.lang.String getRoleDefinitionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#role_definition_id MarketplaceRoleAssignment#role_definition_id}.

---

##### `roleDefinitionName`<sup>Optional</sup> <a name="roleDefinitionName" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.roleDefinitionName"></a>

```java
public java.lang.String getRoleDefinitionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#role_definition_name MarketplaceRoleAssignment#role_definition_name}.

---

##### `skipServicePrincipalAadCheck`<sup>Optional</sup> <a name="skipServicePrincipalAadCheck" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.skipServicePrincipalAadCheck"></a>

```java
public java.lang.Object getSkipServicePrincipalAadCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#skip_service_principal_aad_check MarketplaceRoleAssignment#skip_service_principal_aad_check}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.timeouts"></a>

```java
public MarketplaceRoleAssignmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#timeouts MarketplaceRoleAssignment#timeouts}

---

### MarketplaceRoleAssignmentTimeouts <a name="MarketplaceRoleAssignmentTimeouts" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.marketplace_role_assignment.MarketplaceRoleAssignmentTimeouts;

MarketplaceRoleAssignmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#create MarketplaceRoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#delete MarketplaceRoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#read MarketplaceRoleAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#create MarketplaceRoleAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#delete MarketplaceRoleAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/marketplace_role_assignment#read MarketplaceRoleAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MarketplaceRoleAssignmentTimeoutsOutputReference <a name="MarketplaceRoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.marketplace_role_assignment.MarketplaceRoleAssignmentTimeoutsOutputReference;

new MarketplaceRoleAssignmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a>

---



