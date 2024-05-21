# `sqlManagedInstance` Submodule <a name="`sqlManagedInstance` Submodule" id="@cdktf/provider-azurerm.sqlManagedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlManagedInstance <a name="SqlManagedInstance" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance azurerm_sql_managed_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance.SqlManagedInstance;

SqlManagedInstance.Builder.create(Construct scope, java.lang.String id)
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
    .administratorLogin(java.lang.String)
    .administratorLoginPassword(java.lang.String)
    .licenseType(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
    .storageSizeInGb(java.lang.Number)
    .subnetId(java.lang.String)
    .vcores(java.lang.Number)
//  .collation(java.lang.String)
//  .dnsZonePartnerId(java.lang.String)
//  .id(java.lang.String)
//  .identity(SqlManagedInstanceIdentity)
//  .minimumTlsVersion(java.lang.String)
//  .proxyOverride(java.lang.String)
//  .publicDataEndpointEnabled(java.lang.Boolean)
//  .publicDataEndpointEnabled(IResolvable)
//  .storageAccountType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SqlManagedInstanceTimeouts)
//  .timezoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.administratorLogin">administratorLogin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#administrator_login SqlManagedInstance#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.administratorLoginPassword">administratorLoginPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#administrator_login_password SqlManagedInstance#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#license_type SqlManagedInstance#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#location SqlManagedInstance#location}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#name SqlManagedInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#resource_group_name SqlManagedInstance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#sku_name SqlManagedInstance#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.storageSizeInGb">storageSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#storage_size_in_gb SqlManagedInstance#storage_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#subnet_id SqlManagedInstance#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.vcores">vcores</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#vcores SqlManagedInstance#vcores}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.collation">collation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#collation SqlManagedInstance#collation}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.dnsZonePartnerId">dnsZonePartnerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#dns_zone_partner_id SqlManagedInstance#dns_zone_partner_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#id SqlManagedInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity">SqlManagedInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#minimum_tls_version SqlManagedInstance#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.proxyOverride">proxyOverride</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#proxy_override SqlManagedInstance#proxy_override}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.publicDataEndpointEnabled">publicDataEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#public_data_endpoint_enabled SqlManagedInstance#public_data_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#storage_account_type SqlManagedInstance#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#tags SqlManagedInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts">SqlManagedInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#timezone_id SqlManagedInstance#timezone_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.administratorLogin"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#administrator_login SqlManagedInstance#administrator_login}.

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.administratorLoginPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#administrator_login_password SqlManagedInstance#administrator_login_password}.

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.licenseType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#license_type SqlManagedInstance#license_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#location SqlManagedInstance#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#name SqlManagedInstance#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#resource_group_name SqlManagedInstance#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.skuName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#sku_name SqlManagedInstance#sku_name}.

---

##### `storageSizeInGb`<sup>Required</sup> <a name="storageSizeInGb" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.storageSizeInGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#storage_size_in_gb SqlManagedInstance#storage_size_in_gb}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#subnet_id SqlManagedInstance#subnet_id}.

---

##### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.vcores"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#vcores SqlManagedInstance#vcores}.

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.collation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#collation SqlManagedInstance#collation}.

---

##### `dnsZonePartnerId`<sup>Optional</sup> <a name="dnsZonePartnerId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.dnsZonePartnerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#dns_zone_partner_id SqlManagedInstance#dns_zone_partner_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#id SqlManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity">SqlManagedInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#identity SqlManagedInstance#identity}

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.minimumTlsVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#minimum_tls_version SqlManagedInstance#minimum_tls_version}.

---

##### `proxyOverride`<sup>Optional</sup> <a name="proxyOverride" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.proxyOverride"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#proxy_override SqlManagedInstance#proxy_override}.

---

##### `publicDataEndpointEnabled`<sup>Optional</sup> <a name="publicDataEndpointEnabled" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.publicDataEndpointEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#public_data_endpoint_enabled SqlManagedInstance#public_data_endpoint_enabled}.

---

##### `storageAccountType`<sup>Optional</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.storageAccountType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#storage_account_type SqlManagedInstance#storage_account_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#tags SqlManagedInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts">SqlManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#timeouts SqlManagedInstance#timeouts}

---

##### `timezoneId`<sup>Optional</sup> <a name="timezoneId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.timezoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#timezone_id SqlManagedInstance#timezone_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetCollation">resetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetDnsZonePartnerId">resetDnsZonePartnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetMinimumTlsVersion">resetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetProxyOverride">resetProxyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetPublicDataEndpointEnabled">resetPublicDataEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetStorageAccountType">resetStorageAccountType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetTimezoneId">resetTimezoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.putIdentity"></a>

```java
public void putIdentity(SqlManagedInstanceIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity">SqlManagedInstanceIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.putTimeouts"></a>

```java
public void putTimeouts(SqlManagedInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts">SqlManagedInstanceTimeouts</a>

---

##### `resetCollation` <a name="resetCollation" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetCollation"></a>

```java
public void resetCollation()
```

##### `resetDnsZonePartnerId` <a name="resetDnsZonePartnerId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetDnsZonePartnerId"></a>

```java
public void resetDnsZonePartnerId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetMinimumTlsVersion` <a name="resetMinimumTlsVersion" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetMinimumTlsVersion"></a>

```java
public void resetMinimumTlsVersion()
```

##### `resetProxyOverride` <a name="resetProxyOverride" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetProxyOverride"></a>

```java
public void resetProxyOverride()
```

##### `resetPublicDataEndpointEnabled` <a name="resetPublicDataEndpointEnabled" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetPublicDataEndpointEnabled"></a>

```java
public void resetPublicDataEndpointEnabled()
```

##### `resetStorageAccountType` <a name="resetStorageAccountType" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetStorageAccountType"></a>

```java
public void resetStorageAccountType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimezoneId` <a name="resetTimezoneId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetTimezoneId"></a>

```java
public void resetTimezoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqlManagedInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance.SqlManagedInstance;

SqlManagedInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance.SqlManagedInstance;

SqlManagedInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance.SqlManagedInstance;

SqlManagedInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance.SqlManagedInstance;

SqlManagedInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SqlManagedInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SqlManagedInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SqlManagedInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SqlManagedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SqlManagedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference">SqlManagedInstanceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference">SqlManagedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.administratorLoginInput">administratorLoginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.administratorLoginPasswordInput">administratorLoginPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.collationInput">collationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.dnsZonePartnerIdInput">dnsZonePartnerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity">SqlManagedInstanceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.licenseTypeInput">licenseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.minimumTlsVersionInput">minimumTlsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.proxyOverrideInput">proxyOverrideInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.publicDataEndpointEnabledInput">publicDataEndpointEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.storageSizeInGbInput">storageSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts">SqlManagedInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.timezoneIdInput">timezoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.vcoresInput">vcoresInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.administratorLogin">administratorLogin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.collation">collation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.dnsZonePartnerId">dnsZonePartnerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.proxyOverride">proxyOverride</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.publicDataEndpointEnabled">publicDataEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.storageSizeInGb">storageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.vcores">vcores</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.identity"></a>

```java
public SqlManagedInstanceIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference">SqlManagedInstanceIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.timeouts"></a>

```java
public SqlManagedInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference">SqlManagedInstanceTimeoutsOutputReference</a>

---

##### `administratorLoginInput`<sup>Optional</sup> <a name="administratorLoginInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.administratorLoginInput"></a>

```java
public java.lang.String getAdministratorLoginInput();
```

- *Type:* java.lang.String

---

##### `administratorLoginPasswordInput`<sup>Optional</sup> <a name="administratorLoginPasswordInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.administratorLoginPasswordInput"></a>

```java
public java.lang.String getAdministratorLoginPasswordInput();
```

- *Type:* java.lang.String

---

##### `collationInput`<sup>Optional</sup> <a name="collationInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.collationInput"></a>

```java
public java.lang.String getCollationInput();
```

- *Type:* java.lang.String

---

##### `dnsZonePartnerIdInput`<sup>Optional</sup> <a name="dnsZonePartnerIdInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.dnsZonePartnerIdInput"></a>

```java
public java.lang.String getDnsZonePartnerIdInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.identityInput"></a>

```java
public SqlManagedInstanceIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity">SqlManagedInstanceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.licenseTypeInput"></a>

```java
public java.lang.String getLicenseTypeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `minimumTlsVersionInput`<sup>Optional</sup> <a name="minimumTlsVersionInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.minimumTlsVersionInput"></a>

```java
public java.lang.String getMinimumTlsVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `proxyOverrideInput`<sup>Optional</sup> <a name="proxyOverrideInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.proxyOverrideInput"></a>

```java
public java.lang.String getProxyOverrideInput();
```

- *Type:* java.lang.String

---

##### `publicDataEndpointEnabledInput`<sup>Optional</sup> <a name="publicDataEndpointEnabledInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.publicDataEndpointEnabledInput"></a>

```java
public java.lang.Object getPublicDataEndpointEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.storageAccountTypeInput"></a>

```java
public java.lang.String getStorageAccountTypeInput();
```

- *Type:* java.lang.String

---

##### `storageSizeInGbInput`<sup>Optional</sup> <a name="storageSizeInGbInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.storageSizeInGbInput"></a>

```java
public java.lang.Number getStorageSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts">SqlManagedInstanceTimeouts</a>

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.timezoneIdInput"></a>

```java
public java.lang.String getTimezoneIdInput();
```

- *Type:* java.lang.String

---

##### `vcoresInput`<sup>Optional</sup> <a name="vcoresInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.vcoresInput"></a>

```java
public java.lang.Number getVcoresInput();
```

- *Type:* java.lang.Number

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.administratorLogin"></a>

```java
public java.lang.String getAdministratorLogin();
```

- *Type:* java.lang.String

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.administratorLoginPassword"></a>

```java
public java.lang.String getAdministratorLoginPassword();
```

- *Type:* java.lang.String

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.collation"></a>

```java
public java.lang.String getCollation();
```

- *Type:* java.lang.String

---

##### `dnsZonePartnerId`<sup>Required</sup> <a name="dnsZonePartnerId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.dnsZonePartnerId"></a>

```java
public java.lang.String getDnsZonePartnerId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.minimumTlsVersion"></a>

```java
public java.lang.String getMinimumTlsVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `proxyOverride`<sup>Required</sup> <a name="proxyOverride" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.proxyOverride"></a>

```java
public java.lang.String getProxyOverride();
```

- *Type:* java.lang.String

---

##### `publicDataEndpointEnabled`<sup>Required</sup> <a name="publicDataEndpointEnabled" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.publicDataEndpointEnabled"></a>

```java
public java.lang.Object getPublicDataEndpointEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

---

##### `storageSizeInGb`<sup>Required</sup> <a name="storageSizeInGb" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.storageSizeInGb"></a>

```java
public java.lang.Number getStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

---

##### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.vcores"></a>

```java
public java.lang.Number getVcores();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SqlManagedInstanceConfig <a name="SqlManagedInstanceConfig" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance.SqlManagedInstanceConfig;

SqlManagedInstanceConfig.builder()
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
    .administratorLogin(java.lang.String)
    .administratorLoginPassword(java.lang.String)
    .licenseType(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
    .storageSizeInGb(java.lang.Number)
    .subnetId(java.lang.String)
    .vcores(java.lang.Number)
//  .collation(java.lang.String)
//  .dnsZonePartnerId(java.lang.String)
//  .id(java.lang.String)
//  .identity(SqlManagedInstanceIdentity)
//  .minimumTlsVersion(java.lang.String)
//  .proxyOverride(java.lang.String)
//  .publicDataEndpointEnabled(java.lang.Boolean)
//  .publicDataEndpointEnabled(IResolvable)
//  .storageAccountType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SqlManagedInstanceTimeouts)
//  .timezoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.administratorLogin">administratorLogin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#administrator_login SqlManagedInstance#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#administrator_login_password SqlManagedInstance#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#license_type SqlManagedInstance#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#location SqlManagedInstance#location}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#name SqlManagedInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#resource_group_name SqlManagedInstance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#sku_name SqlManagedInstance#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.storageSizeInGb">storageSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#storage_size_in_gb SqlManagedInstance#storage_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#subnet_id SqlManagedInstance#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.vcores">vcores</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#vcores SqlManagedInstance#vcores}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.collation">collation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#collation SqlManagedInstance#collation}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.dnsZonePartnerId">dnsZonePartnerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#dns_zone_partner_id SqlManagedInstance#dns_zone_partner_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#id SqlManagedInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity">SqlManagedInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#minimum_tls_version SqlManagedInstance#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.proxyOverride">proxyOverride</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#proxy_override SqlManagedInstance#proxy_override}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.publicDataEndpointEnabled">publicDataEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#public_data_endpoint_enabled SqlManagedInstance#public_data_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#storage_account_type SqlManagedInstance#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#tags SqlManagedInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts">SqlManagedInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#timezone_id SqlManagedInstance#timezone_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.administratorLogin"></a>

```java
public java.lang.String getAdministratorLogin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#administrator_login SqlManagedInstance#administrator_login}.

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.administratorLoginPassword"></a>

```java
public java.lang.String getAdministratorLoginPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#administrator_login_password SqlManagedInstance#administrator_login_password}.

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#license_type SqlManagedInstance#license_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#location SqlManagedInstance#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#name SqlManagedInstance#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#resource_group_name SqlManagedInstance#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#sku_name SqlManagedInstance#sku_name}.

---

##### `storageSizeInGb`<sup>Required</sup> <a name="storageSizeInGb" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.storageSizeInGb"></a>

```java
public java.lang.Number getStorageSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#storage_size_in_gb SqlManagedInstance#storage_size_in_gb}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#subnet_id SqlManagedInstance#subnet_id}.

---

##### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.vcores"></a>

```java
public java.lang.Number getVcores();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#vcores SqlManagedInstance#vcores}.

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.collation"></a>

```java
public java.lang.String getCollation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#collation SqlManagedInstance#collation}.

---

##### `dnsZonePartnerId`<sup>Optional</sup> <a name="dnsZonePartnerId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.dnsZonePartnerId"></a>

```java
public java.lang.String getDnsZonePartnerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#dns_zone_partner_id SqlManagedInstance#dns_zone_partner_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#id SqlManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.identity"></a>

```java
public SqlManagedInstanceIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity">SqlManagedInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#identity SqlManagedInstance#identity}

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.minimumTlsVersion"></a>

```java
public java.lang.String getMinimumTlsVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#minimum_tls_version SqlManagedInstance#minimum_tls_version}.

---

##### `proxyOverride`<sup>Optional</sup> <a name="proxyOverride" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.proxyOverride"></a>

```java
public java.lang.String getProxyOverride();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#proxy_override SqlManagedInstance#proxy_override}.

---

##### `publicDataEndpointEnabled`<sup>Optional</sup> <a name="publicDataEndpointEnabled" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.publicDataEndpointEnabled"></a>

```java
public java.lang.Object getPublicDataEndpointEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#public_data_endpoint_enabled SqlManagedInstance#public_data_endpoint_enabled}.

---

##### `storageAccountType`<sup>Optional</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#storage_account_type SqlManagedInstance#storage_account_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#tags SqlManagedInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.timeouts"></a>

```java
public SqlManagedInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts">SqlManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#timeouts SqlManagedInstance#timeouts}

---

##### `timezoneId`<sup>Optional</sup> <a name="timezoneId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#timezone_id SqlManagedInstance#timezone_id}.

---

### SqlManagedInstanceIdentity <a name="SqlManagedInstanceIdentity" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance.SqlManagedInstanceIdentity;

SqlManagedInstanceIdentity.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#type SqlManagedInstance#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#type SqlManagedInstance#type}.

---

### SqlManagedInstanceTimeouts <a name="SqlManagedInstanceTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance.SqlManagedInstanceTimeouts;

SqlManagedInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#create SqlManagedInstance#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#delete SqlManagedInstance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#read SqlManagedInstance#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#update SqlManagedInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#create SqlManagedInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#delete SqlManagedInstance#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#read SqlManagedInstance#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_managed_instance#update SqlManagedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlManagedInstanceIdentityOutputReference <a name="SqlManagedInstanceIdentityOutputReference" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance.SqlManagedInstanceIdentityOutputReference;

new SqlManagedInstanceIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity">SqlManagedInstanceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.internalValue"></a>

```java
public SqlManagedInstanceIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity">SqlManagedInstanceIdentity</a>

---


### SqlManagedInstanceTimeoutsOutputReference <a name="SqlManagedInstanceTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance.SqlManagedInstanceTimeoutsOutputReference;

new SqlManagedInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts">SqlManagedInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts">SqlManagedInstanceTimeouts</a>

---



