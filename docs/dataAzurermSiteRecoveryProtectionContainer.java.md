# `data_azurerm_site_recovery_protection_container`

Refer to the Terraform Registory for docs: [`data_azurerm_site_recovery_protection_container`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container).

# `dataAzurermSiteRecoveryProtectionContainer` Submodule <a name="`dataAzurermSiteRecoveryProtectionContainer` Submodule" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSiteRecoveryProtectionContainer <a name="DataAzurermSiteRecoveryProtectionContainer" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container azurerm_site_recovery_protection_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_protection_container.DataAzurermSiteRecoveryProtectionContainer;

DataAzurermSiteRecoveryProtectionContainer.Builder.create(Construct scope, java.lang.String id)
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
    .recoveryVaultName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermSiteRecoveryProtectionContainerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#name DataAzurermSiteRecoveryProtectionContainer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.recoveryFabricName">recoveryFabricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#recovery_fabric_name DataAzurermSiteRecoveryProtectionContainer#recovery_fabric_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.recoveryVaultName">recoveryVaultName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#recovery_vault_name DataAzurermSiteRecoveryProtectionContainer#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#resource_group_name DataAzurermSiteRecoveryProtectionContainer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#id DataAzurermSiteRecoveryProtectionContainer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeouts">DataAzurermSiteRecoveryProtectionContainerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#name DataAzurermSiteRecoveryProtectionContainer#name}.

---

##### `recoveryFabricName`<sup>Required</sup> <a name="recoveryFabricName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.recoveryFabricName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#recovery_fabric_name DataAzurermSiteRecoveryProtectionContainer#recovery_fabric_name}.

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.recoveryVaultName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#recovery_vault_name DataAzurermSiteRecoveryProtectionContainer#recovery_vault_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#resource_group_name DataAzurermSiteRecoveryProtectionContainer#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#id DataAzurermSiteRecoveryProtectionContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeouts">DataAzurermSiteRecoveryProtectionContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#timeouts DataAzurermSiteRecoveryProtectionContainer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermSiteRecoveryProtectionContainerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeouts">DataAzurermSiteRecoveryProtectionContainerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_protection_container.DataAzurermSiteRecoveryProtectionContainer;

DataAzurermSiteRecoveryProtectionContainer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_protection_container.DataAzurermSiteRecoveryProtectionContainer;

DataAzurermSiteRecoveryProtectionContainer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_protection_container.DataAzurermSiteRecoveryProtectionContainer;

DataAzurermSiteRecoveryProtectionContainer.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference">DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.recoveryFabricNameInput">recoveryFabricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.recoveryVaultNameInput">recoveryVaultNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeouts">DataAzurermSiteRecoveryProtectionContainerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.recoveryFabricName">recoveryFabricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.recoveryVaultName">recoveryVaultName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.timeouts"></a>

```java
public DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference">DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recoveryFabricNameInput`<sup>Optional</sup> <a name="recoveryFabricNameInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.recoveryFabricNameInput"></a>

```java
public java.lang.String getRecoveryFabricNameInput();
```

- *Type:* java.lang.String

---

##### `recoveryVaultNameInput`<sup>Optional</sup> <a name="recoveryVaultNameInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.recoveryVaultNameInput"></a>

```java
public java.lang.String getRecoveryVaultNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeouts">DataAzurermSiteRecoveryProtectionContainerTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recoveryFabricName`<sup>Required</sup> <a name="recoveryFabricName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.recoveryFabricName"></a>

```java
public java.lang.String getRecoveryFabricName();
```

- *Type:* java.lang.String

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.recoveryVaultName"></a>

```java
public java.lang.String getRecoveryVaultName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSiteRecoveryProtectionContainerConfig <a name="DataAzurermSiteRecoveryProtectionContainerConfig" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_protection_container.DataAzurermSiteRecoveryProtectionContainerConfig;

DataAzurermSiteRecoveryProtectionContainerConfig.builder()
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
    .recoveryVaultName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermSiteRecoveryProtectionContainerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#name DataAzurermSiteRecoveryProtectionContainer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.recoveryFabricName">recoveryFabricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#recovery_fabric_name DataAzurermSiteRecoveryProtectionContainer#recovery_fabric_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.recoveryVaultName">recoveryVaultName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#recovery_vault_name DataAzurermSiteRecoveryProtectionContainer#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#resource_group_name DataAzurermSiteRecoveryProtectionContainer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#id DataAzurermSiteRecoveryProtectionContainer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeouts">DataAzurermSiteRecoveryProtectionContainerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#name DataAzurermSiteRecoveryProtectionContainer#name}.

---

##### `recoveryFabricName`<sup>Required</sup> <a name="recoveryFabricName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.recoveryFabricName"></a>

```java
public java.lang.String getRecoveryFabricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#recovery_fabric_name DataAzurermSiteRecoveryProtectionContainer#recovery_fabric_name}.

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.recoveryVaultName"></a>

```java
public java.lang.String getRecoveryVaultName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#recovery_vault_name DataAzurermSiteRecoveryProtectionContainer#recovery_vault_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#resource_group_name DataAzurermSiteRecoveryProtectionContainer#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#id DataAzurermSiteRecoveryProtectionContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerConfig.property.timeouts"></a>

```java
public DataAzurermSiteRecoveryProtectionContainerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeouts">DataAzurermSiteRecoveryProtectionContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#timeouts DataAzurermSiteRecoveryProtectionContainer#timeouts}

---

### DataAzurermSiteRecoveryProtectionContainerTimeouts <a name="DataAzurermSiteRecoveryProtectionContainerTimeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_protection_container.DataAzurermSiteRecoveryProtectionContainerTimeouts;

DataAzurermSiteRecoveryProtectionContainerTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#read DataAzurermSiteRecoveryProtectionContainer#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/site_recovery_protection_container#read DataAzurermSiteRecoveryProtectionContainer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference <a name="DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_site_recovery_protection_container.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference;

new DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeouts">DataAzurermSiteRecoveryProtectionContainerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryProtectionContainer.DataAzurermSiteRecoveryProtectionContainerTimeouts">DataAzurermSiteRecoveryProtectionContainerTimeouts</a>

---



