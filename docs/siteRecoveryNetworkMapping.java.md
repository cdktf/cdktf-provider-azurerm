# `siteRecoveryNetworkMapping` Submodule <a name="`siteRecoveryNetworkMapping` Submodule" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryNetworkMapping <a name="SiteRecoveryNetworkMapping" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping azurerm_site_recovery_network_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_network_mapping.SiteRecoveryNetworkMapping;

SiteRecoveryNetworkMapping.Builder.create(Construct scope, java.lang.String id)
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
    .recoveryVaultName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sourceNetworkId(java.lang.String)
    .sourceRecoveryFabricName(java.lang.String)
    .targetNetworkId(java.lang.String)
    .targetRecoveryFabricName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SiteRecoveryNetworkMappingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#name SiteRecoveryNetworkMapping#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.recoveryVaultName">recoveryVaultName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#recovery_vault_name SiteRecoveryNetworkMapping#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#resource_group_name SiteRecoveryNetworkMapping#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.sourceNetworkId">sourceNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#source_network_id SiteRecoveryNetworkMapping#source_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.sourceRecoveryFabricName">sourceRecoveryFabricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#source_recovery_fabric_name SiteRecoveryNetworkMapping#source_recovery_fabric_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.targetNetworkId">targetNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#target_network_id SiteRecoveryNetworkMapping#target_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.targetRecoveryFabricName">targetRecoveryFabricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#target_recovery_fabric_name SiteRecoveryNetworkMapping#target_recovery_fabric_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#id SiteRecoveryNetworkMapping#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts">SiteRecoveryNetworkMappingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#name SiteRecoveryNetworkMapping#name}.

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.recoveryVaultName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#recovery_vault_name SiteRecoveryNetworkMapping#recovery_vault_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#resource_group_name SiteRecoveryNetworkMapping#resource_group_name}.

---

##### `sourceNetworkId`<sup>Required</sup> <a name="sourceNetworkId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.sourceNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#source_network_id SiteRecoveryNetworkMapping#source_network_id}.

---

##### `sourceRecoveryFabricName`<sup>Required</sup> <a name="sourceRecoveryFabricName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.sourceRecoveryFabricName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#source_recovery_fabric_name SiteRecoveryNetworkMapping#source_recovery_fabric_name}.

---

##### `targetNetworkId`<sup>Required</sup> <a name="targetNetworkId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.targetNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#target_network_id SiteRecoveryNetworkMapping#target_network_id}.

---

##### `targetRecoveryFabricName`<sup>Required</sup> <a name="targetRecoveryFabricName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.targetRecoveryFabricName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#target_recovery_fabric_name SiteRecoveryNetworkMapping#target_recovery_fabric_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#id SiteRecoveryNetworkMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts">SiteRecoveryNetworkMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#timeouts SiteRecoveryNetworkMapping#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.putTimeouts"></a>

```java
public void putTimeouts(SiteRecoveryNetworkMappingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts">SiteRecoveryNetworkMappingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SiteRecoveryNetworkMapping resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_network_mapping.SiteRecoveryNetworkMapping;

SiteRecoveryNetworkMapping.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_network_mapping.SiteRecoveryNetworkMapping;

SiteRecoveryNetworkMapping.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_network_mapping.SiteRecoveryNetworkMapping;

SiteRecoveryNetworkMapping.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_network_mapping.SiteRecoveryNetworkMapping;

SiteRecoveryNetworkMapping.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SiteRecoveryNetworkMapping.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SiteRecoveryNetworkMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SiteRecoveryNetworkMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SiteRecoveryNetworkMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SiteRecoveryNetworkMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference">SiteRecoveryNetworkMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.recoveryVaultNameInput">recoveryVaultNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.sourceNetworkIdInput">sourceNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.sourceRecoveryFabricNameInput">sourceRecoveryFabricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.targetNetworkIdInput">targetNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.targetRecoveryFabricNameInput">targetRecoveryFabricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts">SiteRecoveryNetworkMappingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.recoveryVaultName">recoveryVaultName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.sourceNetworkId">sourceNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.sourceRecoveryFabricName">sourceRecoveryFabricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.targetNetworkId">targetNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.targetRecoveryFabricName">targetRecoveryFabricName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.timeouts"></a>

```java
public SiteRecoveryNetworkMappingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference">SiteRecoveryNetworkMappingTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recoveryVaultNameInput`<sup>Optional</sup> <a name="recoveryVaultNameInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.recoveryVaultNameInput"></a>

```java
public java.lang.String getRecoveryVaultNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sourceNetworkIdInput`<sup>Optional</sup> <a name="sourceNetworkIdInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.sourceNetworkIdInput"></a>

```java
public java.lang.String getSourceNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `sourceRecoveryFabricNameInput`<sup>Optional</sup> <a name="sourceRecoveryFabricNameInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.sourceRecoveryFabricNameInput"></a>

```java
public java.lang.String getSourceRecoveryFabricNameInput();
```

- *Type:* java.lang.String

---

##### `targetNetworkIdInput`<sup>Optional</sup> <a name="targetNetworkIdInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.targetNetworkIdInput"></a>

```java
public java.lang.String getTargetNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `targetRecoveryFabricNameInput`<sup>Optional</sup> <a name="targetRecoveryFabricNameInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.targetRecoveryFabricNameInput"></a>

