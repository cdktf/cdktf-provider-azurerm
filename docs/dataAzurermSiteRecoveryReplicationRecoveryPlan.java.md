# `dataAzurermSiteRecoveryReplicationRecoveryPlan` Submodule <a name="`dataAzurermSiteRecoveryReplicationRecoveryPlan` Submodule" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSiteRecoveryReplicationRecoveryPlan <a name="DataAzurermSiteRecoveryReplicationRecoveryPlan" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan azurerm_site_recovery_replication_recovery_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlan;

DataAzurermSiteRecoveryReplicationRecoveryPlan.Builder.create(Construct scope, java.lang.String id)
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
    .recoveryVaultId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan#name DataAzurermSiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.recoveryVaultId">recoveryVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan#recovery_vault_id DataAzurermSiteRecoveryReplicationRecoveryPlan#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan#id DataAzurermSiteRecoveryReplicationRecoveryPlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts">DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan#name DataAzurermSiteRecoveryReplicationRecoveryPlan#name}.

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.recoveryVaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan#recovery_vault_id DataAzurermSiteRecoveryReplicationRecoveryPlan#recovery_vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan#id DataAzurermSiteRecoveryReplicationRecoveryPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts">DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan#timeouts DataAzurermSiteRecoveryReplicationRecoveryPlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts">DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermSiteRecoveryReplicationRecoveryPlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlan;

DataAzurermSiteRecoveryReplicationRecoveryPlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlan;

DataAzurermSiteRecoveryReplicationRecoveryPlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlan;

DataAzurermSiteRecoveryReplicationRecoveryPlan.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlan;

DataAzurermSiteRecoveryReplicationRecoveryPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermSiteRecoveryReplicationRecoveryPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermSiteRecoveryReplicationRecoveryPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermSiteRecoveryReplicationRecoveryPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermSiteRecoveryReplicationRecoveryPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermSiteRecoveryReplicationRecoveryPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.azureToAzureSettings">azureToAzureSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList">DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.failoverDeploymentModel">failoverDeploymentModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.recoveryGroup">recoveryGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList">DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.sourceRecoveryFabricId">sourceRecoveryFabricId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.targetRecoveryFabricId">targetRecoveryFabricId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference">DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.recoveryVaultIdInput">recoveryVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts">DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.recoveryVaultId">recoveryVaultId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `azureToAzureSettings`<sup>Required</sup> <a name="azureToAzureSettings" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.azureToAzureSettings"></a>

```java
public DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList getAzureToAzureSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList">DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList</a>

---

##### `failoverDeploymentModel`<sup>Required</sup> <a name="failoverDeploymentModel" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.failoverDeploymentModel"></a>

```java
public java.lang.String getFailoverDeploymentModel();
```

- *Type:* java.lang.String

---

##### `recoveryGroup`<sup>Required</sup> <a name="recoveryGroup" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.recoveryGroup"></a>

```java
public DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList getRecoveryGroup();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList">DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList</a>

---

##### `sourceRecoveryFabricId`<sup>Required</sup> <a name="sourceRecoveryFabricId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.sourceRecoveryFabricId"></a>

```java
public java.lang.String getSourceRecoveryFabricId();
```

- *Type:* java.lang.String

---

##### `targetRecoveryFabricId`<sup>Required</sup> <a name="targetRecoveryFabricId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.targetRecoveryFabricId"></a>

```java
public java.lang.String getTargetRecoveryFabricId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.timeouts"></a>

```java
public DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference">DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recoveryVaultIdInput`<sup>Optional</sup> <a name="recoveryVaultIdInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.recoveryVaultIdInput"></a>

```java
public java.lang.String getRecoveryVaultIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts">DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.recoveryVaultId"></a>

```java
public java.lang.String getRecoveryVaultId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettings <a name="DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettings" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettings;

DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.builder()
    .build();
```


### DataAzurermSiteRecoveryReplicationRecoveryPlanConfig <a name="DataAzurermSiteRecoveryReplicationRecoveryPlanConfig" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig;

DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.builder()
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
    .recoveryVaultId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan#name DataAzurermSiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.recoveryVaultId">recoveryVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan#recovery_vault_id DataAzurermSiteRecoveryReplicationRecoveryPlan#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan#id DataAzurermSiteRecoveryReplicationRecoveryPlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts">DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan#name DataAzurermSiteRecoveryReplicationRecoveryPlan#name}.

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.recoveryVaultId"></a>

```java
public java.lang.String getRecoveryVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan#recovery_vault_id DataAzurermSiteRecoveryReplicationRecoveryPlan#recovery_vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan#id DataAzurermSiteRecoveryReplicationRecoveryPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanConfig.property.timeouts"></a>

```java
public DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts">DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan#timeouts DataAzurermSiteRecoveryReplicationRecoveryPlan#timeouts}

---

### DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroup <a name="DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroup" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroup;

DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroup.builder()
    .build();
```


### DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction <a name="DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction;

DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.builder()
    .build();
```


### DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction <a name="DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction;

DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.builder()
    .build();
```


### DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts <a name="DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts;

DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan#read DataAzurermSiteRecoveryReplicationRecoveryPlan#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/site_recovery_replication_recovery_plan#read DataAzurermSiteRecoveryReplicationRecoveryPlan#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList <a name="DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList;

new DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.get"></a>

```java
public DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference <a name="DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference;

new DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryEdgeZone">primaryEdgeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryZone">primaryZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryEdgeZone">recoveryEdgeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryZone">recoveryZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettings">DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primaryEdgeZone`<sup>Required</sup> <a name="primaryEdgeZone" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryEdgeZone"></a>

```java
public java.lang.String getPrimaryEdgeZone();
```

- *Type:* java.lang.String

---

##### `primaryZone`<sup>Required</sup> <a name="primaryZone" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryZone"></a>

```java
public java.lang.String getPrimaryZone();
```

- *Type:* java.lang.String

---

##### `recoveryEdgeZone`<sup>Required</sup> <a name="recoveryEdgeZone" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryEdgeZone"></a>

```java
public java.lang.String getRecoveryEdgeZone();
```

- *Type:* java.lang.String

---

##### `recoveryZone`<sup>Required</sup> <a name="recoveryZone" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryZone"></a>

```java
public java.lang.String getRecoveryZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.internalValue"></a>

```java
public DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettings">DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettings</a>

---


### DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList <a name="DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList;

new DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.get"></a>

```java
public DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference <a name="DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference;

new DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.postAction">postAction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList">DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.preAction">preAction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList">DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.replicatedProtectedItems">replicatedProtectedItems</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroup">DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `postAction`<sup>Required</sup> <a name="postAction" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.postAction"></a>

```java
public DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList getPostAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList">DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList</a>

---

##### `preAction`<sup>Required</sup> <a name="preAction" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.preAction"></a>

```java
public DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList getPreAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList">DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList</a>

---

##### `replicatedProtectedItems`<sup>Required</sup> <a name="replicatedProtectedItems" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.replicatedProtectedItems"></a>

```java
public java.util.List<java.lang.String> getReplicatedProtectedItems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.internalValue"></a>

```java
public DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroup">DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>

---


### DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList <a name="DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList;

new DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.get"></a>

```java
public DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList <a name="DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList;

new DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.get"></a>

```java
public DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference <a name="DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference;

new DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fabricLocation">fabricLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverDirections">failOverDirections</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverTypes">failOverTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.manualActionInstruction">manualActionInstruction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.runbookId">runbookId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.scriptPath">scriptPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fabricLocation`<sup>Required</sup> <a name="fabricLocation" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fabricLocation"></a>

```java
public java.lang.String getFabricLocation();
```

- *Type:* java.lang.String

---

##### `failOverDirections`<sup>Required</sup> <a name="failOverDirections" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverDirections"></a>

```java
public java.util.List<java.lang.String> getFailOverDirections();
```

- *Type:* java.util.List<java.lang.String>

---

##### `failOverTypes`<sup>Required</sup> <a name="failOverTypes" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverTypes"></a>

```java
public java.util.List<java.lang.String> getFailOverTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `manualActionInstruction`<sup>Required</sup> <a name="manualActionInstruction" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.manualActionInstruction"></a>

```java
public java.lang.String getManualActionInstruction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `runbookId`<sup>Required</sup> <a name="runbookId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.runbookId"></a>

```java
public java.lang.String getRunbookId();
```

- *Type:* java.lang.String

---

##### `scriptPath`<sup>Required</sup> <a name="scriptPath" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.scriptPath"></a>

```java
public java.lang.String getScriptPath();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.internalValue"></a>

```java
public DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a>

---


### DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList <a name="DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList;

new DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.get"></a>

```java
public DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList <a name="DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList;

new DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.get"></a>

```java
public DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference <a name="DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference;

new DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fabricLocation">fabricLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverDirections">failOverDirections</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverTypes">failOverTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.manualActionInstruction">manualActionInstruction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.runbookId">runbookId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.scriptPath">scriptPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fabricLocation`<sup>Required</sup> <a name="fabricLocation" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fabricLocation"></a>

```java
public java.lang.String getFabricLocation();
```

- *Type:* java.lang.String

---

##### `failOverDirections`<sup>Required</sup> <a name="failOverDirections" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverDirections"></a>

```java
public java.util.List<java.lang.String> getFailOverDirections();
```

- *Type:* java.util.List<java.lang.String>

---

##### `failOverTypes`<sup>Required</sup> <a name="failOverTypes" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverTypes"></a>

```java
public java.util.List<java.lang.String> getFailOverTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `manualActionInstruction`<sup>Required</sup> <a name="manualActionInstruction" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.manualActionInstruction"></a>

```java
public java.lang.String getManualActionInstruction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `runbookId`<sup>Required</sup> <a name="runbookId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.runbookId"></a>

```java
public java.lang.String getRunbookId();
```

- *Type:* java.lang.String

---

##### `scriptPath`<sup>Required</sup> <a name="scriptPath" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.scriptPath"></a>

```java
public java.lang.String getScriptPath();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.internalValue"></a>

```java
public DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a>

---


### DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference <a name="DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_replication_recovery_plan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference;

new DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts">DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationRecoveryPlan.DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts">DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts</a>

---



