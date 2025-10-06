# `kustoDatabasePrincipalAssignment` Submodule <a name="`kustoDatabasePrincipalAssignment` Submodule" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoDatabasePrincipalAssignment <a name="KustoDatabasePrincipalAssignment" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment azurerm_kusto_database_principal_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_database_principal_assignment.KustoDatabasePrincipalAssignment;

KustoDatabasePrincipalAssignment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .databaseName(java.lang.String)
    .name(java.lang.String)
    .principalId(java.lang.String)
    .principalType(java.lang.String)
    .resourceGroupName(java.lang.String)
    .role(java.lang.String)
    .tenantId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(KustoDatabasePrincipalAssignmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#cluster_name KustoDatabasePrincipalAssignment#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#database_name KustoDatabasePrincipalAssignment#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#name KustoDatabasePrincipalAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.principalId">principalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#principal_id KustoDatabasePrincipalAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#principal_type KustoDatabasePrincipalAssignment#principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#resource_group_name KustoDatabasePrincipalAssignment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#role KustoDatabasePrincipalAssignment#role}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#tenant_id KustoDatabasePrincipalAssignment#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#id KustoDatabasePrincipalAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#cluster_name KustoDatabasePrincipalAssignment#cluster_name}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#database_name KustoDatabasePrincipalAssignment#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#name KustoDatabasePrincipalAssignment#name}.

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.principalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#principal_id KustoDatabasePrincipalAssignment#principal_id}.

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.principalType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#principal_type KustoDatabasePrincipalAssignment#principal_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#resource_group_name KustoDatabasePrincipalAssignment#resource_group_name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#role KustoDatabasePrincipalAssignment#role}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#tenant_id KustoDatabasePrincipalAssignment#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#id KustoDatabasePrincipalAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#timeouts KustoDatabasePrincipalAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.putTimeouts"></a>

```java
public void putTimeouts(KustoDatabasePrincipalAssignmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KustoDatabasePrincipalAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_database_principal_assignment.KustoDatabasePrincipalAssignment;

KustoDatabasePrincipalAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_database_principal_assignment.KustoDatabasePrincipalAssignment;

KustoDatabasePrincipalAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_database_principal_assignment.KustoDatabasePrincipalAssignment;

KustoDatabasePrincipalAssignment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_database_principal_assignment.KustoDatabasePrincipalAssignment;

KustoDatabasePrincipalAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KustoDatabasePrincipalAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KustoDatabasePrincipalAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KustoDatabasePrincipalAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KustoDatabasePrincipalAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KustoDatabasePrincipalAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalName">principalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantName">tenantName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference">KustoDatabasePrincipalAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalIdInput">principalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `principalName`<sup>Required</sup> <a name="principalName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalName"></a>

```java
public java.lang.String getPrincipalName();
```

- *Type:* java.lang.String

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantName"></a>

```java
public java.lang.String getTenantName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.timeouts"></a>

```java
public KustoDatabasePrincipalAssignmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference">KustoDatabasePrincipalAssignmentTimeoutsOutputReference</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalIdInput"></a>

```java
public java.lang.String getPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.timeoutsInput"></a>

```java
public IResolvable|KustoDatabasePrincipalAssignmentTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KustoDatabasePrincipalAssignmentConfig <a name="KustoDatabasePrincipalAssignmentConfig" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_database_principal_assignment.KustoDatabasePrincipalAssignmentConfig;

KustoDatabasePrincipalAssignmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .databaseName(java.lang.String)
    .name(java.lang.String)
    .principalId(java.lang.String)
    .principalType(java.lang.String)
    .resourceGroupName(java.lang.String)
    .role(java.lang.String)
    .tenantId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(KustoDatabasePrincipalAssignmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#cluster_name KustoDatabasePrincipalAssignment#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#database_name KustoDatabasePrincipalAssignment#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#name KustoDatabasePrincipalAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.principalId">principalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#principal_id KustoDatabasePrincipalAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#principal_type KustoDatabasePrincipalAssignment#principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#resource_group_name KustoDatabasePrincipalAssignment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#role KustoDatabasePrincipalAssignment#role}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#tenant_id KustoDatabasePrincipalAssignment#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#id KustoDatabasePrincipalAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#cluster_name KustoDatabasePrincipalAssignment#cluster_name}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#database_name KustoDatabasePrincipalAssignment#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#name KustoDatabasePrincipalAssignment#name}.

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#principal_id KustoDatabasePrincipalAssignment#principal_id}.

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#principal_type KustoDatabasePrincipalAssignment#principal_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#resource_group_name KustoDatabasePrincipalAssignment#resource_group_name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#role KustoDatabasePrincipalAssignment#role}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#tenant_id KustoDatabasePrincipalAssignment#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#id KustoDatabasePrincipalAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.timeouts"></a>

```java
public KustoDatabasePrincipalAssignmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#timeouts KustoDatabasePrincipalAssignment#timeouts}

---

### KustoDatabasePrincipalAssignmentTimeouts <a name="KustoDatabasePrincipalAssignmentTimeouts" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_database_principal_assignment.KustoDatabasePrincipalAssignmentTimeouts;

KustoDatabasePrincipalAssignmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#create KustoDatabasePrincipalAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#delete KustoDatabasePrincipalAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#read KustoDatabasePrincipalAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#create KustoDatabasePrincipalAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#delete KustoDatabasePrincipalAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/kusto_database_principal_assignment#read KustoDatabasePrincipalAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoDatabasePrincipalAssignmentTimeoutsOutputReference <a name="KustoDatabasePrincipalAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_database_principal_assignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference;

new KustoDatabasePrincipalAssignmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|KustoDatabasePrincipalAssignmentTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a>

---



