# `azurerm_site_recovery_replication_recovery_plan`

Refer to the Terraform Registory for docs: [`azurerm_site_recovery_replication_recovery_plan`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan).

# `siteRecoveryReplicationRecoveryPlan` Submodule <a name="`siteRecoveryReplicationRecoveryPlan` Submodule" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryReplicationRecoveryPlan <a name="SiteRecoveryReplicationRecoveryPlan" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan azurerm_site_recovery_replication_recovery_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_replication_recovery_plan.SiteRecoveryReplicationRecoveryPlan;

SiteRecoveryReplicationRecoveryPlan.Builder.create(Construct scope, java.lang.String id)
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
    .sourceRecoveryFabricId(java.lang.String)
    .targetRecoveryFabricId(java.lang.String)
//  .id(java.lang.String)
//  .recoveryGroup(IResolvable)
//  .recoveryGroup(java.util.List<SiteRecoveryReplicationRecoveryPlanRecoveryGroup>)
//  .timeouts(SiteRecoveryReplicationRecoveryPlanTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.recoveryVaultId">recoveryVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#recovery_vault_id SiteRecoveryReplicationRecoveryPlan#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.sourceRecoveryFabricId">sourceRecoveryFabricId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#source_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#source_recovery_fabric_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.targetRecoveryFabricId">targetRecoveryFabricId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#target_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#target_recovery_fabric_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#id SiteRecoveryReplicationRecoveryPlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.recoveryGroup">recoveryGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>></code> | recovery_group block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}.

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.recoveryVaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#recovery_vault_id SiteRecoveryReplicationRecoveryPlan#recovery_vault_id}.

---

##### `sourceRecoveryFabricId`<sup>Required</sup> <a name="sourceRecoveryFabricId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.sourceRecoveryFabricId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#source_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#source_recovery_fabric_id}.

---

##### `targetRecoveryFabricId`<sup>Required</sup> <a name="targetRecoveryFabricId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.targetRecoveryFabricId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#target_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#target_recovery_fabric_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#id SiteRecoveryReplicationRecoveryPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `recoveryGroup`<sup>Optional</sup> <a name="recoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.recoveryGroup"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>>

recovery_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#recovery_group SiteRecoveryReplicationRecoveryPlan#recovery_group}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#timeouts SiteRecoveryReplicationRecoveryPlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putRecoveryGroup">putRecoveryGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetRecoveryGroup">resetRecoveryGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRecoveryGroup` <a name="putRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putRecoveryGroup"></a>