```java
public java.lang.String getTargetRecoveryFabricNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts">SiteRecoveryNetworkMappingTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.recoveryVaultName"></a>

```java
public java.lang.String getRecoveryVaultName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sourceNetworkId`<sup>Required</sup> <a name="sourceNetworkId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.sourceNetworkId"></a>

```java
public java.lang.String getSourceNetworkId();
```

- *Type:* java.lang.String

---

##### `sourceRecoveryFabricName`<sup>Required</sup> <a name="sourceRecoveryFabricName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.sourceRecoveryFabricName"></a>

```java
public java.lang.String getSourceRecoveryFabricName();
```

- *Type:* java.lang.String

---

##### `targetNetworkId`<sup>Required</sup> <a name="targetNetworkId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.targetNetworkId"></a>

```java
public java.lang.String getTargetNetworkId();
```

- *Type:* java.lang.String

---

##### `targetRecoveryFabricName`<sup>Required</sup> <a name="targetRecoveryFabricName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.targetRecoveryFabricName"></a>

```java
public java.lang.String getTargetRecoveryFabricName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryNetworkMappingConfig <a name="SiteRecoveryNetworkMappingConfig" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_network_mapping.SiteRecoveryNetworkMappingConfig;

SiteRecoveryNetworkMappingConfig.builder()
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
    .recoveryVaultName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sourceNetworkId(java.lang.String)
    .sourceRecoveryFabricName(java.lang.String)
    .targetNetworkId(java.lang.String)
    .targetRecoveryFabricName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SiteRecoveryNetworkMappingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#name SiteRecoveryNetworkMapping#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.recoveryVaultName">recoveryVaultName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#recovery_vault_name SiteRecoveryNetworkMapping#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#resource_group_name SiteRecoveryNetworkMapping#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.sourceNetworkId">sourceNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#source_network_id SiteRecoveryNetworkMapping#source_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.sourceRecoveryFabricName">sourceRecoveryFabricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#source_recovery_fabric_name SiteRecoveryNetworkMapping#source_recovery_fabric_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.targetNetworkId">targetNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#target_network_id SiteRecoveryNetworkMapping#target_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.targetRecoveryFabricName">targetRecoveryFabricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#target_recovery_fabric_name SiteRecoveryNetworkMapping#target_recovery_fabric_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#id SiteRecoveryNetworkMapping#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts">SiteRecoveryNetworkMappingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#name SiteRecoveryNetworkMapping#name}.

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.recoveryVaultName"></a>

```java
public java.lang.String getRecoveryVaultName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#recovery_vault_name SiteRecoveryNetworkMapping#recovery_vault_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#resource_group_name SiteRecoveryNetworkMapping#resource_group_name}.

---

##### `sourceNetworkId`<sup>Required</sup> <a name="sourceNetworkId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.sourceNetworkId"></a>

```java
public java.lang.String getSourceNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#source_network_id SiteRecoveryNetworkMapping#source_network_id}.

---

##### `sourceRecoveryFabricName`<sup>Required</sup> <a name="sourceRecoveryFabricName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.sourceRecoveryFabricName"></a>

```java
public java.lang.String getSourceRecoveryFabricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#source_recovery_fabric_name SiteRecoveryNetworkMapping#source_recovery_fabric_name}.

---

##### `targetNetworkId`<sup>Required</sup> <a name="targetNetworkId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.targetNetworkId"></a>

```java
public java.lang.String getTargetNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#target_network_id SiteRecoveryNetworkMapping#target_network_id}.

---

##### `targetRecoveryFabricName`<sup>Required</sup> <a name="targetRecoveryFabricName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.targetRecoveryFabricName"></a>

```java
public java.lang.String getTargetRecoveryFabricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#target_recovery_fabric_name SiteRecoveryNetworkMapping#target_recovery_fabric_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#id SiteRecoveryNetworkMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.timeouts"></a>

```java
public SiteRecoveryNetworkMappingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts">SiteRecoveryNetworkMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#timeouts SiteRecoveryNetworkMapping#timeouts}

---

### SiteRecoveryNetworkMappingTimeouts <a name="SiteRecoveryNetworkMappingTimeouts" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_network_mapping.SiteRecoveryNetworkMappingTimeouts;

SiteRecoveryNetworkMappingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#create SiteRecoveryNetworkMapping#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#delete SiteRecoveryNetworkMapping#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#read SiteRecoveryNetworkMapping#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#create SiteRecoveryNetworkMapping#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#delete SiteRecoveryNetworkMapping#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_network_mapping#read SiteRecoveryNetworkMapping#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryNetworkMappingTimeoutsOutputReference <a name="SiteRecoveryNetworkMappingTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_network_mapping.SiteRecoveryNetworkMappingTimeoutsOutputReference;

new SiteRecoveryNetworkMappingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts">SiteRecoveryNetworkMappingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts">SiteRecoveryNetworkMappingTimeouts</a>

---



