# `kustoClusterPrincipalAssignment` Submodule <a name="`kustoClusterPrincipalAssignment` Submodule" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoClusterPrincipalAssignment <a name="KustoClusterPrincipalAssignment" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment azurerm_kusto_cluster_principal_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_cluster_principal_assignment.KustoClusterPrincipalAssignment;

KustoClusterPrincipalAssignment.Builder.create(Construct scope, java.lang.String id)
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
    .clusterName(java.lang.String)
    .name(java.lang.String)
    .principalId(java.lang.String)
    .principalType(java.lang.String)
    .resourceGroupName(java.lang.String)
    .role(java.lang.String)
    .tenantId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(KustoClusterPrincipalAssignmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#cluster_name KustoClusterPrincipalAssignment#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#name KustoClusterPrincipalAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.principalId">principalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#principal_id KustoClusterPrincipalAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#principal_type KustoClusterPrincipalAssignment#principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#resource_group_name KustoClusterPrincipalAssignment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#role KustoClusterPrincipalAssignment#role}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#tenant_id KustoClusterPrincipalAssignment#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#id KustoClusterPrincipalAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeouts">KustoClusterPrincipalAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#cluster_name KustoClusterPrincipalAssignment#cluster_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#name KustoClusterPrincipalAssignment#name}.

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.principalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#principal_id KustoClusterPrincipalAssignment#principal_id}.

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.principalType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#principal_type KustoClusterPrincipalAssignment#principal_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#resource_group_name KustoClusterPrincipalAssignment#resource_group_name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#role KustoClusterPrincipalAssignment#role}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#tenant_id KustoClusterPrincipalAssignment#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#id KustoClusterPrincipalAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeouts">KustoClusterPrincipalAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#timeouts KustoClusterPrincipalAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.putTimeouts"></a>

```java
public void putTimeouts(KustoClusterPrincipalAssignmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeouts">KustoClusterPrincipalAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KustoClusterPrincipalAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_cluster_principal_assignment.KustoClusterPrincipalAssignment;

KustoClusterPrincipalAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_cluster_principal_assignment.KustoClusterPrincipalAssignment;

KustoClusterPrincipalAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_cluster_principal_assignment.KustoClusterPrincipalAssignment;

KustoClusterPrincipalAssignment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_cluster_principal_assignment.KustoClusterPrincipalAssignment;

KustoClusterPrincipalAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KustoClusterPrincipalAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KustoClusterPrincipalAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KustoClusterPrincipalAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KustoClusterPrincipalAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KustoClusterPrincipalAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.principalName">principalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.tenantName">tenantName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference">KustoClusterPrincipalAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.principalIdInput">principalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeouts">KustoClusterPrincipalAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `principalName`<sup>Required</sup> <a name="principalName" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.principalName"></a>

```java
public java.lang.String getPrincipalName();
```

- *Type:* java.lang.String

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.tenantName"></a>

```java
public java.lang.String getTenantName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.timeouts"></a>

```java
public KustoClusterPrincipalAssignmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference">KustoClusterPrincipalAssignmentTimeoutsOutputReference</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.principalIdInput"></a>

```java
public java.lang.String getPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeouts">KustoClusterPrincipalAssignmentTimeouts</a>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KustoClusterPrincipalAssignmentConfig <a name="KustoClusterPrincipalAssignmentConfig" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_cluster_principal_assignment.KustoClusterPrincipalAssignmentConfig;

KustoClusterPrincipalAssignmentConfig.builder()
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
    .clusterName(java.lang.String)
    .name(java.lang.String)
    .principalId(java.lang.String)
    .principalType(java.lang.String)
    .resourceGroupName(java.lang.String)
    .role(java.lang.String)
    .tenantId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(KustoClusterPrincipalAssignmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#cluster_name KustoClusterPrincipalAssignment#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#name KustoClusterPrincipalAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.principalId">principalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#principal_id KustoClusterPrincipalAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#principal_type KustoClusterPrincipalAssignment#principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#resource_group_name KustoClusterPrincipalAssignment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#role KustoClusterPrincipalAssignment#role}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#tenant_id KustoClusterPrincipalAssignment#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#id KustoClusterPrincipalAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeouts">KustoClusterPrincipalAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#cluster_name KustoClusterPrincipalAssignment#cluster_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#name KustoClusterPrincipalAssignment#name}.

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#principal_id KustoClusterPrincipalAssignment#principal_id}.

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#principal_type KustoClusterPrincipalAssignment#principal_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#resource_group_name KustoClusterPrincipalAssignment#resource_group_name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#role KustoClusterPrincipalAssignment#role}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#tenant_id KustoClusterPrincipalAssignment#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#id KustoClusterPrincipalAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentConfig.property.timeouts"></a>

```java
public KustoClusterPrincipalAssignmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeouts">KustoClusterPrincipalAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#timeouts KustoClusterPrincipalAssignment#timeouts}

---

### KustoClusterPrincipalAssignmentTimeouts <a name="KustoClusterPrincipalAssignmentTimeouts" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_cluster_principal_assignment.KustoClusterPrincipalAssignmentTimeouts;

KustoClusterPrincipalAssignmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#create KustoClusterPrincipalAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#delete KustoClusterPrincipalAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#read KustoClusterPrincipalAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#create KustoClusterPrincipalAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#delete KustoClusterPrincipalAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kusto_cluster_principal_assignment#read KustoClusterPrincipalAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoClusterPrincipalAssignmentTimeoutsOutputReference <a name="KustoClusterPrincipalAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_cluster_principal_assignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference;

new KustoClusterPrincipalAssignmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeouts">KustoClusterPrincipalAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kustoClusterPrincipalAssignment.KustoClusterPrincipalAssignmentTimeouts">KustoClusterPrincipalAssignmentTimeouts</a>

---