```java
public void putRecoveryGroup(IResolvable OR java.util.List<SiteRecoveryReplicationRecoveryPlanRecoveryGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putRecoveryGroup.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putTimeouts"></a>

```java
public void putTimeouts(SiteRecoveryReplicationRecoveryPlanTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetId"></a>

```java
public void resetId()
```

##### `resetRecoveryGroup` <a name="resetRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetRecoveryGroup"></a>

```java
public void resetRecoveryGroup()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_replication_recovery_plan.SiteRecoveryReplicationRecoveryPlan;

SiteRecoveryReplicationRecoveryPlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_replication_recovery_plan.SiteRecoveryReplicationRecoveryPlan;

SiteRecoveryReplicationRecoveryPlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_replication_recovery_plan.SiteRecoveryReplicationRecoveryPlan;

SiteRecoveryReplicationRecoveryPlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryGroup">recoveryGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference">SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryGroupInput">recoveryGroupInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryVaultIdInput">recoveryVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.sourceRecoveryFabricIdInput">sourceRecoveryFabricIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.targetRecoveryFabricIdInput">targetRecoveryFabricIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryVaultId">recoveryVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.sourceRecoveryFabricId">sourceRecoveryFabricId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.targetRecoveryFabricId">targetRecoveryFabricId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `recoveryGroup`<sup>Required</sup> <a name="recoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryGroup"></a>

```java
public SiteRecoveryReplicationRecoveryPlanRecoveryGroupList getRecoveryGroup();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.timeouts"></a>

```java
public SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference">SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recoveryGroupInput`<sup>Optional</sup> <a name="recoveryGroupInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryGroupInput"></a>

```java
public java.lang.Object getRecoveryGroupInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>>

---

##### `recoveryVaultIdInput`<sup>Optional</sup> <a name="recoveryVaultIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryVaultIdInput"></a>

```java
public java.lang.String getRecoveryVaultIdInput();
```

- *Type:* java.lang.String

---

##### `sourceRecoveryFabricIdInput`<sup>Optional</sup> <a name="sourceRecoveryFabricIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.sourceRecoveryFabricIdInput"></a>

```java
public java.lang.String getSourceRecoveryFabricIdInput();
```

- *Type:* java.lang.String

---

##### `targetRecoveryFabricIdInput`<sup>Optional</sup> <a name="targetRecoveryFabricIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.targetRecoveryFabricIdInput"></a>

```java
public java.lang.String getTargetRecoveryFabricIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryVaultId"></a>

```java
public java.lang.String getRecoveryVaultId();
```

- *Type:* java.lang.String

---

##### `sourceRecoveryFabricId`<sup>Required</sup> <a name="sourceRecoveryFabricId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.sourceRecoveryFabricId"></a>

```java
public java.lang.String getSourceRecoveryFabricId();
```

- *Type:* java.lang.String

---

##### `targetRecoveryFabricId`<sup>Required</sup> <a name="targetRecoveryFabricId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.targetRecoveryFabricId"></a>

```java
public java.lang.String getTargetRecoveryFabricId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryReplicationRecoveryPlanConfig <a name="SiteRecoveryReplicationRecoveryPlanConfig" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_replication_recovery_plan.SiteRecoveryReplicationRecoveryPlanConfig;

SiteRecoveryReplicationRecoveryPlanConfig.builder()
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
    .sourceRecoveryFabricId(java.lang.String)
    .targetRecoveryFabricId(java.lang.String)
//  .id(java.lang.String)
//  .recoveryGroup(IResolvable)
//  .recoveryGroup(java.util.List<SiteRecoveryReplicationRecoveryPlanRecoveryGroup>)
//  .timeouts(SiteRecoveryReplicationRecoveryPlanTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.recoveryVaultId">recoveryVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#recovery_vault_id SiteRecoveryReplicationRecoveryPlan#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.sourceRecoveryFabricId">sourceRecoveryFabricId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#source_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#source_recovery_fabric_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.targetRecoveryFabricId">targetRecoveryFabricId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#target_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#target_recovery_fabric_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#id SiteRecoveryReplicationRecoveryPlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.recoveryGroup">recoveryGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>></code> | recovery_group block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}.

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.recoveryVaultId"></a>

```java
public java.lang.String getRecoveryVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#recovery_vault_id SiteRecoveryReplicationRecoveryPlan#recovery_vault_id}.

---

##### `sourceRecoveryFabricId`<sup>Required</sup> <a name="sourceRecoveryFabricId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.sourceRecoveryFabricId"></a>

```java
public java.lang.String getSourceRecoveryFabricId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#source_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#source_recovery_fabric_id}.

---

##### `targetRecoveryFabricId`<sup>Required</sup> <a name="targetRecoveryFabricId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.targetRecoveryFabricId"></a>

```java
public java.lang.String getTargetRecoveryFabricId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#target_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#target_recovery_fabric_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#id SiteRecoveryReplicationRecoveryPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `recoveryGroup`<sup>Optional</sup> <a name="recoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.recoveryGroup"></a>

```java
public java.lang.Object getRecoveryGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>>

recovery_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#recovery_group SiteRecoveryReplicationRecoveryPlan#recovery_group}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.timeouts"></a>

```java
public SiteRecoveryReplicationRecoveryPlanTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#timeouts SiteRecoveryReplicationRecoveryPlan#timeouts}

---

### SiteRecoveryReplicationRecoveryPlanRecoveryGroup <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_replication_recovery_plan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup;

SiteRecoveryReplicationRecoveryPlanRecoveryGroup.builder()
    .type(java.lang.String)
//  .postAction(IResolvable)
//  .postAction(java.util.List<SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction>)
//  .preAction(IResolvable)
//  .preAction(java.util.List<SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction>)
//  .replicatedProtectedItems(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.postAction">postAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a>></code> | post_action block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.preAction">preAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a>></code> | pre_action block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.replicatedProtectedItems">replicatedProtectedItems</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#replicated_protected_items SiteRecoveryReplicationRecoveryPlan#replicated_protected_items}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}.

---

##### `postAction`<sup>Optional</sup> <a name="postAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.postAction"></a>

```java
public java.lang.Object getPostAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a>>

post_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#post_action SiteRecoveryReplicationRecoveryPlan#post_action}

---

##### `preAction`<sup>Optional</sup> <a name="preAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.preAction"></a>

```java
public java.lang.Object getPreAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a>>

pre_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#pre_action SiteRecoveryReplicationRecoveryPlan#pre_action}

---

##### `replicatedProtectedItems`<sup>Optional</sup> <a name="replicatedProtectedItems" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.replicatedProtectedItems"></a>

```java
public java.util.List<java.lang.String> getReplicatedProtectedItems();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#replicated_protected_items SiteRecoveryReplicationRecoveryPlan#replicated_protected_items}.

---

### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_replication_recovery_plan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction;

SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.builder()
    .failOverDirections(java.util.List<java.lang.String>)
    .failOverTypes(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .fabricLocation(java.lang.String)
//  .manualActionInstruction(java.lang.String)
//  .runbookId(java.lang.String)
//  .scriptPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.failOverDirections">failOverDirections</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.failOverTypes">failOverTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.fabricLocation">fabricLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.manualActionInstruction">manualActionInstruction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.runbookId">runbookId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.scriptPath">scriptPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}. |

---

##### `failOverDirections`<sup>Required</sup> <a name="failOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.failOverDirections"></a>

```java
public java.util.List<java.lang.String> getFailOverDirections();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}.

