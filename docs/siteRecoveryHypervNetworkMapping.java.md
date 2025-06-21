# `siteRecoveryHypervNetworkMapping` Submodule <a name="`siteRecoveryHypervNetworkMapping` Submodule" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryHypervNetworkMapping <a name="SiteRecoveryHypervNetworkMapping" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping azurerm_site_recovery_hyperv_network_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_hyperv_network_mapping.SiteRecoveryHypervNetworkMapping;

SiteRecoveryHypervNetworkMapping.Builder.create(Construct scope, java.lang.String id)
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
    .sourceNetworkName(java.lang.String)
    .sourceSystemCenterVirtualMachineManagerName(java.lang.String)
    .targetNetworkId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SiteRecoveryHypervNetworkMappingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#name SiteRecoveryHypervNetworkMapping#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.recoveryVaultId">recoveryVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#recovery_vault_id SiteRecoveryHypervNetworkMapping#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.sourceNetworkName">sourceNetworkName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#source_network_name SiteRecoveryHypervNetworkMapping#source_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.sourceSystemCenterVirtualMachineManagerName">sourceSystemCenterVirtualMachineManagerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#source_system_center_virtual_machine_manager_name SiteRecoveryHypervNetworkMapping#source_system_center_virtual_machine_manager_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.targetNetworkId">targetNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#target_network_id SiteRecoveryHypervNetworkMapping#target_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#id SiteRecoveryHypervNetworkMapping#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts">SiteRecoveryHypervNetworkMappingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#name SiteRecoveryHypervNetworkMapping#name}.

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.recoveryVaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#recovery_vault_id SiteRecoveryHypervNetworkMapping#recovery_vault_id}.

---

##### `sourceNetworkName`<sup>Required</sup> <a name="sourceNetworkName" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.sourceNetworkName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#source_network_name SiteRecoveryHypervNetworkMapping#source_network_name}.

---

##### `sourceSystemCenterVirtualMachineManagerName`<sup>Required</sup> <a name="sourceSystemCenterVirtualMachineManagerName" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.sourceSystemCenterVirtualMachineManagerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#source_system_center_virtual_machine_manager_name SiteRecoveryHypervNetworkMapping#source_system_center_virtual_machine_manager_name}.

---

##### `targetNetworkId`<sup>Required</sup> <a name="targetNetworkId" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.targetNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#target_network_id SiteRecoveryHypervNetworkMapping#target_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#id SiteRecoveryHypervNetworkMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts">SiteRecoveryHypervNetworkMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#timeouts SiteRecoveryHypervNetworkMapping#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.putTimeouts"></a>

```java
public void putTimeouts(SiteRecoveryHypervNetworkMappingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts">SiteRecoveryHypervNetworkMappingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SiteRecoveryHypervNetworkMapping resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_hyperv_network_mapping.SiteRecoveryHypervNetworkMapping;

SiteRecoveryHypervNetworkMapping.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_hyperv_network_mapping.SiteRecoveryHypervNetworkMapping;

SiteRecoveryHypervNetworkMapping.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_hyperv_network_mapping.SiteRecoveryHypervNetworkMapping;

SiteRecoveryHypervNetworkMapping.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_hyperv_network_mapping.SiteRecoveryHypervNetworkMapping;

SiteRecoveryHypervNetworkMapping.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SiteRecoveryHypervNetworkMapping.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SiteRecoveryHypervNetworkMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SiteRecoveryHypervNetworkMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SiteRecoveryHypervNetworkMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SiteRecoveryHypervNetworkMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference">SiteRecoveryHypervNetworkMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.recoveryVaultIdInput">recoveryVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.sourceNetworkNameInput">sourceNetworkNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.sourceSystemCenterVirtualMachineManagerNameInput">sourceSystemCenterVirtualMachineManagerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.targetNetworkIdInput">targetNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts">SiteRecoveryHypervNetworkMappingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.recoveryVaultId">recoveryVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.sourceNetworkName">sourceNetworkName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.sourceSystemCenterVirtualMachineManagerName">sourceSystemCenterVirtualMachineManagerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.targetNetworkId">targetNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.timeouts"></a>

```java
public SiteRecoveryHypervNetworkMappingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference">SiteRecoveryHypervNetworkMappingTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recoveryVaultIdInput`<sup>Optional</sup> <a name="recoveryVaultIdInput" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.recoveryVaultIdInput"></a>

```java
public java.lang.String getRecoveryVaultIdInput();
```

- *Type:* java.lang.String

---

##### `sourceNetworkNameInput`<sup>Optional</sup> <a name="sourceNetworkNameInput" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.sourceNetworkNameInput"></a>

```java
public java.lang.String getSourceNetworkNameInput();
```

- *Type:* java.lang.String

---

##### `sourceSystemCenterVirtualMachineManagerNameInput`<sup>Optional</sup> <a name="sourceSystemCenterVirtualMachineManagerNameInput" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.sourceSystemCenterVirtualMachineManagerNameInput"></a>

