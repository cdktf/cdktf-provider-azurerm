# `azurerm_site_recovery_hyperv_replication_policy`

Refer to the Terraform Registory for docs: [`azurerm_site_recovery_hyperv_replication_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy).

# `siteRecoveryHypervReplicationPolicy` Submodule <a name="`siteRecoveryHypervReplicationPolicy` Submodule" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryHypervReplicationPolicy <a name="SiteRecoveryHypervReplicationPolicy" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy azurerm_site_recovery_hyperv_replication_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_hyperv_replication_policy.SiteRecoveryHypervReplicationPolicy;

SiteRecoveryHypervReplicationPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .applicationConsistentSnapshotFrequencyInHours(java.lang.Number)
    .name(java.lang.String)
    .recoveryPointRetentionInHours(java.lang.Number)
    .recoveryVaultId(java.lang.String)
    .replicationIntervalInSeconds(java.lang.Number)
//  .id(java.lang.String)
//  .timeouts(SiteRecoveryHypervReplicationPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.applicationConsistentSnapshotFrequencyInHours">applicationConsistentSnapshotFrequencyInHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#application_consistent_snapshot_frequency_in_hours SiteRecoveryHypervReplicationPolicy#application_consistent_snapshot_frequency_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#name SiteRecoveryHypervReplicationPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.recoveryPointRetentionInHours">recoveryPointRetentionInHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_point_retention_in_hours SiteRecoveryHypervReplicationPolicy#recovery_point_retention_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.recoveryVaultId">recoveryVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_vault_id SiteRecoveryHypervReplicationPolicy#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.replicationIntervalInSeconds">replicationIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#replication_interval_in_seconds SiteRecoveryHypervReplicationPolicy#replication_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#id SiteRecoveryHypervReplicationPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationConsistentSnapshotFrequencyInHours`<sup>Required</sup> <a name="applicationConsistentSnapshotFrequencyInHours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.applicationConsistentSnapshotFrequencyInHours"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#application_consistent_snapshot_frequency_in_hours SiteRecoveryHypervReplicationPolicy#application_consistent_snapshot_frequency_in_hours}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#name SiteRecoveryHypervReplicationPolicy#name}.

---

##### `recoveryPointRetentionInHours`<sup>Required</sup> <a name="recoveryPointRetentionInHours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.recoveryPointRetentionInHours"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_point_retention_in_hours SiteRecoveryHypervReplicationPolicy#recovery_point_retention_in_hours}.

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.recoveryVaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_vault_id SiteRecoveryHypervReplicationPolicy#recovery_vault_id}.

---

##### `replicationIntervalInSeconds`<sup>Required</sup> <a name="replicationIntervalInSeconds" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.replicationIntervalInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#replication_interval_in_seconds SiteRecoveryHypervReplicationPolicy#replication_interval_in_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#id SiteRecoveryHypervReplicationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#timeouts SiteRecoveryHypervReplicationPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.putTimeouts"></a>

```java
public void putTimeouts(SiteRecoveryHypervReplicationPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_hyperv_replication_policy.SiteRecoveryHypervReplicationPolicy;

SiteRecoveryHypervReplicationPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_hyperv_replication_policy.SiteRecoveryHypervReplicationPolicy;

SiteRecoveryHypervReplicationPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_hyperv_replication_policy.SiteRecoveryHypervReplicationPolicy;

SiteRecoveryHypervReplicationPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference">SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.applicationConsistentSnapshotFrequencyInHoursInput">applicationConsistentSnapshotFrequencyInHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryPointRetentionInHoursInput">recoveryPointRetentionInHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryVaultIdInput">recoveryVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.replicationIntervalInSecondsInput">replicationIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.applicationConsistentSnapshotFrequencyInHours">applicationConsistentSnapshotFrequencyInHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryPointRetentionInHours">recoveryPointRetentionInHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryVaultId">recoveryVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.replicationIntervalInSeconds">replicationIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.timeouts"></a>

```java
public SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference">SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference</a>

---

##### `applicationConsistentSnapshotFrequencyInHoursInput`<sup>Optional</sup> <a name="applicationConsistentSnapshotFrequencyInHoursInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.applicationConsistentSnapshotFrequencyInHoursInput"></a>

```java
public java.lang.Number getApplicationConsistentSnapshotFrequencyInHoursInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recoveryPointRetentionInHoursInput`<sup>Optional</sup> <a name="recoveryPointRetentionInHoursInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryPointRetentionInHoursInput"></a>

```java
public java.lang.Number getRecoveryPointRetentionInHoursInput();
```

- *Type:* java.lang.Number

---

##### `recoveryVaultIdInput`<sup>Optional</sup> <a name="recoveryVaultIdInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryVaultIdInput"></a>

```java
public java.lang.String getRecoveryVaultIdInput();
```

- *Type:* java.lang.String

---

##### `replicationIntervalInSecondsInput`<sup>Optional</sup> <a name="replicationIntervalInSecondsInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.replicationIntervalInSecondsInput"></a>

```java
public java.lang.Number getReplicationIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a>

---

##### `applicationConsistentSnapshotFrequencyInHours`<sup>Required</sup> <a name="applicationConsistentSnapshotFrequencyInHours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.applicationConsistentSnapshotFrequencyInHours"></a>

```java
public java.lang.Number getApplicationConsistentSnapshotFrequencyInHours();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recoveryPointRetentionInHours`<sup>Required</sup> <a name="recoveryPointRetentionInHours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryPointRetentionInHours"></a>

```java
public java.lang.Number getRecoveryPointRetentionInHours();
```

- *Type:* java.lang.Number

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryVaultId"></a>

```java
public java.lang.String getRecoveryVaultId();
```

- *Type:* java.lang.String

---

##### `replicationIntervalInSeconds`<sup>Required</sup> <a name="replicationIntervalInSeconds" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.replicationIntervalInSeconds"></a>

```java
public java.lang.Number getReplicationIntervalInSeconds();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryHypervReplicationPolicyConfig <a name="SiteRecoveryHypervReplicationPolicyConfig" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_hyperv_replication_policy.SiteRecoveryHypervReplicationPolicyConfig;

SiteRecoveryHypervReplicationPolicyConfig.builder()
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
    .applicationConsistentSnapshotFrequencyInHours(java.lang.Number)
    .name(java.lang.String)
    .recoveryPointRetentionInHours(java.lang.Number)
    .recoveryVaultId(java.lang.String)
    .replicationIntervalInSeconds(java.lang.Number)
//  .id(java.lang.String)
//  .timeouts(SiteRecoveryHypervReplicationPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.applicationConsistentSnapshotFrequencyInHours">applicationConsistentSnapshotFrequencyInHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#application_consistent_snapshot_frequency_in_hours SiteRecoveryHypervReplicationPolicy#application_consistent_snapshot_frequency_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#name SiteRecoveryHypervReplicationPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.recoveryPointRetentionInHours">recoveryPointRetentionInHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_point_retention_in_hours SiteRecoveryHypervReplicationPolicy#recovery_point_retention_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.recoveryVaultId">recoveryVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_vault_id SiteRecoveryHypervReplicationPolicy#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.replicationIntervalInSeconds">replicationIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#replication_interval_in_seconds SiteRecoveryHypervReplicationPolicy#replication_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#id SiteRecoveryHypervReplicationPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationConsistentSnapshotFrequencyInHours`<sup>Required</sup> <a name="applicationConsistentSnapshotFrequencyInHours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.applicationConsistentSnapshotFrequencyInHours"></a>

```java
public java.lang.Number getApplicationConsistentSnapshotFrequencyInHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#application_consistent_snapshot_frequency_in_hours SiteRecoveryHypervReplicationPolicy#application_consistent_snapshot_frequency_in_hours}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#name SiteRecoveryHypervReplicationPolicy#name}.

---

##### `recoveryPointRetentionInHours`<sup>Required</sup> <a name="recoveryPointRetentionInHours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.recoveryPointRetentionInHours"></a>

```java
public java.lang.Number getRecoveryPointRetentionInHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_point_retention_in_hours SiteRecoveryHypervReplicationPolicy#recovery_point_retention_in_hours}.

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.recoveryVaultId"></a>

```java
public java.lang.String getRecoveryVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_vault_id SiteRecoveryHypervReplicationPolicy#recovery_vault_id}.

---

##### `replicationIntervalInSeconds`<sup>Required</sup> <a name="replicationIntervalInSeconds" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.replicationIntervalInSeconds"></a>

```java
public java.lang.Number getReplicationIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#replication_interval_in_seconds SiteRecoveryHypervReplicationPolicy#replication_interval_in_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#id SiteRecoveryHypervReplicationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.timeouts"></a>

```java
public SiteRecoveryHypervReplicationPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#timeouts SiteRecoveryHypervReplicationPolicy#timeouts}

---

### SiteRecoveryHypervReplicationPolicyTimeouts <a name="SiteRecoveryHypervReplicationPolicyTimeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_hyperv_replication_policy.SiteRecoveryHypervReplicationPolicyTimeouts;

SiteRecoveryHypervReplicationPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#create SiteRecoveryHypervReplicationPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#delete SiteRecoveryHypervReplicationPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#read SiteRecoveryHypervReplicationPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#update SiteRecoveryHypervReplicationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#create SiteRecoveryHypervReplicationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#delete SiteRecoveryHypervReplicationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#read SiteRecoveryHypervReplicationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_replication_policy#update SiteRecoveryHypervReplicationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference <a name="SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_hyperv_replication_policy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference;

new SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a>

---



