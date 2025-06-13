# `mssqlManagedInstance` Submodule <a name="`mssqlManagedInstance` Submodule" id="@cdktf/provider-azurerm.mssqlManagedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedInstance <a name="MssqlManagedInstance" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance azurerm_mssql_managed_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance.MssqlManagedInstance;

MssqlManagedInstance.Builder.create(Construct scope, java.lang.String id)
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
    .licenseType(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
    .storageSizeInGb(java.lang.Number)
    .subnetId(java.lang.String)
    .vcores(java.lang.Number)
//  .administratorLogin(java.lang.String)
//  .administratorLoginPassword(java.lang.String)
//  .azureActiveDirectoryAdministrator(MssqlManagedInstanceAzureActiveDirectoryAdministrator)
//  .collation(java.lang.String)
//  .databaseFormat(java.lang.String)
//  .dnsZonePartnerId(java.lang.String)
//  .hybridSecondaryUsage(java.lang.String)
//  .id(java.lang.String)
//  .identity(MssqlManagedInstanceIdentity)
//  .maintenanceConfigurationName(java.lang.String)
//  .minimumTlsVersion(java.lang.String)
//  .proxyOverride(java.lang.String)
//  .publicDataEndpointEnabled(java.lang.Boolean)
//  .publicDataEndpointEnabled(IResolvable)
//  .servicePrincipalType(java.lang.String)
//  .storageAccountType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MssqlManagedInstanceTimeouts)
//  .timezoneId(java.lang.String)
//  .zoneRedundantEnabled(java.lang.Boolean)
//  .zoneRedundantEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#license_type MssqlManagedInstance#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#location MssqlManagedInstance#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#name MssqlManagedInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#resource_group_name MssqlManagedInstance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#sku_name MssqlManagedInstance#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.storageSizeInGb">storageSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#storage_size_in_gb MssqlManagedInstance#storage_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#subnet_id MssqlManagedInstance#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.vcores">vcores</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#vcores MssqlManagedInstance#vcores}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.administratorLogin">administratorLogin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#administrator_login MssqlManagedInstance#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.administratorLoginPassword">administratorLoginPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#administrator_login_password MssqlManagedInstance#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.azureActiveDirectoryAdministrator">azureActiveDirectoryAdministrator</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator">MssqlManagedInstanceAzureActiveDirectoryAdministrator</a></code> | azure_active_directory_administrator block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.collation">collation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#collation MssqlManagedInstance#collation}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.databaseFormat">databaseFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#database_format MssqlManagedInstance#database_format}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.dnsZonePartnerId">dnsZonePartnerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#dns_zone_partner_id MssqlManagedInstance#dns_zone_partner_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.hybridSecondaryUsage">hybridSecondaryUsage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#hybrid_secondary_usage MssqlManagedInstance#hybrid_secondary_usage}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#id MssqlManagedInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.maintenanceConfigurationName">maintenanceConfigurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#maintenance_configuration_name MssqlManagedInstance#maintenance_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#minimum_tls_version MssqlManagedInstance#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.proxyOverride">proxyOverride</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#proxy_override MssqlManagedInstance#proxy_override}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.publicDataEndpointEnabled">publicDataEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#public_data_endpoint_enabled MssqlManagedInstance#public_data_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.servicePrincipalType">servicePrincipalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#service_principal_type MssqlManagedInstance#service_principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#storage_account_type MssqlManagedInstance#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#tags MssqlManagedInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#timezone_id MssqlManagedInstance#timezone_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.zoneRedundantEnabled">zoneRedundantEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#zone_redundant_enabled MssqlManagedInstance#zone_redundant_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.licenseType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#license_type MssqlManagedInstance#license_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#location MssqlManagedInstance#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#name MssqlManagedInstance#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#resource_group_name MssqlManagedInstance#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.skuName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#sku_name MssqlManagedInstance#sku_name}.

---

##### `storageSizeInGb`<sup>Required</sup> <a name="storageSizeInGb" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.storageSizeInGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#storage_size_in_gb MssqlManagedInstance#storage_size_in_gb}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#subnet_id MssqlManagedInstance#subnet_id}.

---

##### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.vcores"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#vcores MssqlManagedInstance#vcores}.

---

##### `administratorLogin`<sup>Optional</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.administratorLogin"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#administrator_login MssqlManagedInstance#administrator_login}.

---

##### `administratorLoginPassword`<sup>Optional</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.administratorLoginPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#administrator_login_password MssqlManagedInstance#administrator_login_password}.

---

##### `azureActiveDirectoryAdministrator`<sup>Optional</sup> <a name="azureActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.azureActiveDirectoryAdministrator"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator">MssqlManagedInstanceAzureActiveDirectoryAdministrator</a>

azure_active_directory_administrator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#azure_active_directory_administrator MssqlManagedInstance#azure_active_directory_administrator}

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.collation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#collation MssqlManagedInstance#collation}.

---

##### `databaseFormat`<sup>Optional</sup> <a name="databaseFormat" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.databaseFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#database_format MssqlManagedInstance#database_format}.

---

##### `dnsZonePartnerId`<sup>Optional</sup> <a name="dnsZonePartnerId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.dnsZonePartnerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#dns_zone_partner_id MssqlManagedInstance#dns_zone_partner_id}.

---

##### `hybridSecondaryUsage`<sup>Optional</sup> <a name="hybridSecondaryUsage" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.hybridSecondaryUsage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#hybrid_secondary_usage MssqlManagedInstance#hybrid_secondary_usage}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#id MssqlManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#identity MssqlManagedInstance#identity}

---

##### `maintenanceConfigurationName`<sup>Optional</sup> <a name="maintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.maintenanceConfigurationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#maintenance_configuration_name MssqlManagedInstance#maintenance_configuration_name}.

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.minimumTlsVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#minimum_tls_version MssqlManagedInstance#minimum_tls_version}.

---

##### `proxyOverride`<sup>Optional</sup> <a name="proxyOverride" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.proxyOverride"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#proxy_override MssqlManagedInstance#proxy_override}.

---

##### `publicDataEndpointEnabled`<sup>Optional</sup> <a name="publicDataEndpointEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.publicDataEndpointEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#public_data_endpoint_enabled MssqlManagedInstance#public_data_endpoint_enabled}.

---

##### `servicePrincipalType`<sup>Optional</sup> <a name="servicePrincipalType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.servicePrincipalType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#service_principal_type MssqlManagedInstance#service_principal_type}.

---

##### `storageAccountType`<sup>Optional</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.storageAccountType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#storage_account_type MssqlManagedInstance#storage_account_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#tags MssqlManagedInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#timeouts MssqlManagedInstance#timeouts}

---

##### `timezoneId`<sup>Optional</sup> <a name="timezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.timezoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#timezone_id MssqlManagedInstance#timezone_id}.

---

##### `zoneRedundantEnabled`<sup>Optional</sup> <a name="zoneRedundantEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.zoneRedundantEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#zone_redundant_enabled MssqlManagedInstance#zone_redundant_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putAzureActiveDirectoryAdministrator">putAzureActiveDirectoryAdministrator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetAdministratorLogin">resetAdministratorLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetAdministratorLoginPassword">resetAdministratorLoginPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetAzureActiveDirectoryAdministrator">resetAzureActiveDirectoryAdministrator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetCollation">resetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetDatabaseFormat">resetDatabaseFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetDnsZonePartnerId">resetDnsZonePartnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetHybridSecondaryUsage">resetHybridSecondaryUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetMaintenanceConfigurationName">resetMaintenanceConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetMinimumTlsVersion">resetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetProxyOverride">resetProxyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetPublicDataEndpointEnabled">resetPublicDataEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetServicePrincipalType">resetServicePrincipalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetStorageAccountType">resetStorageAccountType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTimezoneId">resetTimezoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetZoneRedundantEnabled">resetZoneRedundantEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAzureActiveDirectoryAdministrator` <a name="putAzureActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putAzureActiveDirectoryAdministrator"></a>

```java
public void putAzureActiveDirectoryAdministrator(MssqlManagedInstanceAzureActiveDirectoryAdministrator value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putAzureActiveDirectoryAdministrator.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator">MssqlManagedInstanceAzureActiveDirectoryAdministrator</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putIdentity"></a>

```java
public void putIdentity(MssqlManagedInstanceIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putTimeouts"></a>

```java
public void putTimeouts(MssqlManagedInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a>

---

##### `resetAdministratorLogin` <a name="resetAdministratorLogin" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetAdministratorLogin"></a>

```java
public void resetAdministratorLogin()
```

##### `resetAdministratorLoginPassword` <a name="resetAdministratorLoginPassword" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetAdministratorLoginPassword"></a>

```java
public void resetAdministratorLoginPassword()
```

##### `resetAzureActiveDirectoryAdministrator` <a name="resetAzureActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetAzureActiveDirectoryAdministrator"></a>

```java
public void resetAzureActiveDirectoryAdministrator()
```

##### `resetCollation` <a name="resetCollation" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetCollation"></a>

```java
public void resetCollation()
```

##### `resetDatabaseFormat` <a name="resetDatabaseFormat" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetDatabaseFormat"></a>

```java
public void resetDatabaseFormat()
```

##### `resetDnsZonePartnerId` <a name="resetDnsZonePartnerId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetDnsZonePartnerId"></a>

```java
public void resetDnsZonePartnerId()
```

##### `resetHybridSecondaryUsage` <a name="resetHybridSecondaryUsage" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetHybridSecondaryUsage"></a>

```java
public void resetHybridSecondaryUsage()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetMaintenanceConfigurationName` <a name="resetMaintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetMaintenanceConfigurationName"></a>

```java
public void resetMaintenanceConfigurationName()
```

##### `resetMinimumTlsVersion` <a name="resetMinimumTlsVersion" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetMinimumTlsVersion"></a>

```java
public void resetMinimumTlsVersion()
```

##### `resetProxyOverride` <a name="resetProxyOverride" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetProxyOverride"></a>

```java
public void resetProxyOverride()
```

##### `resetPublicDataEndpointEnabled` <a name="resetPublicDataEndpointEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetPublicDataEndpointEnabled"></a>

```java
public void resetPublicDataEndpointEnabled()
```

##### `resetServicePrincipalType` <a name="resetServicePrincipalType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetServicePrincipalType"></a>

```java
public void resetServicePrincipalType()
```

##### `resetStorageAccountType` <a name="resetStorageAccountType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetStorageAccountType"></a>

```java
public void resetStorageAccountType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimezoneId` <a name="resetTimezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTimezoneId"></a>

```java
public void resetTimezoneId()
```

##### `resetZoneRedundantEnabled` <a name="resetZoneRedundantEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetZoneRedundantEnabled"></a>

```java
public void resetZoneRedundantEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlManagedInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance.MssqlManagedInstance;

MssqlManagedInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance.MssqlManagedInstance;

MssqlManagedInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance.MssqlManagedInstance;

MssqlManagedInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance.MssqlManagedInstance;

MssqlManagedInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MssqlManagedInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MssqlManagedInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MssqlManagedInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MssqlManagedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MssqlManagedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.azureActiveDirectoryAdministrator">azureActiveDirectoryAdministrator</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference">MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZone">dnsZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference">MssqlManagedInstanceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference">MssqlManagedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginInput">administratorLoginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginPasswordInput">administratorLoginPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.azureActiveDirectoryAdministratorInput">azureActiveDirectoryAdministratorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator">MssqlManagedInstanceAzureActiveDirectoryAdministrator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.collationInput">collationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.databaseFormatInput">databaseFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZonePartnerIdInput">dnsZonePartnerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.hybridSecondaryUsageInput">hybridSecondaryUsageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.licenseTypeInput">licenseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.maintenanceConfigurationNameInput">maintenanceConfigurationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.minimumTlsVersionInput">minimumTlsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.proxyOverrideInput">proxyOverrideInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.publicDataEndpointEnabledInput">publicDataEndpointEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.servicePrincipalTypeInput">servicePrincipalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageSizeInGbInput">storageSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timezoneIdInput">timezoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.vcoresInput">vcoresInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.zoneRedundantEnabledInput">zoneRedundantEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLogin">administratorLogin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.collation">collation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.databaseFormat">databaseFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZonePartnerId">dnsZonePartnerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.hybridSecondaryUsage">hybridSecondaryUsage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.maintenanceConfigurationName">maintenanceConfigurationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.proxyOverride">proxyOverride</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.publicDataEndpointEnabled">publicDataEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.servicePrincipalType">servicePrincipalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageSizeInGb">storageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.vcores">vcores</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.zoneRedundantEnabled">zoneRedundantEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `azureActiveDirectoryAdministrator`<sup>Required</sup> <a name="azureActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.azureActiveDirectoryAdministrator"></a>

```java
public MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference getAzureActiveDirectoryAdministrator();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference">MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference</a>

---

##### `dnsZone`<sup>Required</sup> <a name="dnsZone" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZone"></a>

```java
public java.lang.String getDnsZone();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.identity"></a>

```java
public MssqlManagedInstanceIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference">MssqlManagedInstanceIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timeouts"></a>

```java
public MssqlManagedInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference">MssqlManagedInstanceTimeoutsOutputReference</a>

---

##### `administratorLoginInput`<sup>Optional</sup> <a name="administratorLoginInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginInput"></a>

```java
public java.lang.String getAdministratorLoginInput();
```

- *Type:* java.lang.String

---

##### `administratorLoginPasswordInput`<sup>Optional</sup> <a name="administratorLoginPasswordInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginPasswordInput"></a>

```java
public java.lang.String getAdministratorLoginPasswordInput();
```

- *Type:* java.lang.String

---

##### `azureActiveDirectoryAdministratorInput`<sup>Optional</sup> <a name="azureActiveDirectoryAdministratorInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.azureActiveDirectoryAdministratorInput"></a>

```java
public MssqlManagedInstanceAzureActiveDirectoryAdministrator getAzureActiveDirectoryAdministratorInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator">MssqlManagedInstanceAzureActiveDirectoryAdministrator</a>

---

##### `collationInput`<sup>Optional</sup> <a name="collationInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.collationInput"></a>

```java
public java.lang.String getCollationInput();
```

- *Type:* java.lang.String

---

##### `databaseFormatInput`<sup>Optional</sup> <a name="databaseFormatInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.databaseFormatInput"></a>

```java
public java.lang.String getDatabaseFormatInput();
```

- *Type:* java.lang.String

---

##### `dnsZonePartnerIdInput`<sup>Optional</sup> <a name="dnsZonePartnerIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZonePartnerIdInput"></a>

```java
public java.lang.String getDnsZonePartnerIdInput();
```

- *Type:* java.lang.String

---

##### `hybridSecondaryUsageInput`<sup>Optional</sup> <a name="hybridSecondaryUsageInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.hybridSecondaryUsageInput"></a>

```java
public java.lang.String getHybridSecondaryUsageInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.identityInput"></a>

```java
public MssqlManagedInstanceIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.licenseTypeInput"></a>

```java
public java.lang.String getLicenseTypeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maintenanceConfigurationNameInput`<sup>Optional</sup> <a name="maintenanceConfigurationNameInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.maintenanceConfigurationNameInput"></a>

```java
public java.lang.String getMaintenanceConfigurationNameInput();
```

- *Type:* java.lang.String

---

##### `minimumTlsVersionInput`<sup>Optional</sup> <a name="minimumTlsVersionInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.minimumTlsVersionInput"></a>

```java
public java.lang.String getMinimumTlsVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `proxyOverrideInput`<sup>Optional</sup> <a name="proxyOverrideInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.proxyOverrideInput"></a>

```java
public java.lang.String getProxyOverrideInput();
```

- *Type:* java.lang.String

---

##### `publicDataEndpointEnabledInput`<sup>Optional</sup> <a name="publicDataEndpointEnabledInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.publicDataEndpointEnabledInput"></a>

```java
public java.lang.Object getPublicDataEndpointEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalTypeInput`<sup>Optional</sup> <a name="servicePrincipalTypeInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.servicePrincipalTypeInput"></a>

```java
public java.lang.String getServicePrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageAccountTypeInput"></a>

```java
public java.lang.String getStorageAccountTypeInput();
```

- *Type:* java.lang.String

---

##### `storageSizeInGbInput`<sup>Optional</sup> <a name="storageSizeInGbInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageSizeInGbInput"></a>

```java
public java.lang.Number getStorageSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a>

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timezoneIdInput"></a>

```java
public java.lang.String getTimezoneIdInput();
```

- *Type:* java.lang.String

---

##### `vcoresInput`<sup>Optional</sup> <a name="vcoresInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.vcoresInput"></a>

```java
public java.lang.Number getVcoresInput();
```

- *Type:* java.lang.Number

---

##### `zoneRedundantEnabledInput`<sup>Optional</sup> <a name="zoneRedundantEnabledInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.zoneRedundantEnabledInput"></a>

```java
public java.lang.Object getZoneRedundantEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLogin"></a>

```java
public java.lang.String getAdministratorLogin();
```

- *Type:* java.lang.String

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginPassword"></a>

```java
public java.lang.String getAdministratorLoginPassword();
```

- *Type:* java.lang.String

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.collation"></a>

```java
public java.lang.String getCollation();
```

- *Type:* java.lang.String

---

##### `databaseFormat`<sup>Required</sup> <a name="databaseFormat" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.databaseFormat"></a>

```java
public java.lang.String getDatabaseFormat();
```

- *Type:* java.lang.String

---

##### `dnsZonePartnerId`<sup>Required</sup> <a name="dnsZonePartnerId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZonePartnerId"></a>

```java
public java.lang.String getDnsZonePartnerId();
```

- *Type:* java.lang.String

---

##### `hybridSecondaryUsage`<sup>Required</sup> <a name="hybridSecondaryUsage" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.hybridSecondaryUsage"></a>

```java
public java.lang.String getHybridSecondaryUsage();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maintenanceConfigurationName`<sup>Required</sup> <a name="maintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.maintenanceConfigurationName"></a>

```java
public java.lang.String getMaintenanceConfigurationName();
```

- *Type:* java.lang.String

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.minimumTlsVersion"></a>

```java
public java.lang.String getMinimumTlsVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `proxyOverride`<sup>Required</sup> <a name="proxyOverride" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.proxyOverride"></a>

```java
public java.lang.String getProxyOverride();
```

- *Type:* java.lang.String

---

##### `publicDataEndpointEnabled`<sup>Required</sup> <a name="publicDataEndpointEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.publicDataEndpointEnabled"></a>

```java
public java.lang.Object getPublicDataEndpointEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `servicePrincipalType`<sup>Required</sup> <a name="servicePrincipalType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.servicePrincipalType"></a>

```java
public java.lang.String getServicePrincipalType();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

---

##### `storageSizeInGb`<sup>Required</sup> <a name="storageSizeInGb" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageSizeInGb"></a>

```java
public java.lang.Number getStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

---

##### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.vcores"></a>

```java
public java.lang.Number getVcores();
```

- *Type:* java.lang.Number

---

##### `zoneRedundantEnabled`<sup>Required</sup> <a name="zoneRedundantEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.zoneRedundantEnabled"></a>

```java
public java.lang.Object getZoneRedundantEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedInstanceAzureActiveDirectoryAdministrator <a name="MssqlManagedInstanceAzureActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance.MssqlManagedInstanceAzureActiveDirectoryAdministrator;

MssqlManagedInstanceAzureActiveDirectoryAdministrator.builder()
    .loginUsername(java.lang.String)
    .objectId(java.lang.String)
    .principalType(java.lang.String)
//  .azureadAuthenticationOnlyEnabled(java.lang.Boolean)
//  .azureadAuthenticationOnlyEnabled(IResolvable)
//  .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.loginUsername">loginUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#login_username MssqlManagedInstance#login_username}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#object_id MssqlManagedInstance#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#principal_type MssqlManagedInstance#principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.azureadAuthenticationOnlyEnabled">azureadAuthenticationOnlyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#azuread_authentication_only_enabled MssqlManagedInstance#azuread_authentication_only_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#tenant_id MssqlManagedInstance#tenant_id}. |

---

##### `loginUsername`<sup>Required</sup> <a name="loginUsername" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.loginUsername"></a>

```java
public java.lang.String getLoginUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#login_username MssqlManagedInstance#login_username}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#object_id MssqlManagedInstance#object_id}.

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#principal_type MssqlManagedInstance#principal_type}.

---

##### `azureadAuthenticationOnlyEnabled`<sup>Optional</sup> <a name="azureadAuthenticationOnlyEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.azureadAuthenticationOnlyEnabled"></a>

```java
public java.lang.Object getAzureadAuthenticationOnlyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#azuread_authentication_only_enabled MssqlManagedInstance#azuread_authentication_only_enabled}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#tenant_id MssqlManagedInstance#tenant_id}.

---

### MssqlManagedInstanceConfig <a name="MssqlManagedInstanceConfig" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance.MssqlManagedInstanceConfig;

MssqlManagedInstanceConfig.builder()
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
    .licenseType(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
    .storageSizeInGb(java.lang.Number)
    .subnetId(java.lang.String)
    .vcores(java.lang.Number)
//  .administratorLogin(java.lang.String)
//  .administratorLoginPassword(java.lang.String)
//  .azureActiveDirectoryAdministrator(MssqlManagedInstanceAzureActiveDirectoryAdministrator)
//  .collation(java.lang.String)
//  .databaseFormat(java.lang.String)
//  .dnsZonePartnerId(java.lang.String)
//  .hybridSecondaryUsage(java.lang.String)
//  .id(java.lang.String)
//  .identity(MssqlManagedInstanceIdentity)
//  .maintenanceConfigurationName(java.lang.String)
//  .minimumTlsVersion(java.lang.String)
//  .proxyOverride(java.lang.String)
//  .publicDataEndpointEnabled(java.lang.Boolean)
//  .publicDataEndpointEnabled(IResolvable)
//  .servicePrincipalType(java.lang.String)
//  .storageAccountType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MssqlManagedInstanceTimeouts)
//  .timezoneId(java.lang.String)
//  .zoneRedundantEnabled(java.lang.Boolean)
//  .zoneRedundantEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#license_type MssqlManagedInstance#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#location MssqlManagedInstance#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#name MssqlManagedInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#resource_group_name MssqlManagedInstance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#sku_name MssqlManagedInstance#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.storageSizeInGb">storageSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#storage_size_in_gb MssqlManagedInstance#storage_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#subnet_id MssqlManagedInstance#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.vcores">vcores</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#vcores MssqlManagedInstance#vcores}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.administratorLogin">administratorLogin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#administrator_login MssqlManagedInstance#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#administrator_login_password MssqlManagedInstance#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.azureActiveDirectoryAdministrator">azureActiveDirectoryAdministrator</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator">MssqlManagedInstanceAzureActiveDirectoryAdministrator</a></code> | azure_active_directory_administrator block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.collation">collation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#collation MssqlManagedInstance#collation}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.databaseFormat">databaseFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#database_format MssqlManagedInstance#database_format}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.dnsZonePartnerId">dnsZonePartnerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#dns_zone_partner_id MssqlManagedInstance#dns_zone_partner_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.hybridSecondaryUsage">hybridSecondaryUsage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#hybrid_secondary_usage MssqlManagedInstance#hybrid_secondary_usage}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#id MssqlManagedInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.maintenanceConfigurationName">maintenanceConfigurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#maintenance_configuration_name MssqlManagedInstance#maintenance_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#minimum_tls_version MssqlManagedInstance#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.proxyOverride">proxyOverride</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#proxy_override MssqlManagedInstance#proxy_override}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.publicDataEndpointEnabled">publicDataEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#public_data_endpoint_enabled MssqlManagedInstance#public_data_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.servicePrincipalType">servicePrincipalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#service_principal_type MssqlManagedInstance#service_principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#storage_account_type MssqlManagedInstance#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#tags MssqlManagedInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#timezone_id MssqlManagedInstance#timezone_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.zoneRedundantEnabled">zoneRedundantEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#zone_redundant_enabled MssqlManagedInstance#zone_redundant_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#license_type MssqlManagedInstance#license_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#location MssqlManagedInstance#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#name MssqlManagedInstance#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#resource_group_name MssqlManagedInstance#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#sku_name MssqlManagedInstance#sku_name}.

---

##### `storageSizeInGb`<sup>Required</sup> <a name="storageSizeInGb" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.storageSizeInGb"></a>

```java
public java.lang.Number getStorageSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#storage_size_in_gb MssqlManagedInstance#storage_size_in_gb}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#subnet_id MssqlManagedInstance#subnet_id}.

---

##### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.vcores"></a>

```java
public java.lang.Number getVcores();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#vcores MssqlManagedInstance#vcores}.

---

##### `administratorLogin`<sup>Optional</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.administratorLogin"></a>

```java
public java.lang.String getAdministratorLogin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#administrator_login MssqlManagedInstance#administrator_login}.

---

##### `administratorLoginPassword`<sup>Optional</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.administratorLoginPassword"></a>

```java
public java.lang.String getAdministratorLoginPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#administrator_login_password MssqlManagedInstance#administrator_login_password}.

---

##### `azureActiveDirectoryAdministrator`<sup>Optional</sup> <a name="azureActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.azureActiveDirectoryAdministrator"></a>

```java
public MssqlManagedInstanceAzureActiveDirectoryAdministrator getAzureActiveDirectoryAdministrator();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator">MssqlManagedInstanceAzureActiveDirectoryAdministrator</a>

azure_active_directory_administrator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#azure_active_directory_administrator MssqlManagedInstance#azure_active_directory_administrator}

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.collation"></a>

```java
public java.lang.String getCollation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#collation MssqlManagedInstance#collation}.

---

##### `databaseFormat`<sup>Optional</sup> <a name="databaseFormat" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.databaseFormat"></a>

```java
public java.lang.String getDatabaseFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#database_format MssqlManagedInstance#database_format}.

---

##### `dnsZonePartnerId`<sup>Optional</sup> <a name="dnsZonePartnerId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.dnsZonePartnerId"></a>

```java
public java.lang.String getDnsZonePartnerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#dns_zone_partner_id MssqlManagedInstance#dns_zone_partner_id}.

---

##### `hybridSecondaryUsage`<sup>Optional</sup> <a name="hybridSecondaryUsage" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.hybridSecondaryUsage"></a>

```java
public java.lang.String getHybridSecondaryUsage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#hybrid_secondary_usage MssqlManagedInstance#hybrid_secondary_usage}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#id MssqlManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.identity"></a>

```java
public MssqlManagedInstanceIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#identity MssqlManagedInstance#identity}

---

##### `maintenanceConfigurationName`<sup>Optional</sup> <a name="maintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.maintenanceConfigurationName"></a>

```java
public java.lang.String getMaintenanceConfigurationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#maintenance_configuration_name MssqlManagedInstance#maintenance_configuration_name}.

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.minimumTlsVersion"></a>

```java
public java.lang.String getMinimumTlsVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#minimum_tls_version MssqlManagedInstance#minimum_tls_version}.

---

##### `proxyOverride`<sup>Optional</sup> <a name="proxyOverride" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.proxyOverride"></a>

```java
public java.lang.String getProxyOverride();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#proxy_override MssqlManagedInstance#proxy_override}.

---

##### `publicDataEndpointEnabled`<sup>Optional</sup> <a name="publicDataEndpointEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.publicDataEndpointEnabled"></a>

```java
public java.lang.Object getPublicDataEndpointEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#public_data_endpoint_enabled MssqlManagedInstance#public_data_endpoint_enabled}.

---

##### `servicePrincipalType`<sup>Optional</sup> <a name="servicePrincipalType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.servicePrincipalType"></a>

```java
public java.lang.String getServicePrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#service_principal_type MssqlManagedInstance#service_principal_type}.

---

##### `storageAccountType`<sup>Optional</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#storage_account_type MssqlManagedInstance#storage_account_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#tags MssqlManagedInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.timeouts"></a>

```java
public MssqlManagedInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#timeouts MssqlManagedInstance#timeouts}

---

##### `timezoneId`<sup>Optional</sup> <a name="timezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#timezone_id MssqlManagedInstance#timezone_id}.

---

##### `zoneRedundantEnabled`<sup>Optional</sup> <a name="zoneRedundantEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.zoneRedundantEnabled"></a>

```java
public java.lang.Object getZoneRedundantEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#zone_redundant_enabled MssqlManagedInstance#zone_redundant_enabled}.

---

### MssqlManagedInstanceIdentity <a name="MssqlManagedInstanceIdentity" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance.MssqlManagedInstanceIdentity;

MssqlManagedInstanceIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#type MssqlManagedInstance#type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#identity_ids MssqlManagedInstance#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#type MssqlManagedInstance#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#identity_ids MssqlManagedInstance#identity_ids}.

---

### MssqlManagedInstanceTimeouts <a name="MssqlManagedInstanceTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance.MssqlManagedInstanceTimeouts;

MssqlManagedInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#create MssqlManagedInstance#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#delete MssqlManagedInstance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#read MssqlManagedInstance#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#update MssqlManagedInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#create MssqlManagedInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#delete MssqlManagedInstance#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#read MssqlManagedInstance#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/mssql_managed_instance#update MssqlManagedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference <a name="MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference;

new MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.resetAzureadAuthenticationOnlyEnabled">resetAzureadAuthenticationOnlyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAzureadAuthenticationOnlyEnabled` <a name="resetAzureadAuthenticationOnlyEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.resetAzureadAuthenticationOnlyEnabled"></a>

```java
public void resetAzureadAuthenticationOnlyEnabled()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.resetTenantId"></a>

```java
public void resetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.azureadAuthenticationOnlyEnabledInput">azureadAuthenticationOnlyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.loginUsernameInput">loginUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.azureadAuthenticationOnlyEnabled">azureadAuthenticationOnlyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.loginUsername">loginUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator">MssqlManagedInstanceAzureActiveDirectoryAdministrator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureadAuthenticationOnlyEnabledInput`<sup>Optional</sup> <a name="azureadAuthenticationOnlyEnabledInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.azureadAuthenticationOnlyEnabledInput"></a>

```java
public java.lang.Object getAzureadAuthenticationOnlyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loginUsernameInput`<sup>Optional</sup> <a name="loginUsernameInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.loginUsernameInput"></a>

```java
public java.lang.String getLoginUsernameInput();
```

- *Type:* java.lang.String

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `azureadAuthenticationOnlyEnabled`<sup>Required</sup> <a name="azureadAuthenticationOnlyEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.azureadAuthenticationOnlyEnabled"></a>

```java
public java.lang.Object getAzureadAuthenticationOnlyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loginUsername`<sup>Required</sup> <a name="loginUsername" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.loginUsername"></a>

```java
public java.lang.String getLoginUsername();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.internalValue"></a>

```java
public MssqlManagedInstanceAzureActiveDirectoryAdministrator getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator">MssqlManagedInstanceAzureActiveDirectoryAdministrator</a>

---


### MssqlManagedInstanceIdentityOutputReference <a name="MssqlManagedInstanceIdentityOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance.MssqlManagedInstanceIdentityOutputReference;

new MssqlManagedInstanceIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.internalValue"></a>

```java
public MssqlManagedInstanceIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a>

---


### MssqlManagedInstanceTimeoutsOutputReference <a name="MssqlManagedInstanceTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance.MssqlManagedInstanceTimeoutsOutputReference;

new MssqlManagedInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a>

---



