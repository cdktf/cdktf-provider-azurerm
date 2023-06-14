# `azurerm_site_recovery_protection_container_mapping`

Refer to the Terraform Registory for docs: [`azurerm_site_recovery_protection_container_mapping`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping).

# `siteRecoveryProtectionContainerMapping` Submodule <a name="`siteRecoveryProtectionContainerMapping` Submodule" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryProtectionContainerMapping <a name="SiteRecoveryProtectionContainerMapping" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping azurerm_site_recovery_protection_container_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_protection_container_mapping.SiteRecoveryProtectionContainerMapping;

SiteRecoveryProtectionContainerMapping.Builder.create(Construct scope, java.lang.String id)
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
    .recoveryFabricName(java.lang.String)
    .recoveryReplicationPolicyId(java.lang.String)
    .recoverySourceProtectionContainerName(java.lang.String)
    .recoveryTargetProtectionContainerId(java.lang.String)
    .recoveryVaultName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .automaticUpdate(SiteRecoveryProtectionContainerMappingAutomaticUpdate)
//  .id(java.lang.String)
//  .timeouts(SiteRecoveryProtectionContainerMappingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#name SiteRecoveryProtectionContainerMapping#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoveryFabricName">recoveryFabricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_fabric_name SiteRecoveryProtectionContainerMapping#recovery_fabric_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoveryReplicationPolicyId">recoveryReplicationPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_replication_policy_id SiteRecoveryProtectionContainerMapping#recovery_replication_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoverySourceProtectionContainerName">recoverySourceProtectionContainerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_source_protection_container_name SiteRecoveryProtectionContainerMapping#recovery_source_protection_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoveryTargetProtectionContainerId">recoveryTargetProtectionContainerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_target_protection_container_id SiteRecoveryProtectionContainerMapping#recovery_target_protection_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoveryVaultName">recoveryVaultName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_vault_name SiteRecoveryProtectionContainerMapping#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#resource_group_name SiteRecoveryProtectionContainerMapping#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.automaticUpdate">automaticUpdate</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a></code> | automatic_update block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#id SiteRecoveryProtectionContainerMapping#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#name SiteRecoveryProtectionContainerMapping#name}.

---

##### `recoveryFabricName`<sup>Required</sup> <a name="recoveryFabricName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoveryFabricName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_fabric_name SiteRecoveryProtectionContainerMapping#recovery_fabric_name}.

---

##### `recoveryReplicationPolicyId`<sup>Required</sup> <a name="recoveryReplicationPolicyId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoveryReplicationPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_replication_policy_id SiteRecoveryProtectionContainerMapping#recovery_replication_policy_id}.

---

##### `recoverySourceProtectionContainerName`<sup>Required</sup> <a name="recoverySourceProtectionContainerName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoverySourceProtectionContainerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_source_protection_container_name SiteRecoveryProtectionContainerMapping#recovery_source_protection_container_name}.

---

##### `recoveryTargetProtectionContainerId`<sup>Required</sup> <a name="recoveryTargetProtectionContainerId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoveryTargetProtectionContainerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_target_protection_container_id SiteRecoveryProtectionContainerMapping#recovery_target_protection_container_id}.

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoveryVaultName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_vault_name SiteRecoveryProtectionContainerMapping#recovery_vault_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#resource_group_name SiteRecoveryProtectionContainerMapping#resource_group_name}.

---

##### `automaticUpdate`<sup>Optional</sup> <a name="automaticUpdate" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.automaticUpdate"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a>

automatic_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#automatic_update SiteRecoveryProtectionContainerMapping#automatic_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#id SiteRecoveryProtectionContainerMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#timeouts SiteRecoveryProtectionContainerMapping#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putAutomaticUpdate">putAutomaticUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetAutomaticUpdate">resetAutomaticUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAutomaticUpdate` <a name="putAutomaticUpdate" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putAutomaticUpdate"></a>

