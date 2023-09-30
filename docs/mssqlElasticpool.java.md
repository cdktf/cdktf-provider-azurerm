# `azurerm_mssql_elasticpool`

Refer to the Terraform Registory for docs: [`azurerm_mssql_elasticpool`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool).

# `mssqlElasticpool` Submodule <a name="`mssqlElasticpool` Submodule" id="@cdktf/provider-azurerm.mssqlElasticpool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlElasticpool <a name="MssqlElasticpool" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool azurerm_mssql_elasticpool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_elasticpool.MssqlElasticpool;

MssqlElasticpool.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .perDatabaseSettings(MssqlElasticpoolPerDatabaseSettings)
    .resourceGroupName(java.lang.String)
    .serverName(java.lang.String)
    .sku(MssqlElasticpoolSku)
//  .id(java.lang.String)
//  .licenseType(java.lang.String)
//  .maintenanceConfigurationName(java.lang.String)
//  .maxSizeBytes(java.lang.Number)
//  .maxSizeGb(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MssqlElasticpoolTimeouts)
//  .zoneRedundant(java.lang.Boolean)
//  .zoneRedundant(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#location MssqlElasticpool#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#name MssqlElasticpool#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.perDatabaseSettings">perDatabaseSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a></code> | per_database_settings block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#resource_group_name MssqlElasticpool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#server_name MssqlElasticpool#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#id MssqlElasticpool#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#license_type MssqlElasticpool#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.maintenanceConfigurationName">maintenanceConfigurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#maintenance_configuration_name MssqlElasticpool#maintenance_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.maxSizeBytes">maxSizeBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#max_size_bytes MssqlElasticpool#max_size_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.maxSizeGb">maxSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#max_size_gb MssqlElasticpool#max_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#tags MssqlElasticpool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.zoneRedundant">zoneRedundant</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#zone_redundant MssqlElasticpool#zone_redundant}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#location MssqlElasticpool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#name MssqlElasticpool#name}.

---

##### `perDatabaseSettings`<sup>Required</sup> <a name="perDatabaseSettings" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.perDatabaseSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a>

per_database_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#per_database_settings MssqlElasticpool#per_database_settings}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#resource_group_name MssqlElasticpool#resource_group_name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.serverName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#server_name MssqlElasticpool#server_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.sku"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#sku MssqlElasticpool#sku}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#id MssqlElasticpool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.licenseType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#license_type MssqlElasticpool#license_type}.

---

##### `maintenanceConfigurationName`<sup>Optional</sup> <a name="maintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.maintenanceConfigurationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#maintenance_configuration_name MssqlElasticpool#maintenance_configuration_name}.

---

##### `maxSizeBytes`<sup>Optional</sup> <a name="maxSizeBytes" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.maxSizeBytes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#max_size_bytes MssqlElasticpool#max_size_bytes}.

---

##### `maxSizeGb`<sup>Optional</sup> <a name="maxSizeGb" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.maxSizeGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#max_size_gb MssqlElasticpool#max_size_gb}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#tags MssqlElasticpool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#timeouts MssqlElasticpool#timeouts}

---

##### `zoneRedundant`<sup>Optional</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.zoneRedundant"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#zone_redundant MssqlElasticpool#zone_redundant}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putPerDatabaseSettings">putPerDatabaseSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putSku">putSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetLicenseType">resetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaintenanceConfigurationName">resetMaintenanceConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaxSizeBytes">resetMaxSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaxSizeGb">resetMaxSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetZoneRedundant">resetZoneRedundant</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPerDatabaseSettings` <a name="putPerDatabaseSettings" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putPerDatabaseSettings"></a>