```java
public java.lang.String getSourceSystemCenterVirtualMachineManagerNameInput();
```

- *Type:* java.lang.String

---

##### `targetNetworkIdInput`<sup>Optional</sup> <a name="targetNetworkIdInput" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.targetNetworkIdInput"></a>

```java
public java.lang.String getTargetNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts">SiteRecoveryHypervNetworkMappingTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.recoveryVaultId"></a>

```java
public java.lang.String getRecoveryVaultId();
```

- *Type:* java.lang.String

---

##### `sourceNetworkName`<sup>Required</sup> <a name="sourceNetworkName" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.sourceNetworkName"></a>

```java
public java.lang.String getSourceNetworkName();
```

- *Type:* java.lang.String

---

##### `sourceSystemCenterVirtualMachineManagerName`<sup>Required</sup> <a name="sourceSystemCenterVirtualMachineManagerName" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.sourceSystemCenterVirtualMachineManagerName"></a>

```java
public java.lang.String getSourceSystemCenterVirtualMachineManagerName();
```

- *Type:* java.lang.String

---

##### `targetNetworkId`<sup>Required</sup> <a name="targetNetworkId" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.targetNetworkId"></a>

```java
public java.lang.String getTargetNetworkId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryHypervNetworkMappingConfig <a name="SiteRecoveryHypervNetworkMappingConfig" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_hyperv_network_mapping.SiteRecoveryHypervNetworkMappingConfig;

SiteRecoveryHypervNetworkMappingConfig.builder()
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
    .sourceNetworkName(java.lang.String)
    .sourceSystemCenterVirtualMachineManagerName(java.lang.String)
    .targetNetworkId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SiteRecoveryHypervNetworkMappingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#name SiteRecoveryHypervNetworkMapping#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.recoveryVaultId">recoveryVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#recovery_vault_id SiteRecoveryHypervNetworkMapping#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.sourceNetworkName">sourceNetworkName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#source_network_name SiteRecoveryHypervNetworkMapping#source_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.sourceSystemCenterVirtualMachineManagerName">sourceSystemCenterVirtualMachineManagerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#source_system_center_virtual_machine_manager_name SiteRecoveryHypervNetworkMapping#source_system_center_virtual_machine_manager_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.targetNetworkId">targetNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#target_network_id SiteRecoveryHypervNetworkMapping#target_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#id SiteRecoveryHypervNetworkMapping#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts">SiteRecoveryHypervNetworkMappingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#name SiteRecoveryHypervNetworkMapping#name}.

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.recoveryVaultId"></a>

```java
public java.lang.String getRecoveryVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#recovery_vault_id SiteRecoveryHypervNetworkMapping#recovery_vault_id}.

---

##### `sourceNetworkName`<sup>Required</sup> <a name="sourceNetworkName" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.sourceNetworkName"></a>

```java
public java.lang.String getSourceNetworkName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#source_network_name SiteRecoveryHypervNetworkMapping#source_network_name}.

---

##### `sourceSystemCenterVirtualMachineManagerName`<sup>Required</sup> <a name="sourceSystemCenterVirtualMachineManagerName" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.sourceSystemCenterVirtualMachineManagerName"></a>

```java
public java.lang.String getSourceSystemCenterVirtualMachineManagerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#source_system_center_virtual_machine_manager_name SiteRecoveryHypervNetworkMapping#source_system_center_virtual_machine_manager_name}.

---

##### `targetNetworkId`<sup>Required</sup> <a name="targetNetworkId" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.targetNetworkId"></a>

```java
public java.lang.String getTargetNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#target_network_id SiteRecoveryHypervNetworkMapping#target_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#id SiteRecoveryHypervNetworkMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.timeouts"></a>

```java
public SiteRecoveryHypervNetworkMappingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts">SiteRecoveryHypervNetworkMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#timeouts SiteRecoveryHypervNetworkMapping#timeouts}

---

### SiteRecoveryHypervNetworkMappingTimeouts <a name="SiteRecoveryHypervNetworkMappingTimeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_hyperv_network_mapping.SiteRecoveryHypervNetworkMappingTimeouts;

SiteRecoveryHypervNetworkMappingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#create SiteRecoveryHypervNetworkMapping#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#delete SiteRecoveryHypervNetworkMapping#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#read SiteRecoveryHypervNetworkMapping#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#create SiteRecoveryHypervNetworkMapping#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#delete SiteRecoveryHypervNetworkMapping#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/site_recovery_hyperv_network_mapping#read SiteRecoveryHypervNetworkMapping#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryHypervNetworkMappingTimeoutsOutputReference <a name="SiteRecoveryHypervNetworkMappingTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.site_recovery_hyperv_network_mapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference;

new SiteRecoveryHypervNetworkMappingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts">SiteRecoveryHypervNetworkMappingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts">SiteRecoveryHypervNetworkMappingTimeouts</a>

---



