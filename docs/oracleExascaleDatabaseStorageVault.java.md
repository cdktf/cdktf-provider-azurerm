# `oracleExascaleDatabaseStorageVault` Submodule <a name="`oracleExascaleDatabaseStorageVault` Submodule" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleExascaleDatabaseStorageVault <a name="OracleExascaleDatabaseStorageVault" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault azurerm_oracle_exascale_database_storage_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exascale_database_storage_vault.OracleExascaleDatabaseStorageVault;

OracleExascaleDatabaseStorageVault.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .additionalFlashCachePercentage(java.lang.Number)
    .displayName(java.lang.String)
    .highCapacityDatabaseStorage(OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .zones(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OracleExascaleDatabaseStorageVaultTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.additionalFlashCachePercentage">additionalFlashCachePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#additional_flash_cache_percentage OracleExascaleDatabaseStorageVault#additional_flash_cache_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#display_name OracleExascaleDatabaseStorageVault#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.highCapacityDatabaseStorage">highCapacityDatabaseStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | high_capacity_database_storage block. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#location OracleExascaleDatabaseStorageVault#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#name OracleExascaleDatabaseStorageVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#resource_group_name OracleExascaleDatabaseStorageVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#zones OracleExascaleDatabaseStorageVault#zones}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#description OracleExascaleDatabaseStorageVault#description}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#id OracleExascaleDatabaseStorageVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#tags OracleExascaleDatabaseStorageVault#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#time_zone OracleExascaleDatabaseStorageVault#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalFlashCachePercentage`<sup>Required</sup> <a name="additionalFlashCachePercentage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.additionalFlashCachePercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#additional_flash_cache_percentage OracleExascaleDatabaseStorageVault#additional_flash_cache_percentage}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#display_name OracleExascaleDatabaseStorageVault#display_name}.

---

##### `highCapacityDatabaseStorage`<sup>Required</sup> <a name="highCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.highCapacityDatabaseStorage"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

high_capacity_database_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#high_capacity_database_storage OracleExascaleDatabaseStorageVault#high_capacity_database_storage}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#location OracleExascaleDatabaseStorageVault#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#name OracleExascaleDatabaseStorageVault#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#resource_group_name OracleExascaleDatabaseStorageVault#resource_group_name}.

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.zones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#zones OracleExascaleDatabaseStorageVault#zones}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#description OracleExascaleDatabaseStorageVault#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#id OracleExascaleDatabaseStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#tags OracleExascaleDatabaseStorageVault#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#timeouts OracleExascaleDatabaseStorageVault#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#time_zone OracleExascaleDatabaseStorageVault#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putHighCapacityDatabaseStorage">putHighCapacityDatabaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHighCapacityDatabaseStorage` <a name="putHighCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putHighCapacityDatabaseStorage"></a>

```java
public void putHighCapacityDatabaseStorage(OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putHighCapacityDatabaseStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts"></a>

```java
public void putTimeouts(OracleExascaleDatabaseStorageVaultTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeZone"></a>

```java
public void resetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OracleExascaleDatabaseStorageVault resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exascale_database_storage_vault.OracleExascaleDatabaseStorageVault;

OracleExascaleDatabaseStorageVault.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exascale_database_storage_vault.OracleExascaleDatabaseStorageVault;

OracleExascaleDatabaseStorageVault.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exascale_database_storage_vault.OracleExascaleDatabaseStorageVault;

OracleExascaleDatabaseStorageVault.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exascale_database_storage_vault.OracleExascaleDatabaseStorageVault;

OracleExascaleDatabaseStorageVault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OracleExascaleDatabaseStorageVault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OracleExascaleDatabaseStorageVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OracleExascaleDatabaseStorageVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OracleExascaleDatabaseStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OracleExascaleDatabaseStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorage">highCapacityDatabaseStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference">OracleExascaleDatabaseStorageVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentageInput">additionalFlashCachePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorageInput">highCapacityDatabaseStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zonesInput">zonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentage">additionalFlashCachePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `highCapacityDatabaseStorage`<sup>Required</sup> <a name="highCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorage"></a>

```java
public OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference getHighCapacityDatabaseStorage();
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeouts"></a>

```java
public OracleExascaleDatabaseStorageVaultTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference">OracleExascaleDatabaseStorageVaultTimeoutsOutputReference</a>

---

##### `additionalFlashCachePercentageInput`<sup>Optional</sup> <a name="additionalFlashCachePercentageInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentageInput"></a>

```java
public java.lang.Number getAdditionalFlashCachePercentageInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `highCapacityDatabaseStorageInput`<sup>Optional</sup> <a name="highCapacityDatabaseStorageInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorageInput"></a>

```java
public OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage getHighCapacityDatabaseStorageInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeoutsInput"></a>

```java
public IResolvable|OracleExascaleDatabaseStorageVaultTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zonesInput"></a>

```java
public java.util.List<java.lang.String> getZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalFlashCachePercentage`<sup>Required</sup> <a name="additionalFlashCachePercentage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentage"></a>

```java
public java.lang.Number getAdditionalFlashCachePercentage();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OracleExascaleDatabaseStorageVaultConfig <a name="OracleExascaleDatabaseStorageVaultConfig" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exascale_database_storage_vault.OracleExascaleDatabaseStorageVaultConfig;

OracleExascaleDatabaseStorageVaultConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .additionalFlashCachePercentage(java.lang.Number)
    .displayName(java.lang.String)
    .highCapacityDatabaseStorage(OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .zones(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OracleExascaleDatabaseStorageVaultTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.additionalFlashCachePercentage">additionalFlashCachePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#additional_flash_cache_percentage OracleExascaleDatabaseStorageVault#additional_flash_cache_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#display_name OracleExascaleDatabaseStorageVault#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.highCapacityDatabaseStorage">highCapacityDatabaseStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | high_capacity_database_storage block. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#location OracleExascaleDatabaseStorageVault#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#name OracleExascaleDatabaseStorageVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#resource_group_name OracleExascaleDatabaseStorageVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#zones OracleExascaleDatabaseStorageVault#zones}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#description OracleExascaleDatabaseStorageVault#description}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#id OracleExascaleDatabaseStorageVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#tags OracleExascaleDatabaseStorageVault#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#time_zone OracleExascaleDatabaseStorageVault#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalFlashCachePercentage`<sup>Required</sup> <a name="additionalFlashCachePercentage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.additionalFlashCachePercentage"></a>

```java
public java.lang.Number getAdditionalFlashCachePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#additional_flash_cache_percentage OracleExascaleDatabaseStorageVault#additional_flash_cache_percentage}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#display_name OracleExascaleDatabaseStorageVault#display_name}.

---

##### `highCapacityDatabaseStorage`<sup>Required</sup> <a name="highCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.highCapacityDatabaseStorage"></a>

```java
public OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage getHighCapacityDatabaseStorage();
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

high_capacity_database_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#high_capacity_database_storage OracleExascaleDatabaseStorageVault#high_capacity_database_storage}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#location OracleExascaleDatabaseStorageVault#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#name OracleExascaleDatabaseStorageVault#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#resource_group_name OracleExascaleDatabaseStorageVault#resource_group_name}.

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#zones OracleExascaleDatabaseStorageVault#zones}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#description OracleExascaleDatabaseStorageVault#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#id OracleExascaleDatabaseStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#tags OracleExascaleDatabaseStorageVault#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeouts"></a>

```java
public OracleExascaleDatabaseStorageVaultTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#timeouts OracleExascaleDatabaseStorageVault#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#time_zone OracleExascaleDatabaseStorageVault#time_zone}.

---

### OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage <a name="OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exascale_database_storage_vault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage;

OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.builder()
    .totalSizeInGb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.property.totalSizeInGb">totalSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#total_size_in_gb OracleExascaleDatabaseStorageVault#total_size_in_gb}. |

---

##### `totalSizeInGb`<sup>Required</sup> <a name="totalSizeInGb" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.property.totalSizeInGb"></a>

```java
public java.lang.Number getTotalSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#total_size_in_gb OracleExascaleDatabaseStorageVault#total_size_in_gb}.

---

### OracleExascaleDatabaseStorageVaultTimeouts <a name="OracleExascaleDatabaseStorageVaultTimeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exascale_database_storage_vault.OracleExascaleDatabaseStorageVaultTimeouts;

OracleExascaleDatabaseStorageVaultTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#create OracleExascaleDatabaseStorageVault#create}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#delete OracleExascaleDatabaseStorageVault#delete}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#read OracleExascaleDatabaseStorageVault#read}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#update OracleExascaleDatabaseStorageVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#create OracleExascaleDatabaseStorageVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#delete OracleExascaleDatabaseStorageVault#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#read OracleExascaleDatabaseStorageVault#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#update OracleExascaleDatabaseStorageVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference <a name="OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exascale_database_storage_vault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference;

new OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGb">availableSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbInput">totalSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGb">totalSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availableSizeInGb`<sup>Required</sup> <a name="availableSizeInGb" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGb"></a>

```java
public java.lang.Number getAvailableSizeInGb();
```

- *Type:* java.lang.Number

---

##### `totalSizeInGbInput`<sup>Optional</sup> <a name="totalSizeInGbInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbInput"></a>

```java
public java.lang.Number getTotalSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `totalSizeInGb`<sup>Required</sup> <a name="totalSizeInGb" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGb"></a>

```java
public java.lang.Number getTotalSizeInGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue"></a>

```java
public OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

---


### OracleExascaleDatabaseStorageVaultTimeoutsOutputReference <a name="OracleExascaleDatabaseStorageVaultTimeoutsOutputReference" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exascale_database_storage_vault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference;

new OracleExascaleDatabaseStorageVaultTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OracleExascaleDatabaseStorageVaultTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

---