```java
public void putPerDatabaseSettings(MssqlElasticpoolPerDatabaseSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putPerDatabaseSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a>

---

##### `putSku` <a name="putSku" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putSku"></a>

```java
public void putSku(MssqlElasticpoolSku value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putSku.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putTimeouts"></a>

```java
public void putTimeouts(MssqlElasticpoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetId"></a>

```java
public void resetId()
```

##### `resetLicenseType` <a name="resetLicenseType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetLicenseType"></a>

```java
public void resetLicenseType()
```

##### `resetMaintenanceConfigurationName` <a name="resetMaintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaintenanceConfigurationName"></a>

```java
public void resetMaintenanceConfigurationName()
```

##### `resetMaxSizeBytes` <a name="resetMaxSizeBytes" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaxSizeBytes"></a>

```java
public void resetMaxSizeBytes()
```

##### `resetMaxSizeGb` <a name="resetMaxSizeGb" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaxSizeGb"></a>

```java
public void resetMaxSizeGb()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZoneRedundant` <a name="resetZoneRedundant" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetZoneRedundant"></a>

```java
public void resetZoneRedundant()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_elasticpool.MssqlElasticpool;

MssqlElasticpool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_elasticpool.MssqlElasticpool;

MssqlElasticpool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_elasticpool.MssqlElasticpool;

MssqlElasticpool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.perDatabaseSettings">perDatabaseSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference">MssqlElasticpoolPerDatabaseSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference">MssqlElasticpoolSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference">MssqlElasticpoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.licenseTypeInput">licenseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maintenanceConfigurationNameInput">maintenanceConfigurationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeBytesInput">maxSizeBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeGbInput">maxSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.perDatabaseSettingsInput">perDatabaseSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.skuInput">skuInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.zoneRedundantInput">zoneRedundantInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maintenanceConfigurationName">maintenanceConfigurationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeBytes">maxSizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeGb">maxSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.zoneRedundant">zoneRedundant</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `perDatabaseSettings`<sup>Required</sup> <a name="perDatabaseSettings" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.perDatabaseSettings"></a>

```java
public MssqlElasticpoolPerDatabaseSettingsOutputReference getPerDatabaseSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference">MssqlElasticpoolPerDatabaseSettingsOutputReference</a>

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.sku"></a>

```java
public MssqlElasticpoolSkuOutputReference getSku();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference">MssqlElasticpoolSkuOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.timeouts"></a>

```java
public MssqlElasticpoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference">MssqlElasticpoolTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.licenseTypeInput"></a>

```java
public java.lang.String getLicenseTypeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maintenanceConfigurationNameInput`<sup>Optional</sup> <a name="maintenanceConfigurationNameInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maintenanceConfigurationNameInput"></a>

```java
public java.lang.String getMaintenanceConfigurationNameInput();
```

- *Type:* java.lang.String

---

##### `maxSizeBytesInput`<sup>Optional</sup> <a name="maxSizeBytesInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeBytesInput"></a>

```java
public java.lang.Number getMaxSizeBytesInput();
```

- *Type:* java.lang.Number

---

##### `maxSizeGbInput`<sup>Optional</sup> <a name="maxSizeGbInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeGbInput"></a>

```java
public java.lang.Number getMaxSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `perDatabaseSettingsInput`<sup>Optional</sup> <a name="perDatabaseSettingsInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.perDatabaseSettingsInput"></a>

```java
public MssqlElasticpoolPerDatabaseSettings getPerDatabaseSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.skuInput"></a>

```java
public MssqlElasticpoolSku getSkuInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a>

---

##### `zoneRedundantInput`<sup>Optional</sup> <a name="zoneRedundantInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.zoneRedundantInput"></a>

```java
public java.lang.Object getZoneRedundantInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maintenanceConfigurationName`<sup>Required</sup> <a name="maintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maintenanceConfigurationName"></a>

```java
public java.lang.String getMaintenanceConfigurationName();
```

- *Type:* java.lang.String

---

##### `maxSizeBytes`<sup>Required</sup> <a name="maxSizeBytes" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeBytes"></a>

```java
public java.lang.Number getMaxSizeBytes();
```

- *Type:* java.lang.Number

---

##### `maxSizeGb`<sup>Required</sup> <a name="maxSizeGb" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeGb"></a>

```java
public java.lang.Number getMaxSizeGb();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zoneRedundant`<sup>Required</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.zoneRedundant"></a>

```java
public java.lang.Object getZoneRedundant();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlElasticpoolConfig <a name="MssqlElasticpoolConfig" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_elasticpool.MssqlElasticpoolConfig;

MssqlElasticpoolConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .perDatabaseSettings(MssqlElasticpoolPerDatabaseSettings)
    .resourceGroupName(java.lang.String)
    .serverName(java.lang.String)
    .sku(MssqlElasticpoolSku)
//  .id(java.lang.String)
//  .licenseType(java.lang.String)
//  .maintenanceConfigurationName(java.lang.String)
//  .maxSizeBytes(java.lang.Number)
//  .maxSizeGb(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MssqlElasticpoolTimeouts)
//  .zoneRedundant(java.lang.Boolean)
//  .zoneRedundant(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#location MssqlElasticpool#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#name MssqlElasticpool#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.perDatabaseSettings">perDatabaseSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a></code> | per_database_settings block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#resource_group_name MssqlElasticpool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#server_name MssqlElasticpool#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#id MssqlElasticpool#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#license_type MssqlElasticpool#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maintenanceConfigurationName">maintenanceConfigurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#maintenance_configuration_name MssqlElasticpool#maintenance_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maxSizeBytes">maxSizeBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#max_size_bytes MssqlElasticpool#max_size_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maxSizeGb">maxSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#max_size_gb MssqlElasticpool#max_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#tags MssqlElasticpool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.zoneRedundant">zoneRedundant</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#zone_redundant MssqlElasticpool#zone_redundant}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#location MssqlElasticpool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#name MssqlElasticpool#name}.

---

##### `perDatabaseSettings`<sup>Required</sup> <a name="perDatabaseSettings" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.perDatabaseSettings"></a>

```java
public MssqlElasticpoolPerDatabaseSettings getPerDatabaseSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a>

per_database_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#per_database_settings MssqlElasticpool#per_database_settings}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#resource_group_name MssqlElasticpool#resource_group_name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#server_name MssqlElasticpool#server_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.sku"></a>

```java
public MssqlElasticpoolSku getSku();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#sku MssqlElasticpool#sku}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#id MssqlElasticpool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#license_type MssqlElasticpool#license_type}.

---

##### `maintenanceConfigurationName`<sup>Optional</sup> <a name="maintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maintenanceConfigurationName"></a>

```java
public java.lang.String getMaintenanceConfigurationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#maintenance_configuration_name MssqlElasticpool#maintenance_configuration_name}.

---

##### `maxSizeBytes`<sup>Optional</sup> <a name="maxSizeBytes" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maxSizeBytes"></a>

```java
public java.lang.Number getMaxSizeBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#max_size_bytes MssqlElasticpool#max_size_bytes}.

---

##### `maxSizeGb`<sup>Optional</sup> <a name="maxSizeGb" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maxSizeGb"></a>

```java
public java.lang.Number getMaxSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#max_size_gb MssqlElasticpool#max_size_gb}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#tags MssqlElasticpool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.timeouts"></a>

```java
public MssqlElasticpoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#timeouts MssqlElasticpool#timeouts}

---

##### `zoneRedundant`<sup>Optional</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.zoneRedundant"></a>

```java
public java.lang.Object getZoneRedundant();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#zone_redundant MssqlElasticpool#zone_redundant}.

---

### MssqlElasticpoolPerDatabaseSettings <a name="MssqlElasticpoolPerDatabaseSettings" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_elasticpool.MssqlElasticpoolPerDatabaseSettings;

MssqlElasticpoolPerDatabaseSettings.builder()
    .maxCapacity(java.lang.Number)
    .minCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#max_capacity MssqlElasticpool#max_capacity}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#min_capacity MssqlElasticpool#min_capacity}. |

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#max_capacity MssqlElasticpool#max_capacity}.

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#min_capacity MssqlElasticpool#min_capacity}.

---

### MssqlElasticpoolSku <a name="MssqlElasticpoolSku" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_elasticpool.MssqlElasticpoolSku;

MssqlElasticpoolSku.builder()
    .capacity(java.lang.Number)
    .name(java.lang.String)
    .tier(java.lang.String)
//  .family(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#capacity MssqlElasticpool#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#name MssqlElasticpool#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.tier">tier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#tier MssqlElasticpool#tier}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.family">family</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#family MssqlElasticpool#family}. |

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#capacity MssqlElasticpool#capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#name MssqlElasticpool#name}.

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#tier MssqlElasticpool#tier}.

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#family MssqlElasticpool#family}.

---

### MssqlElasticpoolTimeouts <a name="MssqlElasticpoolTimeouts" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_elasticpool.MssqlElasticpoolTimeouts;

MssqlElasticpoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#create MssqlElasticpool#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#delete MssqlElasticpool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#read MssqlElasticpool#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#update MssqlElasticpool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#create MssqlElasticpool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#delete MssqlElasticpool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#read MssqlElasticpool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_elasticpool#update MssqlElasticpool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlElasticpoolPerDatabaseSettingsOutputReference <a name="MssqlElasticpoolPerDatabaseSettingsOutputReference" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_elasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference;

new MssqlElasticpoolPerDatabaseSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.minCapacityInput"></a>

```java
public java.lang.Number getMinCapacityInput();
```

- *Type:* java.lang.Number

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.internalValue"></a>

```java
public MssqlElasticpoolPerDatabaseSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a>

---


### MssqlElasticpoolSkuOutputReference <a name="MssqlElasticpoolSkuOutputReference" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_elasticpool.MssqlElasticpoolSkuOutputReference;

new MssqlElasticpoolSkuOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.resetFamily">resetFamily</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFamily` <a name="resetFamily" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.resetFamily"></a>

```java
public void resetFamily()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.capacityInput">capacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.familyInput">familyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.family">family</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.capacityInput"></a>

```java
public java.lang.Number getCapacityInput();
```

- *Type:* java.lang.Number

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.familyInput"></a>

```java
public java.lang.String getFamilyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.internalValue"></a>

```java
public MssqlElasticpoolSku getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a>

---


### MssqlElasticpoolTimeoutsOutputReference <a name="MssqlElasticpoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_elasticpool.MssqlElasticpoolTimeoutsOutputReference;

new MssqlElasticpoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a>

---