```java
public void putAutomaticUpdate(SiteRecoveryProtectionContainerMappingAutomaticUpdate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putAutomaticUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putTimeouts"></a>

```java
public void putTimeouts(SiteRecoveryProtectionContainerMappingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a>

---

##### `resetAutomaticUpdate` <a name="resetAutomaticUpdate" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetAutomaticUpdate"></a>

```java
public void resetAutomaticUpdate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_protection_container_mapping.SiteRecoveryProtectionContainerMapping;

SiteRecoveryProtectionContainerMapping.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_protection_container_mapping.SiteRecoveryProtectionContainerMapping;

SiteRecoveryProtectionContainerMapping.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_protection_container_mapping.SiteRecoveryProtectionContainerMapping;

SiteRecoveryProtectionContainerMapping.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.automaticUpdate">automaticUpdate</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference">SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference">SiteRecoveryProtectionContainerMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.automaticUpdateInput">automaticUpdateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryFabricNameInput">recoveryFabricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryReplicationPolicyIdInput">recoveryReplicationPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoverySourceProtectionContainerNameInput">recoverySourceProtectionContainerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryTargetProtectionContainerIdInput">recoveryTargetProtectionContainerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryVaultNameInput">recoveryVaultNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryFabricName">recoveryFabricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryReplicationPolicyId">recoveryReplicationPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoverySourceProtectionContainerName">recoverySourceProtectionContainerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryTargetProtectionContainerId">recoveryTargetProtectionContainerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryVaultName">recoveryVaultName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `automaticUpdate`<sup>Required</sup> <a name="automaticUpdate" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.automaticUpdate"></a>

```java
public SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference getAutomaticUpdate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference">SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.timeouts"></a>

```java
public SiteRecoveryProtectionContainerMappingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference">SiteRecoveryProtectionContainerMappingTimeoutsOutputReference</a>

---

##### `automaticUpdateInput`<sup>Optional</sup> <a name="automaticUpdateInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.automaticUpdateInput"></a>

```java
public SiteRecoveryProtectionContainerMappingAutomaticUpdate getAutomaticUpdateInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recoveryFabricNameInput`<sup>Optional</sup> <a name="recoveryFabricNameInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryFabricNameInput"></a>

```java
public java.lang.String getRecoveryFabricNameInput();
```

- *Type:* java.lang.String

---

##### `recoveryReplicationPolicyIdInput`<sup>Optional</sup> <a name="recoveryReplicationPolicyIdInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryReplicationPolicyIdInput"></a>

```java
public java.lang.String getRecoveryReplicationPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `recoverySourceProtectionContainerNameInput`<sup>Optional</sup> <a name="recoverySourceProtectionContainerNameInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoverySourceProtectionContainerNameInput"></a>

```java
public java.lang.String getRecoverySourceProtectionContainerNameInput();
```

- *Type:* java.lang.String

---

##### `recoveryTargetProtectionContainerIdInput`<sup>Optional</sup> <a name="recoveryTargetProtectionContainerIdInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryTargetProtectionContainerIdInput"></a>

```java
public java.lang.String getRecoveryTargetProtectionContainerIdInput();
```

- *Type:* java.lang.String

---

##### `recoveryVaultNameInput`<sup>Optional</sup> <a name="recoveryVaultNameInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryVaultNameInput"></a>

```java
public java.lang.String getRecoveryVaultNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recoveryFabricName`<sup>Required</sup> <a name="recoveryFabricName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryFabricName"></a>

```java
public java.lang.String getRecoveryFabricName();
```

- *Type:* java.lang.String

---

##### `recoveryReplicationPolicyId`<sup>Required</sup> <a name="recoveryReplicationPolicyId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryReplicationPolicyId"></a>

```java
public java.lang.String getRecoveryReplicationPolicyId();
```

- *Type:* java.lang.String

---

##### `recoverySourceProtectionContainerName`<sup>Required</sup> <a name="recoverySourceProtectionContainerName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoverySourceProtectionContainerName"></a>

```java
public java.lang.String getRecoverySourceProtectionContainerName();
```

- *Type:* java.lang.String

---

##### `recoveryTargetProtectionContainerId`<sup>Required</sup> <a name="recoveryTargetProtectionContainerId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryTargetProtectionContainerId"></a>

```java
public java.lang.String getRecoveryTargetProtectionContainerId();
```

- *Type:* java.lang.String

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryVaultName"></a>

```java
public java.lang.String getRecoveryVaultName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryProtectionContainerMappingAutomaticUpdate <a name="SiteRecoveryProtectionContainerMappingAutomaticUpdate" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_protection_container_mapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate;

SiteRecoveryProtectionContainerMappingAutomaticUpdate.builder()
//  .authenticationType(java.lang.String)
//  .automationAccountId(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#authentication_type SiteRecoveryProtectionContainerMapping#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.automationAccountId">automationAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#automation_account_id SiteRecoveryProtectionContainerMapping#automation_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#enabled SiteRecoveryProtectionContainerMapping#enabled}. |

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#authentication_type SiteRecoveryProtectionContainerMapping#authentication_type}.

---

##### `automationAccountId`<sup>Optional</sup> <a name="automationAccountId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.automationAccountId"></a>

```java
public java.lang.String getAutomationAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#automation_account_id SiteRecoveryProtectionContainerMapping#automation_account_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#enabled SiteRecoveryProtectionContainerMapping#enabled}.

---

### SiteRecoveryProtectionContainerMappingConfig <a name="SiteRecoveryProtectionContainerMappingConfig" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_protection_container_mapping.SiteRecoveryProtectionContainerMappingConfig;

SiteRecoveryProtectionContainerMappingConfig.builder()
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
    .recoveryFabricName(java.lang.String)
    .recoveryReplicationPolicyId(java.lang.String)
    .recoverySourceProtectionContainerName(java.lang.String)
    .recoveryTargetProtectionContainerId(java.lang.String)
    .recoveryVaultName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .automaticUpdate(SiteRecoveryProtectionContainerMappingAutomaticUpdate)
//  .id(java.lang.String)
//  .timeouts(SiteRecoveryProtectionContainerMappingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#name SiteRecoveryProtectionContainerMapping#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryFabricName">recoveryFabricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_fabric_name SiteRecoveryProtectionContainerMapping#recovery_fabric_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryReplicationPolicyId">recoveryReplicationPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_replication_policy_id SiteRecoveryProtectionContainerMapping#recovery_replication_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoverySourceProtectionContainerName">recoverySourceProtectionContainerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_source_protection_container_name SiteRecoveryProtectionContainerMapping#recovery_source_protection_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryTargetProtectionContainerId">recoveryTargetProtectionContainerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_target_protection_container_id SiteRecoveryProtectionContainerMapping#recovery_target_protection_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryVaultName">recoveryVaultName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_vault_name SiteRecoveryProtectionContainerMapping#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#resource_group_name SiteRecoveryProtectionContainerMapping#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.automaticUpdate">automaticUpdate</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a></code> | automatic_update block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#id SiteRecoveryProtectionContainerMapping#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#name SiteRecoveryProtectionContainerMapping#name}.

---

##### `recoveryFabricName`<sup>Required</sup> <a name="recoveryFabricName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryFabricName"></a>

```java
public java.lang.String getRecoveryFabricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_fabric_name SiteRecoveryProtectionContainerMapping#recovery_fabric_name}.

---

##### `recoveryReplicationPolicyId`<sup>Required</sup> <a name="recoveryReplicationPolicyId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryReplicationPolicyId"></a>

```java
public java.lang.String getRecoveryReplicationPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_replication_policy_id SiteRecoveryProtectionContainerMapping#recovery_replication_policy_id}.

---

##### `recoverySourceProtectionContainerName`<sup>Required</sup> <a name="recoverySourceProtectionContainerName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoverySourceProtectionContainerName"></a>

```java
public java.lang.String getRecoverySourceProtectionContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_source_protection_container_name SiteRecoveryProtectionContainerMapping#recovery_source_protection_container_name}.

---

##### `recoveryTargetProtectionContainerId`<sup>Required</sup> <a name="recoveryTargetProtectionContainerId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryTargetProtectionContainerId"></a>

```java
public java.lang.String getRecoveryTargetProtectionContainerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_target_protection_container_id SiteRecoveryProtectionContainerMapping#recovery_target_protection_container_id}.

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryVaultName"></a>

```java
public java.lang.String getRecoveryVaultName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#recovery_vault_name SiteRecoveryProtectionContainerMapping#recovery_vault_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#resource_group_name SiteRecoveryProtectionContainerMapping#resource_group_name}.

---

##### `automaticUpdate`<sup>Optional</sup> <a name="automaticUpdate" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.automaticUpdate"></a>

```java
public SiteRecoveryProtectionContainerMappingAutomaticUpdate getAutomaticUpdate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a>

automatic_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#automatic_update SiteRecoveryProtectionContainerMapping#automatic_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#id SiteRecoveryProtectionContainerMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.timeouts"></a>

```java
public SiteRecoveryProtectionContainerMappingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#timeouts SiteRecoveryProtectionContainerMapping#timeouts}

---

### SiteRecoveryProtectionContainerMappingTimeouts <a name="SiteRecoveryProtectionContainerMappingTimeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_protection_container_mapping.SiteRecoveryProtectionContainerMappingTimeouts;

SiteRecoveryProtectionContainerMappingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#create SiteRecoveryProtectionContainerMapping#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#delete SiteRecoveryProtectionContainerMapping#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#read SiteRecoveryProtectionContainerMapping#read}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#update SiteRecoveryProtectionContainerMapping#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#create SiteRecoveryProtectionContainerMapping#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#delete SiteRecoveryProtectionContainerMapping#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#read SiteRecoveryProtectionContainerMapping#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/site_recovery_protection_container_mapping#update SiteRecoveryProtectionContainerMapping#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference <a name="SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_protection_container_mapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference;

new SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetAutomationAccountId">resetAutomationAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetAuthenticationType"></a>

```java
public void resetAuthenticationType()
```

##### `resetAutomationAccountId` <a name="resetAutomationAccountId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetAutomationAccountId"></a>

```java
public void resetAutomationAccountId()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.automationAccountIdInput">automationAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.automationAccountId">automationAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `automationAccountIdInput`<sup>Optional</sup> <a name="automationAccountIdInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.automationAccountIdInput"></a>

```java
public java.lang.String getAutomationAccountIdInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `automationAccountId`<sup>Required</sup> <a name="automationAccountId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.automationAccountId"></a>

```java
public java.lang.String getAutomationAccountId();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.internalValue"></a>

```java
public SiteRecoveryProtectionContainerMappingAutomaticUpdate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a>

---


### SiteRecoveryProtectionContainerMappingTimeoutsOutputReference <a name="SiteRecoveryProtectionContainerMappingTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_protection_container_mapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference;

new SiteRecoveryProtectionContainerMappingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