---

##### `failOverTypes`<sup>Required</sup> <a name="failOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.failOverTypes"></a>

```java
public java.util.List<java.lang.String> getFailOverTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}.

---

##### `fabricLocation`<sup>Optional</sup> <a name="fabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.fabricLocation"></a>

```java
public java.lang.String getFabricLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}.

---

##### `manualActionInstruction`<sup>Optional</sup> <a name="manualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.manualActionInstruction"></a>

```java
public java.lang.String getManualActionInstruction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}.

---

##### `runbookId`<sup>Optional</sup> <a name="runbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.runbookId"></a>

```java
public java.lang.String getRunbookId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}.

---

##### `scriptPath`<sup>Optional</sup> <a name="scriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.scriptPath"></a>

```java
public java.lang.String getScriptPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}.

---

### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_replication_recovery_plan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction;

SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.builder()
    .failOverDirections(java.util.List<java.lang.String>)
    .failOverTypes(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .fabricLocation(java.lang.String)
//  .manualActionInstruction(java.lang.String)
//  .runbookId(java.lang.String)
//  .scriptPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.failOverDirections">failOverDirections</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.failOverTypes">failOverTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.fabricLocation">fabricLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.manualActionInstruction">manualActionInstruction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.runbookId">runbookId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.scriptPath">scriptPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}. |

---

##### `failOverDirections`<sup>Required</sup> <a name="failOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.failOverDirections"></a>

```java
public java.util.List<java.lang.String> getFailOverDirections();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}.

---

##### `failOverTypes`<sup>Required</sup> <a name="failOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.failOverTypes"></a>

```java
public java.util.List<java.lang.String> getFailOverTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}.

---

##### `fabricLocation`<sup>Optional</sup> <a name="fabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.fabricLocation"></a>

```java
public java.lang.String getFabricLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}.

---

##### `manualActionInstruction`<sup>Optional</sup> <a name="manualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.manualActionInstruction"></a>

```java
public java.lang.String getManualActionInstruction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}.

---

##### `runbookId`<sup>Optional</sup> <a name="runbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.runbookId"></a>

```java
public java.lang.String getRunbookId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}.

---

##### `scriptPath`<sup>Optional</sup> <a name="scriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.scriptPath"></a>

```java
public java.lang.String getScriptPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}.

---

### SiteRecoveryReplicationRecoveryPlanTimeouts <a name="SiteRecoveryReplicationRecoveryPlanTimeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_replication_recovery_plan.SiteRecoveryReplicationRecoveryPlanTimeouts;

SiteRecoveryReplicationRecoveryPlanTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#create SiteRecoveryReplicationRecoveryPlan#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#delete SiteRecoveryReplicationRecoveryPlan#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#read SiteRecoveryReplicationRecoveryPlan#read}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#update SiteRecoveryReplicationRecoveryPlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#create SiteRecoveryReplicationRecoveryPlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#delete SiteRecoveryReplicationRecoveryPlan#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#read SiteRecoveryReplicationRecoveryPlan#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/site_recovery_replication_recovery_plan#update SiteRecoveryReplicationRecoveryPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryReplicationRecoveryPlanRecoveryGroupList <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupList" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_replication_recovery_plan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList;

new SiteRecoveryReplicationRecoveryPlanRecoveryGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.get"></a>

```java
public SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>>

---


### SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_replication_recovery_plan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference;

new SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPostAction">putPostAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPreAction">putPreAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetPostAction">resetPostAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetPreAction">resetPreAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetReplicatedProtectedItems">resetReplicatedProtectedItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPostAction` <a name="putPostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPostAction"></a>

```java
public void putPostAction(IResolvable OR java.util.List<SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPostAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a>>

---

##### `putPreAction` <a name="putPreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPreAction"></a>

```java
public void putPreAction(IResolvable OR java.util.List<SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPreAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a>>

---

##### `resetPostAction` <a name="resetPostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetPostAction"></a>

```java
public void resetPostAction()
```

##### `resetPreAction` <a name="resetPreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetPreAction"></a>

```java
public void resetPreAction()
```

##### `resetReplicatedProtectedItems` <a name="resetReplicatedProtectedItems" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetReplicatedProtectedItems"></a>

```java
public void resetReplicatedProtectedItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.postAction">postAction</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.preAction">preAction</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.postActionInput">postActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.preActionInput">preActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.replicatedProtectedItemsInput">replicatedProtectedItemsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.replicatedProtectedItems">replicatedProtectedItems</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `postAction`<sup>Required</sup> <a name="postAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.postAction"></a>

```java
public SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList getPostAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList</a>

---

##### `preAction`<sup>Required</sup> <a name="preAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.preAction"></a>

```java
public SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList getPreAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList</a>

---

##### `postActionInput`<sup>Optional</sup> <a name="postActionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.postActionInput"></a>

```java
public java.lang.Object getPostActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a>>

---

##### `preActionInput`<sup>Optional</sup> <a name="preActionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.preActionInput"></a>

```java
public java.lang.Object getPreActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a>>

---

##### `replicatedProtectedItemsInput`<sup>Optional</sup> <a name="replicatedProtectedItemsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.replicatedProtectedItemsInput"></a>

```java
public java.util.List<java.lang.String> getReplicatedProtectedItemsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `replicatedProtectedItems`<sup>Required</sup> <a name="replicatedProtectedItems" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.replicatedProtectedItems"></a>

```java
public java.util.List<java.lang.String> getReplicatedProtectedItems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a> OR com.hashicorp.cdktf.IResolvable

---


### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_replication_recovery_plan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList;

new SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.get"></a>

```java
public SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a>>

---


### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_replication_recovery_plan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference;

new SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetFabricLocation">resetFabricLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetManualActionInstruction">resetManualActionInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetRunbookId">resetRunbookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetScriptPath">resetScriptPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFabricLocation` <a name="resetFabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetFabricLocation"></a>

```java
public void resetFabricLocation()
```

##### `resetManualActionInstruction` <a name="resetManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetManualActionInstruction"></a>

```java
public void resetManualActionInstruction()
```

##### `resetRunbookId` <a name="resetRunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetRunbookId"></a>

```java
public void resetRunbookId()
```

##### `resetScriptPath` <a name="resetScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetScriptPath"></a>

```java
public void resetScriptPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fabricLocationInput">fabricLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverDirectionsInput">failOverDirectionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverTypesInput">failOverTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.manualActionInstructionInput">manualActionInstructionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.runbookIdInput">runbookIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.scriptPathInput">scriptPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fabricLocation">fabricLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverDirections">failOverDirections</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverTypes">failOverTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.manualActionInstruction">manualActionInstruction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.runbookId">runbookId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.scriptPath">scriptPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fabricLocationInput`<sup>Optional</sup> <a name="fabricLocationInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fabricLocationInput"></a>

```java
public java.lang.String getFabricLocationInput();
```

- *Type:* java.lang.String

---

##### `failOverDirectionsInput`<sup>Optional</sup> <a name="failOverDirectionsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverDirectionsInput"></a>

```java
public java.util.List<java.lang.String> getFailOverDirectionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `failOverTypesInput`<sup>Optional</sup> <a name="failOverTypesInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverTypesInput"></a>

```java
public java.util.List<java.lang.String> getFailOverTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `manualActionInstructionInput`<sup>Optional</sup> <a name="manualActionInstructionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.manualActionInstructionInput"></a>

```java
public java.lang.String getManualActionInstructionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `runbookIdInput`<sup>Optional</sup> <a name="runbookIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.runbookIdInput"></a>

```java
public java.lang.String getRunbookIdInput();
```

- *Type:* java.lang.String

---

##### `scriptPathInput`<sup>Optional</sup> <a name="scriptPathInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.scriptPathInput"></a>

```java
public java.lang.String getScriptPathInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `fabricLocation`<sup>Required</sup> <a name="fabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fabricLocation"></a>

```java
public java.lang.String getFabricLocation();
```

- *Type:* java.lang.String

---

##### `failOverDirections`<sup>Required</sup> <a name="failOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverDirections"></a>

```java
public java.util.List<java.lang.String> getFailOverDirections();
```

- *Type:* java.util.List<java.lang.String>

---

##### `failOverTypes`<sup>Required</sup> <a name="failOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverTypes"></a>

```java
public java.util.List<java.lang.String> getFailOverTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `manualActionInstruction`<sup>Required</sup> <a name="manualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.manualActionInstruction"></a>

```java
public java.lang.String getManualActionInstruction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `runbookId`<sup>Required</sup> <a name="runbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.runbookId"></a>

```java
public java.lang.String getRunbookId();
```

- *Type:* java.lang.String

---

##### `scriptPath`<sup>Required</sup> <a name="scriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.scriptPath"></a>

```java
public java.lang.String getScriptPath();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a> OR com.hashicorp.cdktf.IResolvable

---


### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_replication_recovery_plan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList;

new SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.get"></a>

```java
public SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a>>

---


### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_replication_recovery_plan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference;

new SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetFabricLocation">resetFabricLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetManualActionInstruction">resetManualActionInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetRunbookId">resetRunbookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetScriptPath">resetScriptPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFabricLocation` <a name="resetFabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetFabricLocation"></a>

```java
public void resetFabricLocation()
```

##### `resetManualActionInstruction` <a name="resetManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetManualActionInstruction"></a>

```java
public void resetManualActionInstruction()
```

##### `resetRunbookId` <a name="resetRunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetRunbookId"></a>

```java
public void resetRunbookId()
```

##### `resetScriptPath` <a name="resetScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetScriptPath"></a>

```java
public void resetScriptPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fabricLocationInput">fabricLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverDirectionsInput">failOverDirectionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverTypesInput">failOverTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.manualActionInstructionInput">manualActionInstructionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.runbookIdInput">runbookIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.scriptPathInput">scriptPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fabricLocation">fabricLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverDirections">failOverDirections</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverTypes">failOverTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.manualActionInstruction">manualActionInstruction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.runbookId">runbookId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.scriptPath">scriptPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fabricLocationInput`<sup>Optional</sup> <a name="fabricLocationInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fabricLocationInput"></a>

```java
public java.lang.String getFabricLocationInput();
```

- *Type:* java.lang.String

---

##### `failOverDirectionsInput`<sup>Optional</sup> <a name="failOverDirectionsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverDirectionsInput"></a>

```java
public java.util.List<java.lang.String> getFailOverDirectionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `failOverTypesInput`<sup>Optional</sup> <a name="failOverTypesInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverTypesInput"></a>

```java
public java.util.List<java.lang.String> getFailOverTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `manualActionInstructionInput`<sup>Optional</sup> <a name="manualActionInstructionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.manualActionInstructionInput"></a>

```java
public java.lang.String getManualActionInstructionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `runbookIdInput`<sup>Optional</sup> <a name="runbookIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.runbookIdInput"></a>

```java
public java.lang.String getRunbookIdInput();
```

- *Type:* java.lang.String

---

##### `scriptPathInput`<sup>Optional</sup> <a name="scriptPathInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.scriptPathInput"></a>

```java
public java.lang.String getScriptPathInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `fabricLocation`<sup>Required</sup> <a name="fabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fabricLocation"></a>

```java
public java.lang.String getFabricLocation();
```

- *Type:* java.lang.String

---

##### `failOverDirections`<sup>Required</sup> <a name="failOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverDirections"></a>

```java
public java.util.List<java.lang.String> getFailOverDirections();
```

- *Type:* java.util.List<java.lang.String>

---

##### `failOverTypes`<sup>Required</sup> <a name="failOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverTypes"></a>

```java
public java.util.List<java.lang.String> getFailOverTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `manualActionInstruction`<sup>Required</sup> <a name="manualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.manualActionInstruction"></a>

```java
public java.lang.String getManualActionInstruction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `runbookId`<sup>Required</sup> <a name="runbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.runbookId"></a>

```java
public java.lang.String getRunbookId();
```

- *Type:* java.lang.String

---

##### `scriptPath`<sup>Required</sup> <a name="scriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.scriptPath"></a>

```java
public java.lang.String getScriptPath();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a> OR com.hashicorp.cdktf.IResolvable

---


### SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference <a name="SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_replication_recovery_plan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference;

new SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



