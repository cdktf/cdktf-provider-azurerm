# `linuxWebApp` Submodule <a name="`linuxWebApp` Submodule" id="@cdktf/provider-azurerm.linuxWebApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LinuxWebApp <a name="LinuxWebApp" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app azurerm_linux_web_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebApp;

LinuxWebApp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .servicePlanId(java.lang.String)
    .siteConfig(LinuxWebAppSiteConfig)
//  .appSettings(java.util.Map<java.lang.String, java.lang.String>)
//  .authSettings(LinuxWebAppAuthSettings)
//  .backup(LinuxWebAppBackup)
//  .clientAffinityEnabled(java.lang.Boolean)
//  .clientAffinityEnabled(IResolvable)
//  .clientCertificateEnabled(java.lang.Boolean)
//  .clientCertificateEnabled(IResolvable)
//  .clientCertificateExclusionPaths(java.lang.String)
//  .clientCertificateMode(java.lang.String)
//  .connectionString(IResolvable)
//  .connectionString(java.util.List<LinuxWebAppConnectionString>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .httpsOnly(java.lang.Boolean)
//  .httpsOnly(IResolvable)
//  .id(java.lang.String)
//  .identity(LinuxWebAppIdentity)
//  .keyVaultReferenceIdentityId(java.lang.String)
//  .logs(LinuxWebAppLogs)
//  .stickySettings(LinuxWebAppStickySettings)
//  .storageAccount(IResolvable)
//  .storageAccount(java.util.List<LinuxWebAppStorageAccount>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LinuxWebAppTimeouts)
//  .virtualNetworkSubnetId(java.lang.String)
//  .zipDeployFile(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#location LinuxWebApp#location}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#name LinuxWebApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#resource_group_name LinuxWebApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.servicePlanId">servicePlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#service_plan_id LinuxWebApp#service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig">LinuxWebAppSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.appSettings">appSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#app_settings LinuxWebApp#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings">LinuxWebAppAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup">LinuxWebAppBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.clientAffinityEnabled">clientAffinityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_affinity_enabled LinuxWebApp#client_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.clientCertificateEnabled">clientCertificateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_certificate_enabled LinuxWebApp#client_certificate_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.clientCertificateExclusionPaths">clientCertificateExclusionPaths</a></code> | <code>java.lang.String</code> | Paths to exclude when using client certificates, separated by ; |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.clientCertificateMode">clientCertificateMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_certificate_mode LinuxWebApp#client_certificate_mode}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.connectionString">connectionString</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString">LinuxWebAppConnectionString</a>></code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#enabled LinuxWebApp#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#https_only LinuxWebApp#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#id LinuxWebApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentity">LinuxWebAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#key_vault_reference_identity_id LinuxWebApp#key_vault_reference_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs">LinuxWebAppLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.stickySettings">stickySettings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettings">LinuxWebAppStickySettings</a></code> | sticky_settings block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.storageAccount">storageAccount</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount">LinuxWebAppStorageAccount</a>></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#tags LinuxWebApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts">LinuxWebAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#virtual_network_subnet_id LinuxWebApp#virtual_network_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.zipDeployFile">zipDeployFile</a></code> | <code>java.lang.String</code> | The local path and filename of the Zip packaged application to deploy to this Windows Web App. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#location LinuxWebApp#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#name LinuxWebApp#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#resource_group_name LinuxWebApp#resource_group_name}.

---

##### `servicePlanId`<sup>Required</sup> <a name="servicePlanId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.servicePlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#service_plan_id LinuxWebApp#service_plan_id}.

---

##### `siteConfig`<sup>Required</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.siteConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig">LinuxWebAppSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#site_config LinuxWebApp#site_config}

---

##### `appSettings`<sup>Optional</sup> <a name="appSettings" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.appSettings"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#app_settings LinuxWebApp#app_settings}.

---

##### `authSettings`<sup>Optional</sup> <a name="authSettings" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.authSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings">LinuxWebAppAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#auth_settings LinuxWebApp#auth_settings}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.backup"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup">LinuxWebAppBackup</a>

backup block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#backup LinuxWebApp#backup}

---

##### `clientAffinityEnabled`<sup>Optional</sup> <a name="clientAffinityEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.clientAffinityEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_affinity_enabled LinuxWebApp#client_affinity_enabled}.

---

##### `clientCertificateEnabled`<sup>Optional</sup> <a name="clientCertificateEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.clientCertificateEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_certificate_enabled LinuxWebApp#client_certificate_enabled}.

---

##### `clientCertificateExclusionPaths`<sup>Optional</sup> <a name="clientCertificateExclusionPaths" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.clientCertificateExclusionPaths"></a>

- *Type:* java.lang.String

Paths to exclude when using client certificates, separated by ;

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_certificate_exclusion_paths LinuxWebApp#client_certificate_exclusion_paths}

---

##### `clientCertificateMode`<sup>Optional</sup> <a name="clientCertificateMode" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.clientCertificateMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_certificate_mode LinuxWebApp#client_certificate_mode}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.connectionString"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString">LinuxWebAppConnectionString</a>>

connection_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#connection_string LinuxWebApp#connection_string}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#enabled LinuxWebApp#enabled}.

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.httpsOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#https_only LinuxWebApp#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#id LinuxWebApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentity">LinuxWebAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#identity LinuxWebApp#identity}

---

##### `keyVaultReferenceIdentityId`<sup>Optional</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.keyVaultReferenceIdentityId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#key_vault_reference_identity_id LinuxWebApp#key_vault_reference_identity_id}.

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.logs"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs">LinuxWebAppLogs</a>

logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#logs LinuxWebApp#logs}

---

##### `stickySettings`<sup>Optional</sup> <a name="stickySettings" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.stickySettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettings">LinuxWebAppStickySettings</a>

sticky_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#sticky_settings LinuxWebApp#sticky_settings}

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.storageAccount"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount">LinuxWebAppStorageAccount</a>>

storage_account block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#storage_account LinuxWebApp#storage_account}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#tags LinuxWebApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts">LinuxWebAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#timeouts LinuxWebApp#timeouts}

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.virtualNetworkSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#virtual_network_subnet_id LinuxWebApp#virtual_network_subnet_id}.

---

##### `zipDeployFile`<sup>Optional</sup> <a name="zipDeployFile" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.Initializer.parameter.zipDeployFile"></a>

- *Type:* java.lang.String

The local path and filename of the Zip packaged application to deploy to this Windows Web App.

**Note:** Using this value requires `WEBSITE_RUN_FROM_PACKAGE=1` on the App in `app_settings`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#zip_deploy_file LinuxWebApp#zip_deploy_file}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putAuthSettings">putAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putBackup">putBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putConnectionString">putConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putLogs">putLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putSiteConfig">putSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putStickySettings">putStickySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putStorageAccount">putStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetAppSettings">resetAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetAuthSettings">resetAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetBackup">resetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetClientAffinityEnabled">resetClientAffinityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetClientCertificateEnabled">resetClientCertificateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetClientCertificateExclusionPaths">resetClientCertificateExclusionPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetClientCertificateMode">resetClientCertificateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetHttpsOnly">resetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetKeyVaultReferenceIdentityId">resetKeyVaultReferenceIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetLogs">resetLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetStickySettings">resetStickySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetStorageAccount">resetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetZipDeployFile">resetZipDeployFile</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAuthSettings` <a name="putAuthSettings" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putAuthSettings"></a>

```java
public void putAuthSettings(LinuxWebAppAuthSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putAuthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings">LinuxWebAppAuthSettings</a>

---

##### `putBackup` <a name="putBackup" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putBackup"></a>

```java
public void putBackup(LinuxWebAppBackup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup">LinuxWebAppBackup</a>

---

##### `putConnectionString` <a name="putConnectionString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putConnectionString"></a>

```java
public void putConnectionString(IResolvable OR java.util.List<LinuxWebAppConnectionString> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putConnectionString.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString">LinuxWebAppConnectionString</a>>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putIdentity"></a>

```java
public void putIdentity(LinuxWebAppIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentity">LinuxWebAppIdentity</a>

---

##### `putLogs` <a name="putLogs" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putLogs"></a>

```java
public void putLogs(LinuxWebAppLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs">LinuxWebAppLogs</a>

---

##### `putSiteConfig` <a name="putSiteConfig" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putSiteConfig"></a>

```java
public void putSiteConfig(LinuxWebAppSiteConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putSiteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig">LinuxWebAppSiteConfig</a>

---

##### `putStickySettings` <a name="putStickySettings" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putStickySettings"></a>

```java
public void putStickySettings(LinuxWebAppStickySettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putStickySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettings">LinuxWebAppStickySettings</a>

---

##### `putStorageAccount` <a name="putStorageAccount" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putStorageAccount"></a>

```java
public void putStorageAccount(IResolvable OR java.util.List<LinuxWebAppStorageAccount> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putStorageAccount.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount">LinuxWebAppStorageAccount</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putTimeouts"></a>

```java
public void putTimeouts(LinuxWebAppTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts">LinuxWebAppTimeouts</a>

---

##### `resetAppSettings` <a name="resetAppSettings" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetAppSettings"></a>

```java
public void resetAppSettings()
```

##### `resetAuthSettings` <a name="resetAuthSettings" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetAuthSettings"></a>

```java
public void resetAuthSettings()
```

##### `resetBackup` <a name="resetBackup" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetBackup"></a>

```java
public void resetBackup()
```

##### `resetClientAffinityEnabled` <a name="resetClientAffinityEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetClientAffinityEnabled"></a>

```java
public void resetClientAffinityEnabled()
```

##### `resetClientCertificateEnabled` <a name="resetClientCertificateEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetClientCertificateEnabled"></a>

```java
public void resetClientCertificateEnabled()
```

##### `resetClientCertificateExclusionPaths` <a name="resetClientCertificateExclusionPaths" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetClientCertificateExclusionPaths"></a>

```java
public void resetClientCertificateExclusionPaths()
```

##### `resetClientCertificateMode` <a name="resetClientCertificateMode" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetClientCertificateMode"></a>

```java
public void resetClientCertificateMode()
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetConnectionString"></a>

```java
public void resetConnectionString()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetHttpsOnly` <a name="resetHttpsOnly" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetHttpsOnly"></a>

```java
public void resetHttpsOnly()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetKeyVaultReferenceIdentityId` <a name="resetKeyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetKeyVaultReferenceIdentityId"></a>

```java
public void resetKeyVaultReferenceIdentityId()
```

##### `resetLogs` <a name="resetLogs" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetLogs"></a>

```java
public void resetLogs()
```

##### `resetStickySettings` <a name="resetStickySettings" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetStickySettings"></a>

```java
public void resetStickySettings()
```

##### `resetStorageAccount` <a name="resetStorageAccount" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetStorageAccount"></a>

```java
public void resetStorageAccount()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetVirtualNetworkSubnetId"></a>

```java
public void resetVirtualNetworkSubnetId()
```

##### `resetZipDeployFile` <a name="resetZipDeployFile" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.resetZipDeployFile"></a>

```java
public void resetZipDeployFile()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebApp;

LinuxWebApp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebApp;

LinuxWebApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebApp;

LinuxWebApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference">LinuxWebAppAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference">LinuxWebAppBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.connectionString">connectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList">LinuxWebAppConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.customDomainVerificationId">customDomainVerificationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.defaultHostname">defaultHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference">LinuxWebAppIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference">LinuxWebAppLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.outboundIpAddresses">outboundIpAddresses</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.outboundIpAddressList">outboundIpAddressList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.possibleOutboundIpAddresses">possibleOutboundIpAddresses</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.possibleOutboundIpAddressList">possibleOutboundIpAddressList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference">LinuxWebAppSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.siteCredential">siteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList">LinuxWebAppSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.stickySettings">stickySettings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference">LinuxWebAppStickySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList">LinuxWebAppStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference">LinuxWebAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.appSettingsInput">appSettingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.authSettingsInput">authSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings">LinuxWebAppAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.backupInput">backupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup">LinuxWebAppBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.clientAffinityEnabledInput">clientAffinityEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.clientCertificateEnabledInput">clientCertificateEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.clientCertificateExclusionPathsInput">clientCertificateExclusionPathsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.clientCertificateModeInput">clientCertificateModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.connectionStringInput">connectionStringInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString">LinuxWebAppConnectionString</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.httpsOnlyInput">httpsOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentity">LinuxWebAppIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.keyVaultReferenceIdentityIdInput">keyVaultReferenceIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.logsInput">logsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs">LinuxWebAppLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.servicePlanIdInput">servicePlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.siteConfigInput">siteConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig">LinuxWebAppSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.stickySettingsInput">stickySettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettings">LinuxWebAppStickySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.storageAccountInput">storageAccountInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount">LinuxWebAppStorageAccount</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts">LinuxWebAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.zipDeployFileInput">zipDeployFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.appSettings">appSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.clientAffinityEnabled">clientAffinityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.clientCertificateEnabled">clientCertificateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.clientCertificateExclusionPaths">clientCertificateExclusionPaths</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.clientCertificateMode">clientCertificateMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.servicePlanId">servicePlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.zipDeployFile">zipDeployFile</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authSettings`<sup>Required</sup> <a name="authSettings" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.authSettings"></a>

```java
public LinuxWebAppAuthSettingsOutputReference getAuthSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference">LinuxWebAppAuthSettingsOutputReference</a>

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.backup"></a>

```java
public LinuxWebAppBackupOutputReference getBackup();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference">LinuxWebAppBackupOutputReference</a>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.connectionString"></a>

```java
public LinuxWebAppConnectionStringList getConnectionString();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList">LinuxWebAppConnectionStringList</a>

---

##### `customDomainVerificationId`<sup>Required</sup> <a name="customDomainVerificationId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.customDomainVerificationId"></a>

```java
public java.lang.String getCustomDomainVerificationId();
```

- *Type:* java.lang.String

---

##### `defaultHostname`<sup>Required</sup> <a name="defaultHostname" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.defaultHostname"></a>

```java
public java.lang.String getDefaultHostname();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.identity"></a>

```java
public LinuxWebAppIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference">LinuxWebAppIdentityOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.logs"></a>

```java
public LinuxWebAppLogsOutputReference getLogs();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference">LinuxWebAppLogsOutputReference</a>

---

##### `outboundIpAddresses`<sup>Required</sup> <a name="outboundIpAddresses" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.outboundIpAddresses"></a>

```java
public java.lang.String getOutboundIpAddresses();
```

- *Type:* java.lang.String

---

##### `outboundIpAddressList`<sup>Required</sup> <a name="outboundIpAddressList" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.outboundIpAddressList"></a>

```java
public java.util.List<java.lang.String> getOutboundIpAddressList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `possibleOutboundIpAddresses`<sup>Required</sup> <a name="possibleOutboundIpAddresses" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.possibleOutboundIpAddresses"></a>

```java
public java.lang.String getPossibleOutboundIpAddresses();
```

- *Type:* java.lang.String

---

##### `possibleOutboundIpAddressList`<sup>Required</sup> <a name="possibleOutboundIpAddressList" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.possibleOutboundIpAddressList"></a>

```java
public java.util.List<java.lang.String> getPossibleOutboundIpAddressList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `siteConfig`<sup>Required</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.siteConfig"></a>

```java
public LinuxWebAppSiteConfigOutputReference getSiteConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference">LinuxWebAppSiteConfigOutputReference</a>

---

##### `siteCredential`<sup>Required</sup> <a name="siteCredential" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.siteCredential"></a>

```java
public LinuxWebAppSiteCredentialList getSiteCredential();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList">LinuxWebAppSiteCredentialList</a>

---

##### `stickySettings`<sup>Required</sup> <a name="stickySettings" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.stickySettings"></a>

```java
public LinuxWebAppStickySettingsOutputReference getStickySettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference">LinuxWebAppStickySettingsOutputReference</a>

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.storageAccount"></a>

```java
public LinuxWebAppStorageAccountList getStorageAccount();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList">LinuxWebAppStorageAccountList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.timeouts"></a>

```java
public LinuxWebAppTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference">LinuxWebAppTimeoutsOutputReference</a>

---

##### `appSettingsInput`<sup>Optional</sup> <a name="appSettingsInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.appSettingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAppSettingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authSettingsInput`<sup>Optional</sup> <a name="authSettingsInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.authSettingsInput"></a>

```java
public LinuxWebAppAuthSettings getAuthSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings">LinuxWebAppAuthSettings</a>

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.backupInput"></a>

```java
public LinuxWebAppBackup getBackupInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup">LinuxWebAppBackup</a>

---

##### `clientAffinityEnabledInput`<sup>Optional</sup> <a name="clientAffinityEnabledInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.clientAffinityEnabledInput"></a>

```java
public java.lang.Object getClientAffinityEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientCertificateEnabledInput`<sup>Optional</sup> <a name="clientCertificateEnabledInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.clientCertificateEnabledInput"></a>

```java
public java.lang.Object getClientCertificateEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientCertificateExclusionPathsInput`<sup>Optional</sup> <a name="clientCertificateExclusionPathsInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.clientCertificateExclusionPathsInput"></a>

```java
public java.lang.String getClientCertificateExclusionPathsInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateModeInput`<sup>Optional</sup> <a name="clientCertificateModeInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.clientCertificateModeInput"></a>

```java
public java.lang.String getClientCertificateModeInput();
```

- *Type:* java.lang.String

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.connectionStringInput"></a>

```java
public java.lang.Object getConnectionStringInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString">LinuxWebAppConnectionString</a>>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpsOnlyInput`<sup>Optional</sup> <a name="httpsOnlyInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.httpsOnlyInput"></a>

```java
public java.lang.Object getHttpsOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.identityInput"></a>

```java
public LinuxWebAppIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentity">LinuxWebAppIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultReferenceIdentityIdInput`<sup>Optional</sup> <a name="keyVaultReferenceIdentityIdInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.keyVaultReferenceIdentityIdInput"></a>

```java
public java.lang.String getKeyVaultReferenceIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `logsInput`<sup>Optional</sup> <a name="logsInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.logsInput"></a>

```java
public LinuxWebAppLogs getLogsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs">LinuxWebAppLogs</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `servicePlanIdInput`<sup>Optional</sup> <a name="servicePlanIdInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.servicePlanIdInput"></a>

```java
public java.lang.String getServicePlanIdInput();
```

- *Type:* java.lang.String

---

##### `siteConfigInput`<sup>Optional</sup> <a name="siteConfigInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.siteConfigInput"></a>

```java
public LinuxWebAppSiteConfig getSiteConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig">LinuxWebAppSiteConfig</a>

---

##### `stickySettingsInput`<sup>Optional</sup> <a name="stickySettingsInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.stickySettingsInput"></a>

```java
public LinuxWebAppStickySettings getStickySettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettings">LinuxWebAppStickySettings</a>

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.storageAccountInput"></a>

```java
public java.lang.Object getStorageAccountInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount">LinuxWebAppStorageAccount</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts">LinuxWebAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.virtualNetworkSubnetIdInput"></a>

```java
public java.lang.String getVirtualNetworkSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `zipDeployFileInput`<sup>Optional</sup> <a name="zipDeployFileInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.zipDeployFileInput"></a>

```java
public java.lang.String getZipDeployFileInput();
```

- *Type:* java.lang.String

---

##### `appSettings`<sup>Required</sup> <a name="appSettings" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.appSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAppSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `clientAffinityEnabled`<sup>Required</sup> <a name="clientAffinityEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.clientAffinityEnabled"></a>

```java
public java.lang.Object getClientAffinityEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientCertificateEnabled`<sup>Required</sup> <a name="clientCertificateEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.clientCertificateEnabled"></a>

```java
public java.lang.Object getClientCertificateEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientCertificateExclusionPaths`<sup>Required</sup> <a name="clientCertificateExclusionPaths" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.clientCertificateExclusionPaths"></a>

```java
public java.lang.String getClientCertificateExclusionPaths();
```

- *Type:* java.lang.String

---

##### `clientCertificateMode`<sup>Required</sup> <a name="clientCertificateMode" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.clientCertificateMode"></a>

```java
public java.lang.String getClientCertificateMode();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpsOnly`<sup>Required</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.httpsOnly"></a>

```java
public java.lang.Object getHttpsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyVaultReferenceIdentityId`<sup>Required</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.keyVaultReferenceIdentityId"></a>

```java
public java.lang.String getKeyVaultReferenceIdentityId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `servicePlanId`<sup>Required</sup> <a name="servicePlanId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.servicePlanId"></a>

```java
public java.lang.String getServicePlanId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

---

##### `zipDeployFile`<sup>Required</sup> <a name="zipDeployFile" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.zipDeployFile"></a>

```java
public java.lang.String getZipDeployFile();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LinuxWebAppAuthSettings <a name="LinuxWebAppAuthSettings" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppAuthSettings;

LinuxWebAppAuthSettings.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .activeDirectory(LinuxWebAppAuthSettingsActiveDirectory)
//  .additionalLoginParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .allowedExternalRedirectUrls(java.util.List<java.lang.String>)
//  .defaultProvider(java.lang.String)
//  .facebook(LinuxWebAppAuthSettingsFacebook)
//  .github(LinuxWebAppAuthSettingsGithub)
//  .google(LinuxWebAppAuthSettingsGoogle)
//  .issuer(java.lang.String)
//  .microsoft(LinuxWebAppAuthSettingsMicrosoft)
//  .runtimeVersion(java.lang.String)
//  .tokenRefreshExtensionHours(java.lang.Number)
//  .tokenStoreEnabled(java.lang.Boolean)
//  .tokenStoreEnabled(IResolvable)
//  .twitter(LinuxWebAppAuthSettingsTwitter)
//  .unauthenticatedClientAction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the Authentication / Authorization feature be enabled? |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectory">LinuxWebAppAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.additionalLoginParameters">additionalLoginParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies a map of Login Parameters to send to the OpenID Connect authorization endpoint when a user logs in. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>java.util.List<java.lang.String></code> | Specifies a list of External URLs that can be redirected to as part of logging in or logging out of the Windows Web App. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.defaultProvider">defaultProvider</a></code> | <code>java.lang.String</code> | The default authentication provider to use when multiple providers are configured. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebook">LinuxWebAppAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.github">github</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithub">LinuxWebAppAuthSettingsGithub</a></code> | github block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogle">LinuxWebAppAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.issuer">issuer</a></code> | <code>java.lang.String</code> | The OpenID Connect Issuer URI that represents the entity which issues access tokens. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoft">LinuxWebAppAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | The RuntimeVersion of the Authentication / Authorization feature in use. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>java.lang.Number</code> | The number of hours after session token expiration that a session token can be used to call the token refresh API. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the Windows Web App durably store platform-specific security tokens that are obtained during login flows? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitter">LinuxWebAppAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>java.lang.String</code> | The action to take when an unauthenticated client attempts to access the app. Possible values include: `RedirectToLoginPage`, `AllowAnonymous`. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the Authentication / Authorization feature be enabled?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#enabled LinuxWebApp#enabled}

---

##### `activeDirectory`<sup>Optional</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.activeDirectory"></a>

```java
public LinuxWebAppAuthSettingsActiveDirectory getActiveDirectory();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectory">LinuxWebAppAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#active_directory LinuxWebApp#active_directory}

---

##### `additionalLoginParameters`<sup>Optional</sup> <a name="additionalLoginParameters" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.additionalLoginParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalLoginParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies a map of Login Parameters to send to the OpenID Connect authorization endpoint when a user logs in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#additional_login_parameters LinuxWebApp#additional_login_parameters}

---

##### `allowedExternalRedirectUrls`<sup>Optional</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.allowedExternalRedirectUrls"></a>

```java
public java.util.List<java.lang.String> getAllowedExternalRedirectUrls();
```

- *Type:* java.util.List<java.lang.String>

Specifies a list of External URLs that can be redirected to as part of logging in or logging out of the Windows Web App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#allowed_external_redirect_urls LinuxWebApp#allowed_external_redirect_urls}

---

##### `defaultProvider`<sup>Optional</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.defaultProvider"></a>

```java
public java.lang.String getDefaultProvider();
```

- *Type:* java.lang.String

The default authentication provider to use when multiple providers are configured.

Possible values include: `AzureActiveDirectory`, `Facebook`, `Google`, `MicrosoftAccount`, `Twitter`, `Github`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#default_provider LinuxWebApp#default_provider}

---

##### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.facebook"></a>

```java
public LinuxWebAppAuthSettingsFacebook getFacebook();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebook">LinuxWebAppAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#facebook LinuxWebApp#facebook}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.github"></a>

```java
public LinuxWebAppAuthSettingsGithub getGithub();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithub">LinuxWebAppAuthSettingsGithub</a>

github block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#github LinuxWebApp#github}

---

##### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.google"></a>

```java
public LinuxWebAppAuthSettingsGoogle getGoogle();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogle">LinuxWebAppAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#google LinuxWebApp#google}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

The OpenID Connect Issuer URI that represents the entity which issues access tokens.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#issuer LinuxWebApp#issuer}

---

##### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.microsoft"></a>

```java
public LinuxWebAppAuthSettingsMicrosoft getMicrosoft();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoft">LinuxWebAppAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#microsoft LinuxWebApp#microsoft}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

The RuntimeVersion of the Authentication / Authorization feature in use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#runtime_version LinuxWebApp#runtime_version}

---

##### `tokenRefreshExtensionHours`<sup>Optional</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.tokenRefreshExtensionHours"></a>

```java
public java.lang.Number getTokenRefreshExtensionHours();
```

- *Type:* java.lang.Number

The number of hours after session token expiration that a session token can be used to call the token refresh API.

Defaults to `72` hours.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#token_refresh_extension_hours LinuxWebApp#token_refresh_extension_hours}

---

##### `tokenStoreEnabled`<sup>Optional</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.tokenStoreEnabled"></a>

```java
public java.lang.Object getTokenStoreEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the Windows Web App durably store platform-specific security tokens that are obtained during login flows? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#token_store_enabled LinuxWebApp#token_store_enabled}

---

##### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.twitter"></a>

```java
public LinuxWebAppAuthSettingsTwitter getTwitter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitter">LinuxWebAppAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#twitter LinuxWebApp#twitter}

---

##### `unauthenticatedClientAction`<sup>Optional</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings.property.unauthenticatedClientAction"></a>

```java
public java.lang.String getUnauthenticatedClientAction();
```

- *Type:* java.lang.String

The action to take when an unauthenticated client attempts to access the app. Possible values include: `RedirectToLoginPage`, `AllowAnonymous`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#unauthenticated_client_action LinuxWebApp#unauthenticated_client_action}

---

### LinuxWebAppAuthSettingsActiveDirectory <a name="LinuxWebAppAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppAuthSettingsActiveDirectory;

LinuxWebAppAuthSettingsActiveDirectory.builder()
    .clientId(java.lang.String)
//  .allowedAudiences(java.util.List<java.lang.String>)
//  .clientSecret(java.lang.String)
//  .clientSecretSettingName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectory.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The ID of the Client to use to authenticate with Azure Active Directory. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectory.property.allowedAudiences">allowedAudiences</a></code> | <code>java.util.List<java.lang.String></code> | Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectory.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The Client Secret for the Client ID. Cannot be used with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectory.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>java.lang.String</code> | The App Setting name that contains the client secret of the Client. Cannot be used with `client_secret`. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectory.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The ID of the Client to use to authenticate with Azure Active Directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_id LinuxWebApp#client_id}

---

##### `allowedAudiences`<sup>Optional</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiences();
```

- *Type:* java.util.List<java.lang.String>

Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#allowed_audiences LinuxWebApp#allowed_audiences}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectory.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The Client Secret for the Client ID. Cannot be used with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_secret LinuxWebApp#client_secret}

---

##### `clientSecretSettingName`<sup>Optional</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectory.property.clientSecretSettingName"></a>

```java
public java.lang.String getClientSecretSettingName();
```

- *Type:* java.lang.String

The App Setting name that contains the client secret of the Client. Cannot be used with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_secret_setting_name LinuxWebApp#client_secret_setting_name}

---

### LinuxWebAppAuthSettingsFacebook <a name="LinuxWebAppAuthSettingsFacebook" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppAuthSettingsFacebook;

LinuxWebAppAuthSettingsFacebook.builder()
    .appId(java.lang.String)
//  .appSecret(java.lang.String)
//  .appSecretSettingName(java.lang.String)
//  .oauthScopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebook.property.appId">appId</a></code> | <code>java.lang.String</code> | The App ID of the Facebook app used for login. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebook.property.appSecret">appSecret</a></code> | <code>java.lang.String</code> | The App Secret of the Facebook app used for Facebook Login. Cannot be specified with `app_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebook.property.appSecretSettingName">appSecretSettingName</a></code> | <code>java.lang.String</code> | The app setting name that contains the `app_secret` value used for Facebook Login. Cannot be specified with `app_secret`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebook.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | Specifies a list of OAuth 2.0 scopes to be requested as part of Facebook Login authentication. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebook.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

The App ID of the Facebook app used for login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#app_id LinuxWebApp#app_id}

---

##### `appSecret`<sup>Optional</sup> <a name="appSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebook.property.appSecret"></a>

```java
public java.lang.String getAppSecret();
```

- *Type:* java.lang.String

The App Secret of the Facebook app used for Facebook Login. Cannot be specified with `app_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#app_secret LinuxWebApp#app_secret}

---

##### `appSecretSettingName`<sup>Optional</sup> <a name="appSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebook.property.appSecretSettingName"></a>

```java
public java.lang.String getAppSecretSettingName();
```

- *Type:* java.lang.String

The app setting name that contains the `app_secret` value used for Facebook Login. Cannot be specified with `app_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#app_secret_setting_name LinuxWebApp#app_secret_setting_name}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebook.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

Specifies a list of OAuth 2.0 scopes to be requested as part of Facebook Login authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#oauth_scopes LinuxWebApp#oauth_scopes}

---

### LinuxWebAppAuthSettingsGithub <a name="LinuxWebAppAuthSettingsGithub" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppAuthSettingsGithub;

LinuxWebAppAuthSettingsGithub.builder()
    .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .clientSecretSettingName(java.lang.String)
//  .oauthScopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithub.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The ID of the GitHub app used for login. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithub.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The Client Secret of the GitHub app used for GitHub Login. Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithub.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>java.lang.String</code> | The app setting name that contains the `client_secret` value used for GitHub Login. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithub.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithub.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The ID of the GitHub app used for login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_id LinuxWebApp#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithub.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The Client Secret of the GitHub app used for GitHub Login. Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_secret LinuxWebApp#client_secret}

---

##### `clientSecretSettingName`<sup>Optional</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithub.property.clientSecretSettingName"></a>

```java
public java.lang.String getClientSecretSettingName();
```

- *Type:* java.lang.String

The app setting name that contains the `client_secret` value used for GitHub Login. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_secret_setting_name LinuxWebApp#client_secret_setting_name}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithub.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#oauth_scopes LinuxWebApp#oauth_scopes}

---

### LinuxWebAppAuthSettingsGoogle <a name="LinuxWebAppAuthSettingsGoogle" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppAuthSettingsGoogle;

LinuxWebAppAuthSettingsGoogle.builder()
    .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .clientSecretSettingName(java.lang.String)
//  .oauthScopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogle.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The OpenID Connect Client ID for the Google web application. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogle.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The client secret associated with the Google web application.  Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogle.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>java.lang.String</code> | The app setting name that contains the `client_secret` value used for Google Login. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogle.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | Specifies a list of OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication. If not specified, "openid", "profile", and "email" are used as default scopes. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogle.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The OpenID Connect Client ID for the Google web application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_id LinuxWebApp#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogle.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The client secret associated with the Google web application.  Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_secret LinuxWebApp#client_secret}

---

##### `clientSecretSettingName`<sup>Optional</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogle.property.clientSecretSettingName"></a>

```java
public java.lang.String getClientSecretSettingName();
```

- *Type:* java.lang.String

The app setting name that contains the `client_secret` value used for Google Login. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_secret_setting_name LinuxWebApp#client_secret_setting_name}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogle.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

Specifies a list of OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication. If not specified, "openid", "profile", and "email" are used as default scopes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#oauth_scopes LinuxWebApp#oauth_scopes}

---

### LinuxWebAppAuthSettingsMicrosoft <a name="LinuxWebAppAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoft.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppAuthSettingsMicrosoft;

LinuxWebAppAuthSettingsMicrosoft.builder()
    .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .clientSecretSettingName(java.lang.String)
//  .oauthScopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoft.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The OAuth 2.0 client ID that was created for the app used for authentication. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoft.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoft.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>java.lang.String</code> | The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoft.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | The list of OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication. If not specified, `wl.basic` is used as the default scope. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoft.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The OAuth 2.0 client ID that was created for the app used for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_id LinuxWebApp#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoft.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_secret LinuxWebApp#client_secret}

---

##### `clientSecretSettingName`<sup>Optional</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoft.property.clientSecretSettingName"></a>

```java
public java.lang.String getClientSecretSettingName();
```

- *Type:* java.lang.String

The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_secret_setting_name LinuxWebApp#client_secret_setting_name}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoft.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

The list of OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication. If not specified, `wl.basic` is used as the default scope.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#oauth_scopes LinuxWebApp#oauth_scopes}

---

### LinuxWebAppAuthSettingsTwitter <a name="LinuxWebAppAuthSettingsTwitter" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppAuthSettingsTwitter;

LinuxWebAppAuthSettingsTwitter.builder()
    .consumerKey(java.lang.String)
//  .consumerSecret(java.lang.String)
//  .consumerSecretSettingName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitter.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | The OAuth 1.0a consumer key of the Twitter application used for sign-in. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitter.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | The OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitter.property.consumerSecretSettingName">consumerSecretSettingName</a></code> | <code>java.lang.String</code> | The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret`. |

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitter.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

The OAuth 1.0a consumer key of the Twitter application used for sign-in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#consumer_key LinuxWebApp#consumer_key}

---

##### `consumerSecret`<sup>Optional</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitter.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

The OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#consumer_secret LinuxWebApp#consumer_secret}

---

##### `consumerSecretSettingName`<sup>Optional</sup> <a name="consumerSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitter.property.consumerSecretSettingName"></a>

```java
public java.lang.String getConsumerSecretSettingName();
```

- *Type:* java.lang.String

The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#consumer_secret_setting_name LinuxWebApp#consumer_secret_setting_name}

---

### LinuxWebAppBackup <a name="LinuxWebAppBackup" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppBackup;

LinuxWebAppBackup.builder()
    .name(java.lang.String)
    .schedule(LinuxWebAppBackupSchedule)
    .storageAccountUrl(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup.property.name">name</a></code> | <code>java.lang.String</code> | The name which should be used for this Backup. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule">LinuxWebAppBackupSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup.property.storageAccountUrl">storageAccountUrl</a></code> | <code>java.lang.String</code> | The SAS URL to the container. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should this backup job be enabled? |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name which should be used for this Backup.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#name LinuxWebApp#name}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup.property.schedule"></a>

```java
public LinuxWebAppBackupSchedule getSchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule">LinuxWebAppBackupSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#schedule LinuxWebApp#schedule}

---

##### `storageAccountUrl`<sup>Required</sup> <a name="storageAccountUrl" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup.property.storageAccountUrl"></a>

```java
public java.lang.String getStorageAccountUrl();
```

- *Type:* java.lang.String

The SAS URL to the container.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#storage_account_url LinuxWebApp#storage_account_url}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should this backup job be enabled?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#enabled LinuxWebApp#enabled}

---

### LinuxWebAppBackupSchedule <a name="LinuxWebAppBackupSchedule" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppBackupSchedule;

LinuxWebAppBackupSchedule.builder()
    .frequencyInterval(java.lang.Number)
    .frequencyUnit(java.lang.String)
//  .keepAtLeastOneBackup(java.lang.Boolean)
//  .keepAtLeastOneBackup(IResolvable)
//  .retentionPeriodDays(java.lang.Number)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | How often the backup should be executed (e.g. for weekly backup, this should be set to `7` and `frequency_unit` should be set to `Day`). |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule.property.frequencyUnit">frequencyUnit</a></code> | <code>java.lang.String</code> | The unit of time for how often the backup should take place. Possible values include: `Day` and `Hour`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule.property.keepAtLeastOneBackup">keepAtLeastOneBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the service keep at least one backup, regardless of age of backup. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>java.lang.Number</code> | After how many days backups should be deleted. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule.property.startTime">startTime</a></code> | <code>java.lang.String</code> | When the schedule should start working in RFC-3339 format. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

How often the backup should be executed (e.g. for weekly backup, this should be set to `7` and `frequency_unit` should be set to `Day`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#frequency_interval LinuxWebApp#frequency_interval}

---

##### `frequencyUnit`<sup>Required</sup> <a name="frequencyUnit" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule.property.frequencyUnit"></a>

```java
public java.lang.String getFrequencyUnit();
```

- *Type:* java.lang.String

The unit of time for how often the backup should take place. Possible values include: `Day` and `Hour`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#frequency_unit LinuxWebApp#frequency_unit}

---

##### `keepAtLeastOneBackup`<sup>Optional</sup> <a name="keepAtLeastOneBackup" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule.property.keepAtLeastOneBackup"></a>

```java
public java.lang.Object getKeepAtLeastOneBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the service keep at least one backup, regardless of age of backup. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#keep_at_least_one_backup LinuxWebApp#keep_at_least_one_backup}

---

##### `retentionPeriodDays`<sup>Optional</sup> <a name="retentionPeriodDays" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule.property.retentionPeriodDays"></a>

```java
public java.lang.Number getRetentionPeriodDays();
```

- *Type:* java.lang.Number

After how many days backups should be deleted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#retention_period_days LinuxWebApp#retention_period_days}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

When the schedule should start working in RFC-3339 format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#start_time LinuxWebApp#start_time}

---

### LinuxWebAppConfig <a name="LinuxWebAppConfig" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppConfig;

LinuxWebAppConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .servicePlanId(java.lang.String)
    .siteConfig(LinuxWebAppSiteConfig)
//  .appSettings(java.util.Map<java.lang.String, java.lang.String>)
//  .authSettings(LinuxWebAppAuthSettings)
//  .backup(LinuxWebAppBackup)
//  .clientAffinityEnabled(java.lang.Boolean)
//  .clientAffinityEnabled(IResolvable)
//  .clientCertificateEnabled(java.lang.Boolean)
//  .clientCertificateEnabled(IResolvable)
//  .clientCertificateExclusionPaths(java.lang.String)
//  .clientCertificateMode(java.lang.String)
//  .connectionString(IResolvable)
//  .connectionString(java.util.List<LinuxWebAppConnectionString>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .httpsOnly(java.lang.Boolean)
//  .httpsOnly(IResolvable)
//  .id(java.lang.String)
//  .identity(LinuxWebAppIdentity)
//  .keyVaultReferenceIdentityId(java.lang.String)
//  .logs(LinuxWebAppLogs)
//  .stickySettings(LinuxWebAppStickySettings)
//  .storageAccount(IResolvable)
//  .storageAccount(java.util.List<LinuxWebAppStorageAccount>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LinuxWebAppTimeouts)
//  .virtualNetworkSubnetId(java.lang.String)
//  .zipDeployFile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#location LinuxWebApp#location}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#name LinuxWebApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#resource_group_name LinuxWebApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.servicePlanId">servicePlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#service_plan_id LinuxWebApp#service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig">LinuxWebAppSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.appSettings">appSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#app_settings LinuxWebApp#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings">LinuxWebAppAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup">LinuxWebAppBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.clientAffinityEnabled">clientAffinityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_affinity_enabled LinuxWebApp#client_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.clientCertificateEnabled">clientCertificateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_certificate_enabled LinuxWebApp#client_certificate_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.clientCertificateExclusionPaths">clientCertificateExclusionPaths</a></code> | <code>java.lang.String</code> | Paths to exclude when using client certificates, separated by ; |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.clientCertificateMode">clientCertificateMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_certificate_mode LinuxWebApp#client_certificate_mode}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.connectionString">connectionString</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString">LinuxWebAppConnectionString</a>></code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#enabled LinuxWebApp#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#https_only LinuxWebApp#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#id LinuxWebApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentity">LinuxWebAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#key_vault_reference_identity_id LinuxWebApp#key_vault_reference_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs">LinuxWebAppLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.stickySettings">stickySettings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettings">LinuxWebAppStickySettings</a></code> | sticky_settings block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.storageAccount">storageAccount</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount">LinuxWebAppStorageAccount</a>></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#tags LinuxWebApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts">LinuxWebAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#virtual_network_subnet_id LinuxWebApp#virtual_network_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.zipDeployFile">zipDeployFile</a></code> | <code>java.lang.String</code> | The local path and filename of the Zip packaged application to deploy to this Windows Web App. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#location LinuxWebApp#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#name LinuxWebApp#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#resource_group_name LinuxWebApp#resource_group_name}.

---

##### `servicePlanId`<sup>Required</sup> <a name="servicePlanId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.servicePlanId"></a>

```java
public java.lang.String getServicePlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#service_plan_id LinuxWebApp#service_plan_id}.

---

##### `siteConfig`<sup>Required</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.siteConfig"></a>

```java
public LinuxWebAppSiteConfig getSiteConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig">LinuxWebAppSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#site_config LinuxWebApp#site_config}

---

##### `appSettings`<sup>Optional</sup> <a name="appSettings" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.appSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAppSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#app_settings LinuxWebApp#app_settings}.

---

##### `authSettings`<sup>Optional</sup> <a name="authSettings" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.authSettings"></a>

```java
public LinuxWebAppAuthSettings getAuthSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings">LinuxWebAppAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#auth_settings LinuxWebApp#auth_settings}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.backup"></a>

```java
public LinuxWebAppBackup getBackup();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup">LinuxWebAppBackup</a>

backup block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#backup LinuxWebApp#backup}

---

##### `clientAffinityEnabled`<sup>Optional</sup> <a name="clientAffinityEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.clientAffinityEnabled"></a>

```java
public java.lang.Object getClientAffinityEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_affinity_enabled LinuxWebApp#client_affinity_enabled}.

---

##### `clientCertificateEnabled`<sup>Optional</sup> <a name="clientCertificateEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.clientCertificateEnabled"></a>

```java
public java.lang.Object getClientCertificateEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_certificate_enabled LinuxWebApp#client_certificate_enabled}.

---

##### `clientCertificateExclusionPaths`<sup>Optional</sup> <a name="clientCertificateExclusionPaths" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.clientCertificateExclusionPaths"></a>

```java
public java.lang.String getClientCertificateExclusionPaths();
```

- *Type:* java.lang.String

Paths to exclude when using client certificates, separated by ;

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_certificate_exclusion_paths LinuxWebApp#client_certificate_exclusion_paths}

---

##### `clientCertificateMode`<sup>Optional</sup> <a name="clientCertificateMode" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.clientCertificateMode"></a>

```java
public java.lang.String getClientCertificateMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#client_certificate_mode LinuxWebApp#client_certificate_mode}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.connectionString"></a>

```java
public java.lang.Object getConnectionString();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString">LinuxWebAppConnectionString</a>>

connection_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#connection_string LinuxWebApp#connection_string}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#enabled LinuxWebApp#enabled}.

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.httpsOnly"></a>

```java
public java.lang.Object getHttpsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#https_only LinuxWebApp#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#id LinuxWebApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.identity"></a>

```java
public LinuxWebAppIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentity">LinuxWebAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#identity LinuxWebApp#identity}

---

##### `keyVaultReferenceIdentityId`<sup>Optional</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.keyVaultReferenceIdentityId"></a>

```java
public java.lang.String getKeyVaultReferenceIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#key_vault_reference_identity_id LinuxWebApp#key_vault_reference_identity_id}.

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.logs"></a>

```java
public LinuxWebAppLogs getLogs();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs">LinuxWebAppLogs</a>

logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#logs LinuxWebApp#logs}

---

##### `stickySettings`<sup>Optional</sup> <a name="stickySettings" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.stickySettings"></a>

```java
public LinuxWebAppStickySettings getStickySettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettings">LinuxWebAppStickySettings</a>

sticky_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#sticky_settings LinuxWebApp#sticky_settings}

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.storageAccount"></a>

```java
public java.lang.Object getStorageAccount();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount">LinuxWebAppStorageAccount</a>>

storage_account block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#storage_account LinuxWebApp#storage_account}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#tags LinuxWebApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.timeouts"></a>

```java
public LinuxWebAppTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts">LinuxWebAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#timeouts LinuxWebApp#timeouts}

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#virtual_network_subnet_id LinuxWebApp#virtual_network_subnet_id}.

---

##### `zipDeployFile`<sup>Optional</sup> <a name="zipDeployFile" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConfig.property.zipDeployFile"></a>

```java
public java.lang.String getZipDeployFile();
```

- *Type:* java.lang.String

The local path and filename of the Zip packaged application to deploy to this Windows Web App.

**Note:** Using this value requires `WEBSITE_RUN_FROM_PACKAGE=1` on the App in `app_settings`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#zip_deploy_file LinuxWebApp#zip_deploy_file}

---

### LinuxWebAppConnectionString <a name="LinuxWebAppConnectionString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppConnectionString;

LinuxWebAppConnectionString.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString.property.name">name</a></code> | <code>java.lang.String</code> | The name which should be used for this Connection. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString.property.type">type</a></code> | <code>java.lang.String</code> | Type of database. Possible values include: `MySQL`, `SQLServer`, `SQLAzure`, `Custom`, `NotificationHub`, `ServiceBus`, `EventHub`, `APIHub`, `DocDb`, `RedisCache`, and `PostgreSQL`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString.property.value">value</a></code> | <code>java.lang.String</code> | The connection string value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name which should be used for this Connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#name LinuxWebApp#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of database. Possible values include: `MySQL`, `SQLServer`, `SQLAzure`, `Custom`, `NotificationHub`, `ServiceBus`, `EventHub`, `APIHub`, `DocDb`, `RedisCache`, and `PostgreSQL`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#type LinuxWebApp#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The connection string value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#value LinuxWebApp#value}

---

### LinuxWebAppIdentity <a name="LinuxWebAppIdentity" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppIdentity;

LinuxWebAppIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#type LinuxWebApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#identity_ids LinuxWebApp#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#type LinuxWebApp#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#identity_ids LinuxWebApp#identity_ids}.

---

### LinuxWebAppLogs <a name="LinuxWebAppLogs" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppLogs;

LinuxWebAppLogs.builder()
//  .applicationLogs(LinuxWebAppLogsApplicationLogs)
//  .detailedErrorMessages(java.lang.Boolean)
//  .detailedErrorMessages(IResolvable)
//  .failedRequestTracing(java.lang.Boolean)
//  .failedRequestTracing(IResolvable)
//  .httpLogs(LinuxWebAppLogsHttpLogs)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs.property.applicationLogs">applicationLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogs">LinuxWebAppLogsApplicationLogs</a></code> | application_logs block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs.property.detailedErrorMessages">detailedErrorMessages</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#detailed_error_messages LinuxWebApp#detailed_error_messages}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs.property.failedRequestTracing">failedRequestTracing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#failed_request_tracing LinuxWebApp#failed_request_tracing}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs.property.httpLogs">httpLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogs">LinuxWebAppLogsHttpLogs</a></code> | http_logs block. |

---

##### `applicationLogs`<sup>Optional</sup> <a name="applicationLogs" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs.property.applicationLogs"></a>

```java
public LinuxWebAppLogsApplicationLogs getApplicationLogs();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogs">LinuxWebAppLogsApplicationLogs</a>

application_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#application_logs LinuxWebApp#application_logs}

---

##### `detailedErrorMessages`<sup>Optional</sup> <a name="detailedErrorMessages" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs.property.detailedErrorMessages"></a>

```java
public java.lang.Object getDetailedErrorMessages();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#detailed_error_messages LinuxWebApp#detailed_error_messages}.

---

##### `failedRequestTracing`<sup>Optional</sup> <a name="failedRequestTracing" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs.property.failedRequestTracing"></a>

```java
public java.lang.Object getFailedRequestTracing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#failed_request_tracing LinuxWebApp#failed_request_tracing}.

---

##### `httpLogs`<sup>Optional</sup> <a name="httpLogs" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs.property.httpLogs"></a>

```java
public LinuxWebAppLogsHttpLogs getHttpLogs();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogs">LinuxWebAppLogsHttpLogs</a>

http_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#http_logs LinuxWebApp#http_logs}

---

### LinuxWebAppLogsApplicationLogs <a name="LinuxWebAppLogsApplicationLogs" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppLogsApplicationLogs;

LinuxWebAppLogsApplicationLogs.builder()
    .fileSystemLevel(java.lang.String)
//  .azureBlobStorage(LinuxWebAppLogsApplicationLogsAzureBlobStorage)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogs.property.fileSystemLevel">fileSystemLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#file_system_level LinuxWebApp#file_system_level}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogs.property.azureBlobStorage">azureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorage">LinuxWebAppLogsApplicationLogsAzureBlobStorage</a></code> | azure_blob_storage block. |

---

##### `fileSystemLevel`<sup>Required</sup> <a name="fileSystemLevel" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogs.property.fileSystemLevel"></a>

```java
public java.lang.String getFileSystemLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#file_system_level LinuxWebApp#file_system_level}.

---

##### `azureBlobStorage`<sup>Optional</sup> <a name="azureBlobStorage" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogs.property.azureBlobStorage"></a>

```java
public LinuxWebAppLogsApplicationLogsAzureBlobStorage getAzureBlobStorage();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorage">LinuxWebAppLogsApplicationLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#azure_blob_storage LinuxWebApp#azure_blob_storage}

---

### LinuxWebAppLogsApplicationLogsAzureBlobStorage <a name="LinuxWebAppLogsApplicationLogsAzureBlobStorage" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppLogsApplicationLogsAzureBlobStorage;

LinuxWebAppLogsApplicationLogsAzureBlobStorage.builder()
    .level(java.lang.String)
    .retentionInDays(java.lang.Number)
    .sasUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorage.property.level">level</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#level LinuxWebApp#level}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorage.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#retention_in_days LinuxWebApp#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorage.property.sasUrl">sasUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#sas_url LinuxWebApp#sas_url}. |

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorage.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#level LinuxWebApp#level}.

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorage.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#retention_in_days LinuxWebApp#retention_in_days}.

---

##### `sasUrl`<sup>Required</sup> <a name="sasUrl" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorage.property.sasUrl"></a>

```java
public java.lang.String getSasUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#sas_url LinuxWebApp#sas_url}.

---

### LinuxWebAppLogsHttpLogs <a name="LinuxWebAppLogsHttpLogs" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppLogsHttpLogs;

LinuxWebAppLogsHttpLogs.builder()
//  .azureBlobStorage(LinuxWebAppLogsHttpLogsAzureBlobStorage)
//  .fileSystem(LinuxWebAppLogsHttpLogsFileSystem)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogs.property.azureBlobStorage">azureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorage">LinuxWebAppLogsHttpLogsAzureBlobStorage</a></code> | azure_blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogs.property.fileSystem">fileSystem</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystem">LinuxWebAppLogsHttpLogsFileSystem</a></code> | file_system block. |

---

##### `azureBlobStorage`<sup>Optional</sup> <a name="azureBlobStorage" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogs.property.azureBlobStorage"></a>

```java
public LinuxWebAppLogsHttpLogsAzureBlobStorage getAzureBlobStorage();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorage">LinuxWebAppLogsHttpLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#azure_blob_storage LinuxWebApp#azure_blob_storage}

---

##### `fileSystem`<sup>Optional</sup> <a name="fileSystem" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogs.property.fileSystem"></a>

```java
public LinuxWebAppLogsHttpLogsFileSystem getFileSystem();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystem">LinuxWebAppLogsHttpLogsFileSystem</a>

file_system block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#file_system LinuxWebApp#file_system}

---

### LinuxWebAppLogsHttpLogsAzureBlobStorage <a name="LinuxWebAppLogsHttpLogsAzureBlobStorage" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppLogsHttpLogsAzureBlobStorage;

LinuxWebAppLogsHttpLogsAzureBlobStorage.builder()
    .sasUrl(java.lang.String)
//  .retentionInDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorage.property.sasUrl">sasUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#sas_url LinuxWebApp#sas_url}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorage.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#retention_in_days LinuxWebApp#retention_in_days}. |

---

##### `sasUrl`<sup>Required</sup> <a name="sasUrl" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorage.property.sasUrl"></a>

```java
public java.lang.String getSasUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#sas_url LinuxWebApp#sas_url}.

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorage.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#retention_in_days LinuxWebApp#retention_in_days}.

---

### LinuxWebAppLogsHttpLogsFileSystem <a name="LinuxWebAppLogsHttpLogsFileSystem" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppLogsHttpLogsFileSystem;

LinuxWebAppLogsHttpLogsFileSystem.builder()
    .retentionInDays(java.lang.Number)
    .retentionInMb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystem.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#retention_in_days LinuxWebApp#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystem.property.retentionInMb">retentionInMb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#retention_in_mb LinuxWebApp#retention_in_mb}. |

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystem.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#retention_in_days LinuxWebApp#retention_in_days}.

---

##### `retentionInMb`<sup>Required</sup> <a name="retentionInMb" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystem.property.retentionInMb"></a>

```java
public java.lang.Number getRetentionInMb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#retention_in_mb LinuxWebApp#retention_in_mb}.

---

### LinuxWebAppSiteConfig <a name="LinuxWebAppSiteConfig" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfig;

LinuxWebAppSiteConfig.builder()
//  .alwaysOn(java.lang.Boolean)
//  .alwaysOn(IResolvable)
//  .apiDefinitionUrl(java.lang.String)
//  .apiManagementApiId(java.lang.String)
//  .appCommandLine(java.lang.String)
//  .applicationStack(LinuxWebAppSiteConfigApplicationStack)
//  .autoHealEnabled(java.lang.Boolean)
//  .autoHealEnabled(IResolvable)
//  .autoHealSetting(LinuxWebAppSiteConfigAutoHealSetting)
//  .containerRegistryManagedIdentityClientId(java.lang.String)
//  .containerRegistryUseManagedIdentity(java.lang.Boolean)
//  .containerRegistryUseManagedIdentity(IResolvable)
//  .cors(LinuxWebAppSiteConfigCors)
//  .defaultDocuments(java.util.List<java.lang.String>)
//  .ftpsState(java.lang.String)
//  .healthCheckEvictionTimeInMin(java.lang.Number)
//  .healthCheckPath(java.lang.String)
//  .http2Enabled(java.lang.Boolean)
//  .http2Enabled(IResolvable)
//  .ipRestriction(IResolvable)
//  .ipRestriction(java.util.List<LinuxWebAppSiteConfigIpRestriction>)
//  .loadBalancingMode(java.lang.String)
//  .localMysqlEnabled(java.lang.Boolean)
//  .localMysqlEnabled(IResolvable)
//  .managedPipelineMode(java.lang.String)
//  .minimumTlsVersion(java.lang.String)
//  .remoteDebuggingEnabled(java.lang.Boolean)
//  .remoteDebuggingEnabled(IResolvable)
//  .remoteDebuggingVersion(java.lang.String)
//  .scmIpRestriction(IResolvable)
//  .scmIpRestriction(java.util.List<LinuxWebAppSiteConfigScmIpRestriction>)
//  .scmMinimumTlsVersion(java.lang.String)
//  .scmUseMainIpRestriction(java.lang.Boolean)
//  .scmUseMainIpRestriction(IResolvable)
//  .use32BitWorker(java.lang.Boolean)
//  .use32BitWorker(IResolvable)
//  .vnetRouteAllEnabled(java.lang.Boolean)
//  .vnetRouteAllEnabled(IResolvable)
//  .websocketsEnabled(java.lang.Boolean)
//  .websocketsEnabled(IResolvable)
//  .workerCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.alwaysOn">alwaysOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#always_on LinuxWebApp#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.apiDefinitionUrl">apiDefinitionUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#api_definition_url LinuxWebApp#api_definition_url}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.apiManagementApiId">apiManagementApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#api_management_api_id LinuxWebApp#api_management_api_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.appCommandLine">appCommandLine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#app_command_line LinuxWebApp#app_command_line}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.applicationStack">applicationStack</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack">LinuxWebAppSiteConfigApplicationStack</a></code> | application_stack block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.autoHealEnabled">autoHealEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#auto_heal_enabled LinuxWebApp#auto_heal_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.autoHealSetting">autoHealSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSetting">LinuxWebAppSiteConfigAutoHealSetting</a></code> | auto_heal_setting block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.containerRegistryManagedIdentityClientId">containerRegistryManagedIdentityClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#container_registry_managed_identity_client_id LinuxWebApp#container_registry_managed_identity_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.containerRegistryUseManagedIdentity">containerRegistryUseManagedIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#container_registry_use_managed_identity LinuxWebApp#container_registry_use_managed_identity}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCors">LinuxWebAppSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.defaultDocuments">defaultDocuments</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#default_documents LinuxWebApp#default_documents}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.ftpsState">ftpsState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#ftps_state LinuxWebApp#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.healthCheckEvictionTimeInMin">healthCheckEvictionTimeInMin</a></code> | <code>java.lang.Number</code> | The amount of time in minutes that a node is unhealthy before being removed from the load balancer. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#health_check_path LinuxWebApp#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.http2Enabled">http2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#http2_enabled LinuxWebApp#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.ipRestriction">ipRestriction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction">LinuxWebAppSiteConfigIpRestriction</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#ip_restriction LinuxWebApp#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.loadBalancingMode">loadBalancingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#load_balancing_mode LinuxWebApp#load_balancing_mode}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.localMysqlEnabled">localMysqlEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#local_mysql_enabled LinuxWebApp#local_mysql_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.managedPipelineMode">managedPipelineMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#managed_pipeline_mode LinuxWebApp#managed_pipeline_mode}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#minimum_tls_version LinuxWebApp#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.remoteDebuggingEnabled">remoteDebuggingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#remote_debugging_enabled LinuxWebApp#remote_debugging_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.remoteDebuggingVersion">remoteDebuggingVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#remote_debugging_version LinuxWebApp#remote_debugging_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.scmIpRestriction">scmIpRestriction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction">LinuxWebAppSiteConfigScmIpRestriction</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#scm_ip_restriction LinuxWebApp#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.scmMinimumTlsVersion">scmMinimumTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#scm_minimum_tls_version LinuxWebApp#scm_minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#scm_use_main_ip_restriction LinuxWebApp#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.use32BitWorker">use32BitWorker</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#use_32_bit_worker LinuxWebApp#use_32_bit_worker}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.websocketsEnabled">websocketsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#websockets_enabled LinuxWebApp#websockets_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.workerCount">workerCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#worker_count LinuxWebApp#worker_count}. |

---

##### `alwaysOn`<sup>Optional</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.alwaysOn"></a>

```java
public java.lang.Object getAlwaysOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#always_on LinuxWebApp#always_on}.

---

##### `apiDefinitionUrl`<sup>Optional</sup> <a name="apiDefinitionUrl" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.apiDefinitionUrl"></a>

```java
public java.lang.String getApiDefinitionUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#api_definition_url LinuxWebApp#api_definition_url}.

---

##### `apiManagementApiId`<sup>Optional</sup> <a name="apiManagementApiId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.apiManagementApiId"></a>

```java
public java.lang.String getApiManagementApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#api_management_api_id LinuxWebApp#api_management_api_id}.

---

##### `appCommandLine`<sup>Optional</sup> <a name="appCommandLine" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.appCommandLine"></a>

```java
public java.lang.String getAppCommandLine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#app_command_line LinuxWebApp#app_command_line}.

---

##### `applicationStack`<sup>Optional</sup> <a name="applicationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.applicationStack"></a>

```java
public LinuxWebAppSiteConfigApplicationStack getApplicationStack();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack">LinuxWebAppSiteConfigApplicationStack</a>

application_stack block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#application_stack LinuxWebApp#application_stack}

---

##### `autoHealEnabled`<sup>Optional</sup> <a name="autoHealEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.autoHealEnabled"></a>

```java
public java.lang.Object getAutoHealEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#auto_heal_enabled LinuxWebApp#auto_heal_enabled}.

---

##### `autoHealSetting`<sup>Optional</sup> <a name="autoHealSetting" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.autoHealSetting"></a>

```java
public LinuxWebAppSiteConfigAutoHealSetting getAutoHealSetting();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSetting">LinuxWebAppSiteConfigAutoHealSetting</a>

auto_heal_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#auto_heal_setting LinuxWebApp#auto_heal_setting}

---

##### `containerRegistryManagedIdentityClientId`<sup>Optional</sup> <a name="containerRegistryManagedIdentityClientId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.containerRegistryManagedIdentityClientId"></a>

```java
public java.lang.String getContainerRegistryManagedIdentityClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#container_registry_managed_identity_client_id LinuxWebApp#container_registry_managed_identity_client_id}.

---

##### `containerRegistryUseManagedIdentity`<sup>Optional</sup> <a name="containerRegistryUseManagedIdentity" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.containerRegistryUseManagedIdentity"></a>

```java
public java.lang.Object getContainerRegistryUseManagedIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#container_registry_use_managed_identity LinuxWebApp#container_registry_use_managed_identity}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.cors"></a>

```java
public LinuxWebAppSiteConfigCors getCors();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCors">LinuxWebAppSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#cors LinuxWebApp#cors}

---

##### `defaultDocuments`<sup>Optional</sup> <a name="defaultDocuments" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.defaultDocuments"></a>

```java
public java.util.List<java.lang.String> getDefaultDocuments();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#default_documents LinuxWebApp#default_documents}.

---

##### `ftpsState`<sup>Optional</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.ftpsState"></a>

```java
public java.lang.String getFtpsState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#ftps_state LinuxWebApp#ftps_state}.

---

##### `healthCheckEvictionTimeInMin`<sup>Optional</sup> <a name="healthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.healthCheckEvictionTimeInMin"></a>

```java
public java.lang.Number getHealthCheckEvictionTimeInMin();
```

- *Type:* java.lang.Number

The amount of time in minutes that a node is unhealthy before being removed from the load balancer.

Possible values are between `2` and `10`. Defaults to `10`. Only valid in conjunction with `health_check_path`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#health_check_eviction_time_in_min LinuxWebApp#health_check_eviction_time_in_min}

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#health_check_path LinuxWebApp#health_check_path}.

---

##### `http2Enabled`<sup>Optional</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.http2Enabled"></a>

```java
public java.lang.Object getHttp2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#http2_enabled LinuxWebApp#http2_enabled}.

---

##### `ipRestriction`<sup>Optional</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.ipRestriction"></a>

```java
public java.lang.Object getIpRestriction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction">LinuxWebAppSiteConfigIpRestriction</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#ip_restriction LinuxWebApp#ip_restriction}.

---

##### `loadBalancingMode`<sup>Optional</sup> <a name="loadBalancingMode" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.loadBalancingMode"></a>

```java
public java.lang.String getLoadBalancingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#load_balancing_mode LinuxWebApp#load_balancing_mode}.

---

##### `localMysqlEnabled`<sup>Optional</sup> <a name="localMysqlEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.localMysqlEnabled"></a>

```java
public java.lang.Object getLocalMysqlEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#local_mysql_enabled LinuxWebApp#local_mysql_enabled}.

---

##### `managedPipelineMode`<sup>Optional</sup> <a name="managedPipelineMode" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.managedPipelineMode"></a>

```java
public java.lang.String getManagedPipelineMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#managed_pipeline_mode LinuxWebApp#managed_pipeline_mode}.

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.minimumTlsVersion"></a>

```java
public java.lang.String getMinimumTlsVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#minimum_tls_version LinuxWebApp#minimum_tls_version}.

---

##### `remoteDebuggingEnabled`<sup>Optional</sup> <a name="remoteDebuggingEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.remoteDebuggingEnabled"></a>

```java
public java.lang.Object getRemoteDebuggingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#remote_debugging_enabled LinuxWebApp#remote_debugging_enabled}.

---

##### `remoteDebuggingVersion`<sup>Optional</sup> <a name="remoteDebuggingVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.remoteDebuggingVersion"></a>

```java
public java.lang.String getRemoteDebuggingVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#remote_debugging_version LinuxWebApp#remote_debugging_version}.

---

##### `scmIpRestriction`<sup>Optional</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.scmIpRestriction"></a>

```java
public java.lang.Object getScmIpRestriction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction">LinuxWebAppSiteConfigScmIpRestriction</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#scm_ip_restriction LinuxWebApp#scm_ip_restriction}.

---

##### `scmMinimumTlsVersion`<sup>Optional</sup> <a name="scmMinimumTlsVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.scmMinimumTlsVersion"></a>

```java
public java.lang.String getScmMinimumTlsVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#scm_minimum_tls_version LinuxWebApp#scm_minimum_tls_version}.

---

##### `scmUseMainIpRestriction`<sup>Optional</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.scmUseMainIpRestriction"></a>

```java
public java.lang.Object getScmUseMainIpRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#scm_use_main_ip_restriction LinuxWebApp#scm_use_main_ip_restriction}.

---

##### `use32BitWorker`<sup>Optional</sup> <a name="use32BitWorker" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.use32BitWorker"></a>

```java
public java.lang.Object getUse32BitWorker();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#use_32_bit_worker LinuxWebApp#use_32_bit_worker}.

---

##### `vnetRouteAllEnabled`<sup>Optional</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.vnetRouteAllEnabled"></a>

```java
public java.lang.Object getVnetRouteAllEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#vnet_route_all_enabled LinuxWebApp#vnet_route_all_enabled}

---

##### `websocketsEnabled`<sup>Optional</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.websocketsEnabled"></a>

```java
public java.lang.Object getWebsocketsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#websockets_enabled LinuxWebApp#websockets_enabled}.

---

##### `workerCount`<sup>Optional</sup> <a name="workerCount" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig.property.workerCount"></a>

```java
public java.lang.Number getWorkerCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#worker_count LinuxWebApp#worker_count}.

---

### LinuxWebAppSiteConfigApplicationStack <a name="LinuxWebAppSiteConfigApplicationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigApplicationStack;

LinuxWebAppSiteConfigApplicationStack.builder()
//  .dockerImage(java.lang.String)
//  .dockerImageTag(java.lang.String)
//  .dotnetVersion(java.lang.String)
//  .goVersion(java.lang.String)
//  .javaServer(java.lang.String)
//  .javaServerVersion(java.lang.String)
//  .javaVersion(java.lang.String)
//  .nodeVersion(java.lang.String)
//  .phpVersion(java.lang.String)
//  .pythonVersion(java.lang.String)
//  .rubyVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.dockerImage">dockerImage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#docker_image LinuxWebApp#docker_image}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.dockerImageTag">dockerImageTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#docker_image_tag LinuxWebApp#docker_image_tag}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.dotnetVersion">dotnetVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#dotnet_version LinuxWebApp#dotnet_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.goVersion">goVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#go_version LinuxWebApp#go_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.javaServer">javaServer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#java_server LinuxWebApp#java_server}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.javaServerVersion">javaServerVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#java_server_version LinuxWebApp#java_server_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.javaVersion">javaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#java_version LinuxWebApp#java_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.nodeVersion">nodeVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#node_version LinuxWebApp#node_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.phpVersion">phpVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#php_version LinuxWebApp#php_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.pythonVersion">pythonVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#python_version LinuxWebApp#python_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.rubyVersion">rubyVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#ruby_version LinuxWebApp#ruby_version}. |

---

##### `dockerImage`<sup>Optional</sup> <a name="dockerImage" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.dockerImage"></a>

```java
public java.lang.String getDockerImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#docker_image LinuxWebApp#docker_image}.

---

##### `dockerImageTag`<sup>Optional</sup> <a name="dockerImageTag" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.dockerImageTag"></a>

```java
public java.lang.String getDockerImageTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#docker_image_tag LinuxWebApp#docker_image_tag}.

---

##### `dotnetVersion`<sup>Optional</sup> <a name="dotnetVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.dotnetVersion"></a>

```java
public java.lang.String getDotnetVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#dotnet_version LinuxWebApp#dotnet_version}.

---

##### `goVersion`<sup>Optional</sup> <a name="goVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.goVersion"></a>

```java
public java.lang.String getGoVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#go_version LinuxWebApp#go_version}.

---

##### `javaServer`<sup>Optional</sup> <a name="javaServer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.javaServer"></a>

```java
public java.lang.String getJavaServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#java_server LinuxWebApp#java_server}.

---

##### `javaServerVersion`<sup>Optional</sup> <a name="javaServerVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.javaServerVersion"></a>

```java
public java.lang.String getJavaServerVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#java_server_version LinuxWebApp#java_server_version}.

---

##### `javaVersion`<sup>Optional</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.javaVersion"></a>

```java
public java.lang.String getJavaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#java_version LinuxWebApp#java_version}.

---

##### `nodeVersion`<sup>Optional</sup> <a name="nodeVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.nodeVersion"></a>

```java
public java.lang.String getNodeVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#node_version LinuxWebApp#node_version}.

---

##### `phpVersion`<sup>Optional</sup> <a name="phpVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.phpVersion"></a>

```java
public java.lang.String getPhpVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#php_version LinuxWebApp#php_version}.

---

##### `pythonVersion`<sup>Optional</sup> <a name="pythonVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.pythonVersion"></a>

```java
public java.lang.String getPythonVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#python_version LinuxWebApp#python_version}.

---

##### `rubyVersion`<sup>Optional</sup> <a name="rubyVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack.property.rubyVersion"></a>

```java
public java.lang.String getRubyVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#ruby_version LinuxWebApp#ruby_version}.

---

### LinuxWebAppSiteConfigAutoHealSetting <a name="LinuxWebAppSiteConfigAutoHealSetting" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigAutoHealSetting;

LinuxWebAppSiteConfigAutoHealSetting.builder()
//  .action(LinuxWebAppSiteConfigAutoHealSettingAction)
//  .trigger(LinuxWebAppSiteConfigAutoHealSettingTrigger)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSetting.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingAction">LinuxWebAppSiteConfigAutoHealSettingAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSetting.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTrigger">LinuxWebAppSiteConfigAutoHealSettingTrigger</a></code> | trigger block. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSetting.property.action"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingAction getAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingAction">LinuxWebAppSiteConfigAutoHealSettingAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#action LinuxWebApp#action}

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSetting.property.trigger"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingTrigger getTrigger();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTrigger">LinuxWebAppSiteConfigAutoHealSettingTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#trigger LinuxWebApp#trigger}

---

### LinuxWebAppSiteConfigAutoHealSettingAction <a name="LinuxWebAppSiteConfigAutoHealSettingAction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigAutoHealSettingAction;

LinuxWebAppSiteConfigAutoHealSettingAction.builder()
    .actionType(java.lang.String)
//  .minimumProcessExecutionTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingAction.property.actionType">actionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#action_type LinuxWebApp#action_type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingAction.property.minimumProcessExecutionTime">minimumProcessExecutionTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#minimum_process_execution_time LinuxWebApp#minimum_process_execution_time}. |

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingAction.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#action_type LinuxWebApp#action_type}.

---

##### `minimumProcessExecutionTime`<sup>Optional</sup> <a name="minimumProcessExecutionTime" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingAction.property.minimumProcessExecutionTime"></a>

```java
public java.lang.String getMinimumProcessExecutionTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#minimum_process_execution_time LinuxWebApp#minimum_process_execution_time}.

---

### LinuxWebAppSiteConfigAutoHealSettingTrigger <a name="LinuxWebAppSiteConfigAutoHealSettingTrigger" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTrigger.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigAutoHealSettingTrigger;

LinuxWebAppSiteConfigAutoHealSettingTrigger.builder()
//  .requests(LinuxWebAppSiteConfigAutoHealSettingTriggerRequests)
//  .slowRequest(LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest)
//  .statusCode(IResolvable)
//  .statusCode(java.util.List<LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTrigger.property.requests">requests</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequests">LinuxWebAppSiteConfigAutoHealSettingTriggerRequests</a></code> | requests block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTrigger.property.slowRequest">slowRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest">LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest</a></code> | slow_request block. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTrigger.property.statusCode">statusCode</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode</a>></code> | status_code block. |

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTrigger.property.requests"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingTriggerRequests getRequests();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequests">LinuxWebAppSiteConfigAutoHealSettingTriggerRequests</a>

requests block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#requests LinuxWebApp#requests}

---

##### `slowRequest`<sup>Optional</sup> <a name="slowRequest" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTrigger.property.slowRequest"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest getSlowRequest();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest">LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest</a>

slow_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#slow_request LinuxWebApp#slow_request}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTrigger.property.statusCode"></a>

```java
public java.lang.Object getStatusCode();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode</a>>

status_code block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#status_code LinuxWebApp#status_code}

---

### LinuxWebAppSiteConfigAutoHealSettingTriggerRequests <a name="LinuxWebAppSiteConfigAutoHealSettingTriggerRequests" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequests.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigAutoHealSettingTriggerRequests;

LinuxWebAppSiteConfigAutoHealSettingTriggerRequests.builder()
    .count(java.lang.Number)
    .interval(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequests.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#count LinuxWebApp#count}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequests.property.interval">interval</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#interval LinuxWebApp#interval}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequests.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#count LinuxWebApp#count}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequests.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#interval LinuxWebApp#interval}.

---

### LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest <a name="LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest;

LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest.builder()
    .count(java.lang.Number)
    .interval(java.lang.String)
    .timeTaken(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#count LinuxWebApp#count}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest.property.interval">interval</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#interval LinuxWebApp#interval}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest.property.timeTaken">timeTaken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#time_taken LinuxWebApp#time_taken}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#path LinuxWebApp#path}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#count LinuxWebApp#count}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#interval LinuxWebApp#interval}.

---

##### `timeTaken`<sup>Required</sup> <a name="timeTaken" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest.property.timeTaken"></a>

```java
public java.lang.String getTimeTaken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#time_taken LinuxWebApp#time_taken}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#path LinuxWebApp#path}.

---

### LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode <a name="LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode;

LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode.builder()
    .count(java.lang.Number)
    .interval(java.lang.String)
    .statusCodeRange(java.lang.String)
//  .path(java.lang.String)
//  .subStatus(java.lang.Number)
//  .win32Status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#count LinuxWebApp#count}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode.property.interval">interval</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#interval LinuxWebApp#interval}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode.property.statusCodeRange">statusCodeRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#status_code_range LinuxWebApp#status_code_range}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#path LinuxWebApp#path}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode.property.subStatus">subStatus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#sub_status LinuxWebApp#sub_status}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode.property.win32Status">win32Status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#win32_status LinuxWebApp#win32_status}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#count LinuxWebApp#count}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#interval LinuxWebApp#interval}.

---

##### `statusCodeRange`<sup>Required</sup> <a name="statusCodeRange" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode.property.statusCodeRange"></a>

```java
public java.lang.String getStatusCodeRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#status_code_range LinuxWebApp#status_code_range}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#path LinuxWebApp#path}.

---

##### `subStatus`<sup>Optional</sup> <a name="subStatus" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode.property.subStatus"></a>

```java
public java.lang.Number getSubStatus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#sub_status LinuxWebApp#sub_status}.

---

##### `win32Status`<sup>Optional</sup> <a name="win32Status" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode.property.win32Status"></a>

```java
public java.lang.String getWin32Status();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#win32_status LinuxWebApp#win32_status}.

---

### LinuxWebAppSiteConfigCors <a name="LinuxWebAppSiteConfigCors" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigCors;

LinuxWebAppSiteConfigCors.builder()
    .allowedOrigins(java.util.List<java.lang.String>)
//  .supportCredentials(java.lang.Boolean)
//  .supportCredentials(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCors.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Specifies a list of origins that should be allowed to make cross-origin calls. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCors.property.supportCredentials">supportCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Are credentials allowed in CORS requests? Defaults to `false`. |

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCors.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

Specifies a list of origins that should be allowed to make cross-origin calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#allowed_origins LinuxWebApp#allowed_origins}

---

##### `supportCredentials`<sup>Optional</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCors.property.supportCredentials"></a>

```java
public java.lang.Object getSupportCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Are credentials allowed in CORS requests? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#support_credentials LinuxWebApp#support_credentials}

---

### LinuxWebAppSiteConfigIpRestriction <a name="LinuxWebAppSiteConfigIpRestriction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigIpRestriction;

LinuxWebAppSiteConfigIpRestriction.builder()
//  .action(java.lang.String)
//  .headers(IResolvable)
//  .headers(java.util.List<LinuxWebAppSiteConfigIpRestrictionHeaders>)
//  .ipAddress(java.lang.String)
//  .name(java.lang.String)
//  .priority(java.lang.Number)
//  .serviceTag(java.lang.String)
//  .virtualNetworkSubnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#action LinuxWebApp#action}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders">LinuxWebAppSiteConfigIpRestrictionHeaders</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#headers LinuxWebApp#headers}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#ip_address LinuxWebApp#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#name LinuxWebApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#priority LinuxWebApp#priority}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction.property.serviceTag">serviceTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#service_tag LinuxWebApp#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#virtual_network_subnet_id LinuxWebApp#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#action LinuxWebApp#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders">LinuxWebAppSiteConfigIpRestrictionHeaders</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#headers LinuxWebApp#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#ip_address LinuxWebApp#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#name LinuxWebApp#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#priority LinuxWebApp#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction.property.serviceTag"></a>

```java
public java.lang.String getServiceTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#service_tag LinuxWebApp#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#virtual_network_subnet_id LinuxWebApp#virtual_network_subnet_id}.

---

### LinuxWebAppSiteConfigIpRestrictionHeaders <a name="LinuxWebAppSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigIpRestrictionHeaders;

LinuxWebAppSiteConfigIpRestrictionHeaders.builder()
//  .xAzureFdid(java.util.List<java.lang.String>)
//  .xFdHealthProbe(java.util.List<java.lang.String>)
//  .xForwardedFor(java.util.List<java.lang.String>)
//  .xForwardedHost(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#x_azure_fdid LinuxWebApp#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#x_fd_health_probe LinuxWebApp#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#x_forwarded_for LinuxWebApp#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#x_forwarded_host LinuxWebApp#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```java
public java.util.List<java.lang.String> getXAzureFdid();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#x_azure_fdid LinuxWebApp#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbe();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#x_fd_health_probe LinuxWebApp#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```java
public java.util.List<java.lang.String> getXForwardedFor();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#x_forwarded_for LinuxWebApp#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```java
public java.util.List<java.lang.String> getXForwardedHost();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#x_forwarded_host LinuxWebApp#x_forwarded_host}.

---

### LinuxWebAppSiteConfigScmIpRestriction <a name="LinuxWebAppSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigScmIpRestriction;

LinuxWebAppSiteConfigScmIpRestriction.builder()
//  .action(java.lang.String)
//  .headers(IResolvable)
//  .headers(java.util.List<LinuxWebAppSiteConfigScmIpRestrictionHeaders>)
//  .ipAddress(java.lang.String)
//  .name(java.lang.String)
//  .priority(java.lang.Number)
//  .serviceTag(java.lang.String)
//  .virtualNetworkSubnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#action LinuxWebApp#action}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders">LinuxWebAppSiteConfigScmIpRestrictionHeaders</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#headers LinuxWebApp#headers}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#ip_address LinuxWebApp#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#name LinuxWebApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#priority LinuxWebApp#priority}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction.property.serviceTag">serviceTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#service_tag LinuxWebApp#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#virtual_network_subnet_id LinuxWebApp#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#action LinuxWebApp#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders">LinuxWebAppSiteConfigScmIpRestrictionHeaders</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#headers LinuxWebApp#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#ip_address LinuxWebApp#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#name LinuxWebApp#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#priority LinuxWebApp#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction.property.serviceTag"></a>

```java
public java.lang.String getServiceTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#service_tag LinuxWebApp#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#virtual_network_subnet_id LinuxWebApp#virtual_network_subnet_id}.

---

### LinuxWebAppSiteConfigScmIpRestrictionHeaders <a name="LinuxWebAppSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigScmIpRestrictionHeaders;

LinuxWebAppSiteConfigScmIpRestrictionHeaders.builder()
//  .xAzureFdid(java.util.List<java.lang.String>)
//  .xFdHealthProbe(java.util.List<java.lang.String>)
//  .xForwardedFor(java.util.List<java.lang.String>)
//  .xForwardedHost(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#x_azure_fdid LinuxWebApp#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#x_fd_health_probe LinuxWebApp#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#x_forwarded_for LinuxWebApp#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#x_forwarded_host LinuxWebApp#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```java
public java.util.List<java.lang.String> getXAzureFdid();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#x_azure_fdid LinuxWebApp#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbe();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#x_fd_health_probe LinuxWebApp#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```java
public java.util.List<java.lang.String> getXForwardedFor();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#x_forwarded_for LinuxWebApp#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```java
public java.util.List<java.lang.String> getXForwardedHost();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#x_forwarded_host LinuxWebApp#x_forwarded_host}.

---

### LinuxWebAppSiteCredential <a name="LinuxWebAppSiteCredential" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteCredential;

LinuxWebAppSiteCredential.builder()
    .build();
```


### LinuxWebAppStickySettings <a name="LinuxWebAppStickySettings" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppStickySettings;

LinuxWebAppStickySettings.builder()
//  .appSettingNames(java.util.List<java.lang.String>)
//  .connectionStringNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettings.property.appSettingNames">appSettingNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#app_setting_names LinuxWebApp#app_setting_names}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettings.property.connectionStringNames">connectionStringNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#connection_string_names LinuxWebApp#connection_string_names}. |

---

##### `appSettingNames`<sup>Optional</sup> <a name="appSettingNames" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettings.property.appSettingNames"></a>

```java
public java.util.List<java.lang.String> getAppSettingNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#app_setting_names LinuxWebApp#app_setting_names}.

---

##### `connectionStringNames`<sup>Optional</sup> <a name="connectionStringNames" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettings.property.connectionStringNames"></a>

```java
public java.util.List<java.lang.String> getConnectionStringNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#connection_string_names LinuxWebApp#connection_string_names}.

---

### LinuxWebAppStorageAccount <a name="LinuxWebAppStorageAccount" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppStorageAccount;

LinuxWebAppStorageAccount.builder()
    .accessKey(java.lang.String)
    .accountName(java.lang.String)
    .name(java.lang.String)
    .shareName(java.lang.String)
    .type(java.lang.String)
//  .mountPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#access_key LinuxWebApp#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#account_name LinuxWebApp#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#name LinuxWebApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount.property.shareName">shareName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#share_name LinuxWebApp#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#type LinuxWebApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#mount_path LinuxWebApp#mount_path}. |

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#access_key LinuxWebApp#access_key}.

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#account_name LinuxWebApp#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#name LinuxWebApp#name}.

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#share_name LinuxWebApp#share_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#type LinuxWebApp#type}.

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#mount_path LinuxWebApp#mount_path}.

---

### LinuxWebAppTimeouts <a name="LinuxWebAppTimeouts" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppTimeouts;

LinuxWebAppTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#create LinuxWebApp#create}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#delete LinuxWebApp#delete}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#read LinuxWebApp#read}. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#update LinuxWebApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#create LinuxWebApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#delete LinuxWebApp#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#read LinuxWebApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_web_app#update LinuxWebApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LinuxWebAppAuthSettingsActiveDirectoryOutputReference <a name="LinuxWebAppAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppAuthSettingsActiveDirectoryOutputReference;

new LinuxWebAppAuthSettingsActiveDirectoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">resetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.resetClientSecretSettingName">resetClientSecretSettingName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAudiences` <a name="resetAllowedAudiences" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```java
public void resetAllowedAudiences()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetClientSecretSettingName` <a name="resetClientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.resetClientSecretSettingName"></a>

```java
public void resetClientSecretSettingName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">allowedAudiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingNameInput">clientSecretSettingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectory">LinuxWebAppAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAudiencesInput`<sup>Optional</sup> <a name="allowedAudiencesInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `clientSecretSettingNameInput`<sup>Optional</sup> <a name="clientSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingNameInput"></a>

```java
public java.lang.String getClientSecretSettingNameInput();
```

- *Type:* java.lang.String

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName"></a>

```java
public java.lang.String getClientSecretSettingName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```java
public LinuxWebAppAuthSettingsActiveDirectory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectory">LinuxWebAppAuthSettingsActiveDirectory</a>

---


### LinuxWebAppAuthSettingsFacebookOutputReference <a name="LinuxWebAppAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppAuthSettingsFacebookOutputReference;

new LinuxWebAppAuthSettingsFacebookOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.resetAppSecret">resetAppSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.resetAppSecretSettingName">resetAppSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppSecret` <a name="resetAppSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.resetAppSecret"></a>

```java
public void resetAppSecret()
```

##### `resetAppSecretSettingName` <a name="resetAppSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.resetAppSecretSettingName"></a>

```java
public void resetAppSecretSettingName()
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```java
public void resetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.appSecretInput">appSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.appSecretSettingNameInput">appSecretSettingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.appSecret">appSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.appSecretSettingName">appSecretSettingName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebook">LinuxWebAppAuthSettingsFacebook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `appSecretInput`<sup>Optional</sup> <a name="appSecretInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```java
public java.lang.String getAppSecretInput();
```

- *Type:* java.lang.String

---

##### `appSecretSettingNameInput`<sup>Optional</sup> <a name="appSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.appSecretSettingNameInput"></a>

```java
public java.lang.String getAppSecretSettingNameInput();
```

- *Type:* java.lang.String

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```java
public java.util.List<java.lang.String> getOauthScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.appSecret"></a>

```java
public java.lang.String getAppSecret();
```

- *Type:* java.lang.String

---

##### `appSecretSettingName`<sup>Required</sup> <a name="appSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.appSecretSettingName"></a>

```java
public java.lang.String getAppSecretSettingName();
```

- *Type:* java.lang.String

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference.property.internalValue"></a>

```java
public LinuxWebAppAuthSettingsFacebook getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebook">LinuxWebAppAuthSettingsFacebook</a>

---


### LinuxWebAppAuthSettingsGithubOutputReference <a name="LinuxWebAppAuthSettingsGithubOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppAuthSettingsGithubOutputReference;

new LinuxWebAppAuthSettingsGithubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.resetClientSecretSettingName">resetClientSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetClientSecretSettingName` <a name="resetClientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.resetClientSecretSettingName"></a>

```java
public void resetClientSecretSettingName()
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.resetOauthScopes"></a>

```java
public void resetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.clientSecretSettingNameInput">clientSecretSettingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithub">LinuxWebAppAuthSettingsGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `clientSecretSettingNameInput`<sup>Optional</sup> <a name="clientSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.clientSecretSettingNameInput"></a>

```java
public java.lang.String getClientSecretSettingNameInput();
```

- *Type:* java.lang.String

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.oauthScopesInput"></a>

```java
public java.util.List<java.lang.String> getOauthScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.clientSecretSettingName"></a>

```java
public java.lang.String getClientSecretSettingName();
```

- *Type:* java.lang.String

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference.property.internalValue"></a>

```java
public LinuxWebAppAuthSettingsGithub getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithub">LinuxWebAppAuthSettingsGithub</a>

---


### LinuxWebAppAuthSettingsGoogleOutputReference <a name="LinuxWebAppAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppAuthSettingsGoogleOutputReference;

new LinuxWebAppAuthSettingsGoogleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.resetClientSecretSettingName">resetClientSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetClientSecretSettingName` <a name="resetClientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.resetClientSecretSettingName"></a>

```java
public void resetClientSecretSettingName()
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```java
public void resetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.clientSecretSettingNameInput">clientSecretSettingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogle">LinuxWebAppAuthSettingsGoogle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `clientSecretSettingNameInput`<sup>Optional</sup> <a name="clientSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.clientSecretSettingNameInput"></a>

```java
public java.lang.String getClientSecretSettingNameInput();
```

- *Type:* java.lang.String

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```java
public java.util.List<java.lang.String> getOauthScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.clientSecretSettingName"></a>

```java
public java.lang.String getClientSecretSettingName();
```

- *Type:* java.lang.String

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference.property.internalValue"></a>

```java
public LinuxWebAppAuthSettingsGoogle getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogle">LinuxWebAppAuthSettingsGoogle</a>

---


### LinuxWebAppAuthSettingsMicrosoftOutputReference <a name="LinuxWebAppAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppAuthSettingsMicrosoftOutputReference;

new LinuxWebAppAuthSettingsMicrosoftOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.resetClientSecretSettingName">resetClientSecretSettingName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetClientSecretSettingName` <a name="resetClientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.resetClientSecretSettingName"></a>

```java
public void resetClientSecretSettingName()
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```java
public void resetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingNameInput">clientSecretSettingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoft">LinuxWebAppAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `clientSecretSettingNameInput`<sup>Optional</sup> <a name="clientSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingNameInput"></a>

```java
public java.lang.String getClientSecretSettingNameInput();
```

- *Type:* java.lang.String

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```java
public java.util.List<java.lang.String> getOauthScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName"></a>

```java
public java.lang.String getClientSecretSettingName();
```

- *Type:* java.lang.String

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```java
public LinuxWebAppAuthSettingsMicrosoft getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoft">LinuxWebAppAuthSettingsMicrosoft</a>

---


### LinuxWebAppAuthSettingsOutputReference <a name="LinuxWebAppAuthSettingsOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppAuthSettingsOutputReference;

new LinuxWebAppAuthSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putActiveDirectory">putActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putFacebook">putFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putGithub">putGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putGoogle">putGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putMicrosoft">putMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putTwitter">putTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetActiveDirectory">resetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetAdditionalLoginParameters">resetAdditionalLoginParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">resetAllowedExternalRedirectUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetDefaultProvider">resetDefaultProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetFacebook">resetFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetGithub">resetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetGoogle">resetGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetMicrosoft">resetMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetTokenRefreshExtensionHours">resetTokenRefreshExtensionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetTokenStoreEnabled">resetTokenStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetTwitter">resetTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetUnauthenticatedClientAction">resetUnauthenticatedClientAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveDirectory` <a name="putActiveDirectory" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putActiveDirectory"></a>

```java
public void putActiveDirectory(LinuxWebAppAuthSettingsActiveDirectory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectory">LinuxWebAppAuthSettingsActiveDirectory</a>

---

##### `putFacebook` <a name="putFacebook" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putFacebook"></a>

```java
public void putFacebook(LinuxWebAppAuthSettingsFacebook value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putFacebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebook">LinuxWebAppAuthSettingsFacebook</a>

---

##### `putGithub` <a name="putGithub" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putGithub"></a>

```java
public void putGithub(LinuxWebAppAuthSettingsGithub value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putGithub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithub">LinuxWebAppAuthSettingsGithub</a>

---

##### `putGoogle` <a name="putGoogle" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putGoogle"></a>

```java
public void putGoogle(LinuxWebAppAuthSettingsGoogle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putGoogle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogle">LinuxWebAppAuthSettingsGoogle</a>

---

##### `putMicrosoft` <a name="putMicrosoft" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putMicrosoft"></a>

```java
public void putMicrosoft(LinuxWebAppAuthSettingsMicrosoft value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putMicrosoft.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoft">LinuxWebAppAuthSettingsMicrosoft</a>

---

##### `putTwitter` <a name="putTwitter" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putTwitter"></a>

```java
public void putTwitter(LinuxWebAppAuthSettingsTwitter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.putTwitter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitter">LinuxWebAppAuthSettingsTwitter</a>

---

##### `resetActiveDirectory` <a name="resetActiveDirectory" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetActiveDirectory"></a>

```java
public void resetActiveDirectory()
```

##### `resetAdditionalLoginParameters` <a name="resetAdditionalLoginParameters" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetAdditionalLoginParameters"></a>

```java
public void resetAdditionalLoginParameters()
```

##### `resetAllowedExternalRedirectUrls` <a name="resetAllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```java
public void resetAllowedExternalRedirectUrls()
```

##### `resetDefaultProvider` <a name="resetDefaultProvider" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetDefaultProvider"></a>

```java
public void resetDefaultProvider()
```

##### `resetFacebook` <a name="resetFacebook" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetFacebook"></a>

```java
public void resetFacebook()
```

##### `resetGithub` <a name="resetGithub" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetGithub"></a>

```java
public void resetGithub()
```

##### `resetGoogle` <a name="resetGoogle" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetGoogle"></a>

```java
public void resetGoogle()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```

##### `resetMicrosoft` <a name="resetMicrosoft" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetMicrosoft"></a>

```java
public void resetMicrosoft()
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetRuntimeVersion"></a>

```java
public void resetRuntimeVersion()
```

##### `resetTokenRefreshExtensionHours` <a name="resetTokenRefreshExtensionHours" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```java
public void resetTokenRefreshExtensionHours()
```

##### `resetTokenStoreEnabled` <a name="resetTokenStoreEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```java
public void resetTokenStoreEnabled()
```

##### `resetTwitter` <a name="resetTwitter" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetTwitter"></a>

```java
public void resetTwitter()
```

##### `resetUnauthenticatedClientAction` <a name="resetUnauthenticatedClientAction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```java
public void resetUnauthenticatedClientAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference">LinuxWebAppAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference">LinuxWebAppAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference">LinuxWebAppAuthSettingsGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference">LinuxWebAppAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference">LinuxWebAppAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference">LinuxWebAppAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.activeDirectoryInput">activeDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectory">LinuxWebAppAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.additionalLoginParametersInput">additionalLoginParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">allowedExternalRedirectUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.defaultProviderInput">defaultProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.facebookInput">facebookInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebook">LinuxWebAppAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.githubInput">githubInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithub">LinuxWebAppAuthSettingsGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.googleInput">googleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogle">LinuxWebAppAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.microsoftInput">microsoftInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoft">LinuxWebAppAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">tokenRefreshExtensionHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.tokenStoreEnabledInput">tokenStoreEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.twitterInput">twitterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitter">LinuxWebAppAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.unauthenticatedClientActionInput">unauthenticatedClientActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.additionalLoginParameters">additionalLoginParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.defaultProvider">defaultProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings">LinuxWebAppAuthSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.activeDirectory"></a>

```java
public LinuxWebAppAuthSettingsActiveDirectoryOutputReference getActiveDirectory();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectoryOutputReference">LinuxWebAppAuthSettingsActiveDirectoryOutputReference</a>

---

##### `facebook`<sup>Required</sup> <a name="facebook" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.facebook"></a>

```java
public LinuxWebAppAuthSettingsFacebookOutputReference getFacebook();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebookOutputReference">LinuxWebAppAuthSettingsFacebookOutputReference</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.github"></a>

```java
public LinuxWebAppAuthSettingsGithubOutputReference getGithub();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithubOutputReference">LinuxWebAppAuthSettingsGithubOutputReference</a>

---

##### `google`<sup>Required</sup> <a name="google" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.google"></a>

```java
public LinuxWebAppAuthSettingsGoogleOutputReference getGoogle();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogleOutputReference">LinuxWebAppAuthSettingsGoogleOutputReference</a>

---

##### `microsoft`<sup>Required</sup> <a name="microsoft" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.microsoft"></a>

```java
public LinuxWebAppAuthSettingsMicrosoftOutputReference getMicrosoft();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoftOutputReference">LinuxWebAppAuthSettingsMicrosoftOutputReference</a>

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.twitter"></a>

```java
public LinuxWebAppAuthSettingsTwitterOutputReference getTwitter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference">LinuxWebAppAuthSettingsTwitterOutputReference</a>

---

##### `activeDirectoryInput`<sup>Optional</sup> <a name="activeDirectoryInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```java
public LinuxWebAppAuthSettingsActiveDirectory getActiveDirectoryInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsActiveDirectory">LinuxWebAppAuthSettingsActiveDirectory</a>

---

##### `additionalLoginParametersInput`<sup>Optional</sup> <a name="additionalLoginParametersInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.additionalLoginParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalLoginParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `allowedExternalRedirectUrlsInput`<sup>Optional</sup> <a name="allowedExternalRedirectUrlsInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedExternalRedirectUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultProviderInput`<sup>Optional</sup> <a name="defaultProviderInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.defaultProviderInput"></a>

```java
public java.lang.String getDefaultProviderInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `facebookInput`<sup>Optional</sup> <a name="facebookInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.facebookInput"></a>

```java
public LinuxWebAppAuthSettingsFacebook getFacebookInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsFacebook">LinuxWebAppAuthSettingsFacebook</a>

---

##### `githubInput`<sup>Optional</sup> <a name="githubInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.githubInput"></a>

```java
public LinuxWebAppAuthSettingsGithub getGithubInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGithub">LinuxWebAppAuthSettingsGithub</a>

---

##### `googleInput`<sup>Optional</sup> <a name="googleInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.googleInput"></a>

```java
public LinuxWebAppAuthSettingsGoogle getGoogleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsGoogle">LinuxWebAppAuthSettingsGoogle</a>

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `microsoftInput`<sup>Optional</sup> <a name="microsoftInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.microsoftInput"></a>

```java
public LinuxWebAppAuthSettingsMicrosoft getMicrosoftInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsMicrosoft">LinuxWebAppAuthSettingsMicrosoft</a>

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```java
public java.lang.String getRuntimeVersionInput();
```

- *Type:* java.lang.String

---

##### `tokenRefreshExtensionHoursInput`<sup>Optional</sup> <a name="tokenRefreshExtensionHoursInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```java
public java.lang.Number getTokenRefreshExtensionHoursInput();
```

- *Type:* java.lang.Number

---

##### `tokenStoreEnabledInput`<sup>Optional</sup> <a name="tokenStoreEnabledInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```java
public java.lang.Object getTokenStoreEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `twitterInput`<sup>Optional</sup> <a name="twitterInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.twitterInput"></a>

```java
public LinuxWebAppAuthSettingsTwitter getTwitterInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitter">LinuxWebAppAuthSettingsTwitter</a>

---

##### `unauthenticatedClientActionInput`<sup>Optional</sup> <a name="unauthenticatedClientActionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```java
public java.lang.String getUnauthenticatedClientActionInput();
```

- *Type:* java.lang.String

---

##### `additionalLoginParameters`<sup>Required</sup> <a name="additionalLoginParameters" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.additionalLoginParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalLoginParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `allowedExternalRedirectUrls`<sup>Required</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```java
public java.util.List<java.lang.String> getAllowedExternalRedirectUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultProvider`<sup>Required</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.defaultProvider"></a>

```java
public java.lang.String getDefaultProvider();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `tokenRefreshExtensionHours`<sup>Required</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```java
public java.lang.Number getTokenRefreshExtensionHours();
```

- *Type:* java.lang.Number

---

##### `tokenStoreEnabled`<sup>Required</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```java
public java.lang.Object getTokenStoreEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unauthenticatedClientAction`<sup>Required</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```java
public java.lang.String getUnauthenticatedClientAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsOutputReference.property.internalValue"></a>

```java
public LinuxWebAppAuthSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettings">LinuxWebAppAuthSettings</a>

---


### LinuxWebAppAuthSettingsTwitterOutputReference <a name="LinuxWebAppAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppAuthSettingsTwitterOutputReference;

new LinuxWebAppAuthSettingsTwitterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.resetConsumerSecret">resetConsumerSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.resetConsumerSecretSettingName">resetConsumerSecretSettingName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsumerSecret` <a name="resetConsumerSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.resetConsumerSecret"></a>

```java
public void resetConsumerSecret()
```

##### `resetConsumerSecretSettingName` <a name="resetConsumerSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.resetConsumerSecretSettingName"></a>

```java
public void resetConsumerSecretSettingName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.consumerKeyInput">consumerKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.consumerSecretInput">consumerSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingNameInput">consumerSecretSettingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingName">consumerSecretSettingName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitter">LinuxWebAppAuthSettingsTwitter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerKeyInput`<sup>Optional</sup> <a name="consumerKeyInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```java
public java.lang.String getConsumerKeyInput();
```

- *Type:* java.lang.String

---

##### `consumerSecretInput`<sup>Optional</sup> <a name="consumerSecretInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```java
public java.lang.String getConsumerSecretInput();
```

- *Type:* java.lang.String

---

##### `consumerSecretSettingNameInput`<sup>Optional</sup> <a name="consumerSecretSettingNameInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingNameInput"></a>

```java
public java.lang.String getConsumerSecretSettingNameInput();
```

- *Type:* java.lang.String

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

---

##### `consumerSecretSettingName`<sup>Required</sup> <a name="consumerSecretSettingName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingName"></a>

```java
public java.lang.String getConsumerSecretSettingName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitterOutputReference.property.internalValue"></a>

```java
public LinuxWebAppAuthSettingsTwitter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppAuthSettingsTwitter">LinuxWebAppAuthSettingsTwitter</a>

---


### LinuxWebAppBackupOutputReference <a name="LinuxWebAppBackupOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppBackupOutputReference;

new LinuxWebAppBackupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.putSchedule"></a>

```java
public void putSchedule(LinuxWebAppBackupSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule">LinuxWebAppBackupSchedule</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference">LinuxWebAppBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule">LinuxWebAppBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.storageAccountUrlInput">storageAccountUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.storageAccountUrl">storageAccountUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup">LinuxWebAppBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.schedule"></a>

```java
public LinuxWebAppBackupScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference">LinuxWebAppBackupScheduleOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.scheduleInput"></a>

```java
public LinuxWebAppBackupSchedule getScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule">LinuxWebAppBackupSchedule</a>

---

##### `storageAccountUrlInput`<sup>Optional</sup> <a name="storageAccountUrlInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.storageAccountUrlInput"></a>

```java
public java.lang.String getStorageAccountUrlInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `storageAccountUrl`<sup>Required</sup> <a name="storageAccountUrl" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.storageAccountUrl"></a>

```java
public java.lang.String getStorageAccountUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupOutputReference.property.internalValue"></a>

```java
public LinuxWebAppBackup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackup">LinuxWebAppBackup</a>

---


### LinuxWebAppBackupScheduleOutputReference <a name="LinuxWebAppBackupScheduleOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppBackupScheduleOutputReference;

new LinuxWebAppBackupScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.resetKeepAtLeastOneBackup">resetKeepAtLeastOneBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.resetRetentionPeriodDays">resetRetentionPeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeepAtLeastOneBackup` <a name="resetKeepAtLeastOneBackup" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.resetKeepAtLeastOneBackup"></a>

```java
public void resetKeepAtLeastOneBackup()
```

##### `resetRetentionPeriodDays` <a name="resetRetentionPeriodDays" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.resetRetentionPeriodDays"></a>

```java
public void resetRetentionPeriodDays()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.lastExecutionTime">lastExecutionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.frequencyUnitInput">frequencyUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.keepAtLeastOneBackupInput">keepAtLeastOneBackupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.retentionPeriodDaysInput">retentionPeriodDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.frequencyUnit">frequencyUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.keepAtLeastOneBackup">keepAtLeastOneBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule">LinuxWebAppBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastExecutionTime`<sup>Required</sup> <a name="lastExecutionTime" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.lastExecutionTime"></a>

```java
public java.lang.String getLastExecutionTime();
```

- *Type:* java.lang.String

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.frequencyIntervalInput"></a>

```java
public java.lang.Number getFrequencyIntervalInput();
```

- *Type:* java.lang.Number

---

##### `frequencyUnitInput`<sup>Optional</sup> <a name="frequencyUnitInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.frequencyUnitInput"></a>

```java
public java.lang.String getFrequencyUnitInput();
```

- *Type:* java.lang.String

---

##### `keepAtLeastOneBackupInput`<sup>Optional</sup> <a name="keepAtLeastOneBackupInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.keepAtLeastOneBackupInput"></a>

```java
public java.lang.Object getKeepAtLeastOneBackupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPeriodDaysInput`<sup>Optional</sup> <a name="retentionPeriodDaysInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.retentionPeriodDaysInput"></a>

```java
public java.lang.Number getRetentionPeriodDaysInput();
```

- *Type:* java.lang.Number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.frequencyInterval"></a>

```java
public java.lang.Number getFrequencyInterval();
```

- *Type:* java.lang.Number

---

##### `frequencyUnit`<sup>Required</sup> <a name="frequencyUnit" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.frequencyUnit"></a>

```java
public java.lang.String getFrequencyUnit();
```

- *Type:* java.lang.String

---

##### `keepAtLeastOneBackup`<sup>Required</sup> <a name="keepAtLeastOneBackup" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.keepAtLeastOneBackup"></a>

```java
public java.lang.Object getKeepAtLeastOneBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPeriodDays`<sup>Required</sup> <a name="retentionPeriodDays" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.retentionPeriodDays"></a>

```java
public java.lang.Number getRetentionPeriodDays();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupScheduleOutputReference.property.internalValue"></a>

```java
public LinuxWebAppBackupSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppBackupSchedule">LinuxWebAppBackupSchedule</a>

---


### LinuxWebAppConnectionStringList <a name="LinuxWebAppConnectionStringList" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppConnectionStringList;

new LinuxWebAppConnectionStringList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.get"></a>

```java
public LinuxWebAppConnectionStringOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString">LinuxWebAppConnectionString</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString">LinuxWebAppConnectionString</a>>

---


### LinuxWebAppConnectionStringOutputReference <a name="LinuxWebAppConnectionStringOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppConnectionStringOutputReference;

new LinuxWebAppConnectionStringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString">LinuxWebAppConnectionString</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionStringOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppConnectionString">LinuxWebAppConnectionString</a> OR com.hashicorp.cdktf.IResolvable

---


### LinuxWebAppIdentityOutputReference <a name="LinuxWebAppIdentityOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppIdentityOutputReference;

new LinuxWebAppIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentity">LinuxWebAppIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentityOutputReference.property.internalValue"></a>

```java
public LinuxWebAppIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppIdentity">LinuxWebAppIdentity</a>

---


### LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference <a name="LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference;

new LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.levelInput">levelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrlInput">sasUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrl">sasUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorage">LinuxWebAppLogsApplicationLogsAzureBlobStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.levelInput"></a>

```java
public java.lang.String getLevelInput();
```

- *Type:* java.lang.String

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDaysInput"></a>

```java
public java.lang.Number getRetentionInDaysInput();
```

- *Type:* java.lang.Number

---

##### `sasUrlInput`<sup>Optional</sup> <a name="sasUrlInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrlInput"></a>

```java
public java.lang.String getSasUrlInput();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

---

##### `sasUrl`<sup>Required</sup> <a name="sasUrl" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrl"></a>

```java
public java.lang.String getSasUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference.property.internalValue"></a>

```java
public LinuxWebAppLogsApplicationLogsAzureBlobStorage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorage">LinuxWebAppLogsApplicationLogsAzureBlobStorage</a>

---


### LinuxWebAppLogsApplicationLogsOutputReference <a name="LinuxWebAppLogsApplicationLogsOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppLogsApplicationLogsOutputReference;

new LinuxWebAppLogsApplicationLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.putAzureBlobStorage">putAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.resetAzureBlobStorage">resetAzureBlobStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureBlobStorage` <a name="putAzureBlobStorage" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.putAzureBlobStorage"></a>

```java
public void putAzureBlobStorage(LinuxWebAppLogsApplicationLogsAzureBlobStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.putAzureBlobStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorage">LinuxWebAppLogsApplicationLogsAzureBlobStorage</a>

---

##### `resetAzureBlobStorage` <a name="resetAzureBlobStorage" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.resetAzureBlobStorage"></a>

```java
public void resetAzureBlobStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.property.azureBlobStorage">azureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference">LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.property.azureBlobStorageInput">azureBlobStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorage">LinuxWebAppLogsApplicationLogsAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.property.fileSystemLevelInput">fileSystemLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.property.fileSystemLevel">fileSystemLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogs">LinuxWebAppLogsApplicationLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureBlobStorage`<sup>Required</sup> <a name="azureBlobStorage" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.property.azureBlobStorage"></a>

```java
public LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference getAzureBlobStorage();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference">LinuxWebAppLogsApplicationLogsAzureBlobStorageOutputReference</a>

---

##### `azureBlobStorageInput`<sup>Optional</sup> <a name="azureBlobStorageInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.property.azureBlobStorageInput"></a>

```java
public LinuxWebAppLogsApplicationLogsAzureBlobStorage getAzureBlobStorageInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsAzureBlobStorage">LinuxWebAppLogsApplicationLogsAzureBlobStorage</a>

---

##### `fileSystemLevelInput`<sup>Optional</sup> <a name="fileSystemLevelInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.property.fileSystemLevelInput"></a>

```java
public java.lang.String getFileSystemLevelInput();
```

- *Type:* java.lang.String

---

##### `fileSystemLevel`<sup>Required</sup> <a name="fileSystemLevel" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.property.fileSystemLevel"></a>

```java
public java.lang.String getFileSystemLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference.property.internalValue"></a>

```java
public LinuxWebAppLogsApplicationLogs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogs">LinuxWebAppLogsApplicationLogs</a>

---


### LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference <a name="LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference;

new LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.resetRetentionInDays"></a>

```java
public void resetRetentionInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrlInput">sasUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrl">sasUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorage">LinuxWebAppLogsHttpLogsAzureBlobStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDaysInput"></a>

```java
public java.lang.Number getRetentionInDaysInput();
```

- *Type:* java.lang.Number

---

##### `sasUrlInput`<sup>Optional</sup> <a name="sasUrlInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrlInput"></a>

```java
public java.lang.String getSasUrlInput();
```

- *Type:* java.lang.String

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

---

##### `sasUrl`<sup>Required</sup> <a name="sasUrl" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrl"></a>

```java
public java.lang.String getSasUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference.property.internalValue"></a>

```java
public LinuxWebAppLogsHttpLogsAzureBlobStorage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorage">LinuxWebAppLogsHttpLogsAzureBlobStorage</a>

---


### LinuxWebAppLogsHttpLogsFileSystemOutputReference <a name="LinuxWebAppLogsHttpLogsFileSystemOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppLogsHttpLogsFileSystemOutputReference;

new LinuxWebAppLogsHttpLogsFileSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.property.retentionInMbInput">retentionInMbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.property.retentionInMb">retentionInMb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystem">LinuxWebAppLogsHttpLogsFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.property.retentionInDaysInput"></a>

```java
public java.lang.Number getRetentionInDaysInput();
```

- *Type:* java.lang.Number

---

##### `retentionInMbInput`<sup>Optional</sup> <a name="retentionInMbInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.property.retentionInMbInput"></a>

```java
public java.lang.Number getRetentionInMbInput();
```

- *Type:* java.lang.Number

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

---

##### `retentionInMb`<sup>Required</sup> <a name="retentionInMb" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.property.retentionInMb"></a>

```java
public java.lang.Number getRetentionInMb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference.property.internalValue"></a>

```java
public LinuxWebAppLogsHttpLogsFileSystem getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystem">LinuxWebAppLogsHttpLogsFileSystem</a>

---


### LinuxWebAppLogsHttpLogsOutputReference <a name="LinuxWebAppLogsHttpLogsOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppLogsHttpLogsOutputReference;

new LinuxWebAppLogsHttpLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.putAzureBlobStorage">putAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.putFileSystem">putFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.resetAzureBlobStorage">resetAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.resetFileSystem">resetFileSystem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureBlobStorage` <a name="putAzureBlobStorage" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.putAzureBlobStorage"></a>

```java
public void putAzureBlobStorage(LinuxWebAppLogsHttpLogsAzureBlobStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.putAzureBlobStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorage">LinuxWebAppLogsHttpLogsAzureBlobStorage</a>

---

##### `putFileSystem` <a name="putFileSystem" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.putFileSystem"></a>

```java
public void putFileSystem(LinuxWebAppLogsHttpLogsFileSystem value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.putFileSystem.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystem">LinuxWebAppLogsHttpLogsFileSystem</a>

---

##### `resetAzureBlobStorage` <a name="resetAzureBlobStorage" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.resetAzureBlobStorage"></a>

```java
public void resetAzureBlobStorage()
```

##### `resetFileSystem` <a name="resetFileSystem" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.resetFileSystem"></a>

```java
public void resetFileSystem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.property.azureBlobStorage">azureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference">LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.property.fileSystem">fileSystem</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference">LinuxWebAppLogsHttpLogsFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.property.azureBlobStorageInput">azureBlobStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorage">LinuxWebAppLogsHttpLogsAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.property.fileSystemInput">fileSystemInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystem">LinuxWebAppLogsHttpLogsFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogs">LinuxWebAppLogsHttpLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureBlobStorage`<sup>Required</sup> <a name="azureBlobStorage" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.property.azureBlobStorage"></a>

```java
public LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference getAzureBlobStorage();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference">LinuxWebAppLogsHttpLogsAzureBlobStorageOutputReference</a>

---

##### `fileSystem`<sup>Required</sup> <a name="fileSystem" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.property.fileSystem"></a>

```java
public LinuxWebAppLogsHttpLogsFileSystemOutputReference getFileSystem();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystemOutputReference">LinuxWebAppLogsHttpLogsFileSystemOutputReference</a>

---

##### `azureBlobStorageInput`<sup>Optional</sup> <a name="azureBlobStorageInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.property.azureBlobStorageInput"></a>

```java
public LinuxWebAppLogsHttpLogsAzureBlobStorage getAzureBlobStorageInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsAzureBlobStorage">LinuxWebAppLogsHttpLogsAzureBlobStorage</a>

---

##### `fileSystemInput`<sup>Optional</sup> <a name="fileSystemInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.property.fileSystemInput"></a>

```java
public LinuxWebAppLogsHttpLogsFileSystem getFileSystemInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsFileSystem">LinuxWebAppLogsHttpLogsFileSystem</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference.property.internalValue"></a>

```java
public LinuxWebAppLogsHttpLogs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogs">LinuxWebAppLogsHttpLogs</a>

---


### LinuxWebAppLogsOutputReference <a name="LinuxWebAppLogsOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppLogsOutputReference;

new LinuxWebAppLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.putApplicationLogs">putApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.putHttpLogs">putHttpLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.resetApplicationLogs">resetApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.resetDetailedErrorMessages">resetDetailedErrorMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.resetFailedRequestTracing">resetFailedRequestTracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.resetHttpLogs">resetHttpLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplicationLogs` <a name="putApplicationLogs" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.putApplicationLogs"></a>

```java
public void putApplicationLogs(LinuxWebAppLogsApplicationLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.putApplicationLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogs">LinuxWebAppLogsApplicationLogs</a>

---

##### `putHttpLogs` <a name="putHttpLogs" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.putHttpLogs"></a>

```java
public void putHttpLogs(LinuxWebAppLogsHttpLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.putHttpLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogs">LinuxWebAppLogsHttpLogs</a>

---

##### `resetApplicationLogs` <a name="resetApplicationLogs" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.resetApplicationLogs"></a>

```java
public void resetApplicationLogs()
```

##### `resetDetailedErrorMessages` <a name="resetDetailedErrorMessages" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.resetDetailedErrorMessages"></a>

```java
public void resetDetailedErrorMessages()
```

##### `resetFailedRequestTracing` <a name="resetFailedRequestTracing" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.resetFailedRequestTracing"></a>

```java
public void resetFailedRequestTracing()
```

##### `resetHttpLogs` <a name="resetHttpLogs" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.resetHttpLogs"></a>

```java
public void resetHttpLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.applicationLogs">applicationLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference">LinuxWebAppLogsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.httpLogs">httpLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference">LinuxWebAppLogsHttpLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.applicationLogsInput">applicationLogsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogs">LinuxWebAppLogsApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.detailedErrorMessagesInput">detailedErrorMessagesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.failedRequestTracingInput">failedRequestTracingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.httpLogsInput">httpLogsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogs">LinuxWebAppLogsHttpLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.detailedErrorMessages">detailedErrorMessages</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.failedRequestTracing">failedRequestTracing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs">LinuxWebAppLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationLogs`<sup>Required</sup> <a name="applicationLogs" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.applicationLogs"></a>

```java
public LinuxWebAppLogsApplicationLogsOutputReference getApplicationLogs();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogsOutputReference">LinuxWebAppLogsApplicationLogsOutputReference</a>

---

##### `httpLogs`<sup>Required</sup> <a name="httpLogs" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.httpLogs"></a>

```java
public LinuxWebAppLogsHttpLogsOutputReference getHttpLogs();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogsOutputReference">LinuxWebAppLogsHttpLogsOutputReference</a>

---

##### `applicationLogsInput`<sup>Optional</sup> <a name="applicationLogsInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.applicationLogsInput"></a>

```java
public LinuxWebAppLogsApplicationLogs getApplicationLogsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsApplicationLogs">LinuxWebAppLogsApplicationLogs</a>

---

##### `detailedErrorMessagesInput`<sup>Optional</sup> <a name="detailedErrorMessagesInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.detailedErrorMessagesInput"></a>

```java
public java.lang.Object getDetailedErrorMessagesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failedRequestTracingInput`<sup>Optional</sup> <a name="failedRequestTracingInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.failedRequestTracingInput"></a>

```java
public java.lang.Object getFailedRequestTracingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpLogsInput`<sup>Optional</sup> <a name="httpLogsInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.httpLogsInput"></a>

```java
public LinuxWebAppLogsHttpLogs getHttpLogsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsHttpLogs">LinuxWebAppLogsHttpLogs</a>

---

##### `detailedErrorMessages`<sup>Required</sup> <a name="detailedErrorMessages" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.detailedErrorMessages"></a>

```java
public java.lang.Object getDetailedErrorMessages();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failedRequestTracing`<sup>Required</sup> <a name="failedRequestTracing" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.failedRequestTracing"></a>

```java
public java.lang.Object getFailedRequestTracing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogsOutputReference.property.internalValue"></a>

```java
public LinuxWebAppLogs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppLogs">LinuxWebAppLogs</a>

---


### LinuxWebAppSiteConfigApplicationStackOutputReference <a name="LinuxWebAppSiteConfigApplicationStackOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigApplicationStackOutputReference;

new LinuxWebAppSiteConfigApplicationStackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetDockerImage">resetDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetDockerImageTag">resetDockerImageTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetDotnetVersion">resetDotnetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetGoVersion">resetGoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetJavaServer">resetJavaServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetJavaServerVersion">resetJavaServerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetJavaVersion">resetJavaVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetNodeVersion">resetNodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetPhpVersion">resetPhpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetPythonVersion">resetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetRubyVersion">resetRubyVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDockerImage` <a name="resetDockerImage" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetDockerImage"></a>

```java
public void resetDockerImage()
```

##### `resetDockerImageTag` <a name="resetDockerImageTag" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetDockerImageTag"></a>

```java
public void resetDockerImageTag()
```

##### `resetDotnetVersion` <a name="resetDotnetVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetDotnetVersion"></a>

```java
public void resetDotnetVersion()
```

##### `resetGoVersion` <a name="resetGoVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetGoVersion"></a>

```java
public void resetGoVersion()
```

##### `resetJavaServer` <a name="resetJavaServer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetJavaServer"></a>

```java
public void resetJavaServer()
```

##### `resetJavaServerVersion` <a name="resetJavaServerVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetJavaServerVersion"></a>

```java
public void resetJavaServerVersion()
```

##### `resetJavaVersion` <a name="resetJavaVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetJavaVersion"></a>

```java
public void resetJavaVersion()
```

##### `resetNodeVersion` <a name="resetNodeVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetNodeVersion"></a>

```java
public void resetNodeVersion()
```

##### `resetPhpVersion` <a name="resetPhpVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetPhpVersion"></a>

```java
public void resetPhpVersion()
```

##### `resetPythonVersion` <a name="resetPythonVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetPythonVersion"></a>

```java
public void resetPythonVersion()
```

##### `resetRubyVersion` <a name="resetRubyVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.resetRubyVersion"></a>

```java
public void resetRubyVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.dockerImageInput">dockerImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.dockerImageTagInput">dockerImageTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.dotnetVersionInput">dotnetVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.goVersionInput">goVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.javaServerInput">javaServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.javaServerVersionInput">javaServerVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.javaVersionInput">javaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.nodeVersionInput">nodeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.phpVersionInput">phpVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.pythonVersionInput">pythonVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.rubyVersionInput">rubyVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.dockerImage">dockerImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.dockerImageTag">dockerImageTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.dotnetVersion">dotnetVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.goVersion">goVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.javaServer">javaServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.javaServerVersion">javaServerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.javaVersion">javaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.nodeVersion">nodeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.phpVersion">phpVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.pythonVersion">pythonVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.rubyVersion">rubyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack">LinuxWebAppSiteConfigApplicationStack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dockerImageInput`<sup>Optional</sup> <a name="dockerImageInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.dockerImageInput"></a>

```java
public java.lang.String getDockerImageInput();
```

- *Type:* java.lang.String

---

##### `dockerImageTagInput`<sup>Optional</sup> <a name="dockerImageTagInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.dockerImageTagInput"></a>

```java
public java.lang.String getDockerImageTagInput();
```

- *Type:* java.lang.String

---

##### `dotnetVersionInput`<sup>Optional</sup> <a name="dotnetVersionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.dotnetVersionInput"></a>

```java
public java.lang.String getDotnetVersionInput();
```

- *Type:* java.lang.String

---

##### `goVersionInput`<sup>Optional</sup> <a name="goVersionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.goVersionInput"></a>

```java
public java.lang.String getGoVersionInput();
```

- *Type:* java.lang.String

---

##### `javaServerInput`<sup>Optional</sup> <a name="javaServerInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.javaServerInput"></a>

```java
public java.lang.String getJavaServerInput();
```

- *Type:* java.lang.String

---

##### `javaServerVersionInput`<sup>Optional</sup> <a name="javaServerVersionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.javaServerVersionInput"></a>

```java
public java.lang.String getJavaServerVersionInput();
```

- *Type:* java.lang.String

---

##### `javaVersionInput`<sup>Optional</sup> <a name="javaVersionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.javaVersionInput"></a>

```java
public java.lang.String getJavaVersionInput();
```

- *Type:* java.lang.String

---

##### `nodeVersionInput`<sup>Optional</sup> <a name="nodeVersionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.nodeVersionInput"></a>

```java
public java.lang.String getNodeVersionInput();
```

- *Type:* java.lang.String

---

##### `phpVersionInput`<sup>Optional</sup> <a name="phpVersionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.phpVersionInput"></a>

```java
public java.lang.String getPhpVersionInput();
```

- *Type:* java.lang.String

---

##### `pythonVersionInput`<sup>Optional</sup> <a name="pythonVersionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.pythonVersionInput"></a>

```java
public java.lang.String getPythonVersionInput();
```

- *Type:* java.lang.String

---

##### `rubyVersionInput`<sup>Optional</sup> <a name="rubyVersionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.rubyVersionInput"></a>

```java
public java.lang.String getRubyVersionInput();
```

- *Type:* java.lang.String

---

##### `dockerImage`<sup>Required</sup> <a name="dockerImage" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.dockerImage"></a>

```java
public java.lang.String getDockerImage();
```

- *Type:* java.lang.String

---

##### `dockerImageTag`<sup>Required</sup> <a name="dockerImageTag" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.dockerImageTag"></a>

```java
public java.lang.String getDockerImageTag();
```

- *Type:* java.lang.String

---

##### `dotnetVersion`<sup>Required</sup> <a name="dotnetVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.dotnetVersion"></a>

```java
public java.lang.String getDotnetVersion();
```

- *Type:* java.lang.String

---

##### `goVersion`<sup>Required</sup> <a name="goVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.goVersion"></a>

```java
public java.lang.String getGoVersion();
```

- *Type:* java.lang.String

---

##### `javaServer`<sup>Required</sup> <a name="javaServer" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.javaServer"></a>

```java
public java.lang.String getJavaServer();
```

- *Type:* java.lang.String

---

##### `javaServerVersion`<sup>Required</sup> <a name="javaServerVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.javaServerVersion"></a>

```java
public java.lang.String getJavaServerVersion();
```

- *Type:* java.lang.String

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.javaVersion"></a>

```java
public java.lang.String getJavaVersion();
```

- *Type:* java.lang.String

---

##### `nodeVersion`<sup>Required</sup> <a name="nodeVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.nodeVersion"></a>

```java
public java.lang.String getNodeVersion();
```

- *Type:* java.lang.String

---

##### `phpVersion`<sup>Required</sup> <a name="phpVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.phpVersion"></a>

```java
public java.lang.String getPhpVersion();
```

- *Type:* java.lang.String

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.pythonVersion"></a>

```java
public java.lang.String getPythonVersion();
```

- *Type:* java.lang.String

---

##### `rubyVersion`<sup>Required</sup> <a name="rubyVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.rubyVersion"></a>

```java
public java.lang.String getRubyVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference.property.internalValue"></a>

```java
public LinuxWebAppSiteConfigApplicationStack getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack">LinuxWebAppSiteConfigApplicationStack</a>

---


### LinuxWebAppSiteConfigAutoHealSettingActionOutputReference <a name="LinuxWebAppSiteConfigAutoHealSettingActionOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference;

new LinuxWebAppSiteConfigAutoHealSettingActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.resetMinimumProcessExecutionTime">resetMinimumProcessExecutionTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimumProcessExecutionTime` <a name="resetMinimumProcessExecutionTime" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.resetMinimumProcessExecutionTime"></a>

```java
public void resetMinimumProcessExecutionTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.property.minimumProcessExecutionTimeInput">minimumProcessExecutionTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.property.minimumProcessExecutionTime">minimumProcessExecutionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingAction">LinuxWebAppSiteConfigAutoHealSettingAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.property.actionTypeInput"></a>

```java
public java.lang.String getActionTypeInput();
```

- *Type:* java.lang.String

---

##### `minimumProcessExecutionTimeInput`<sup>Optional</sup> <a name="minimumProcessExecutionTimeInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.property.minimumProcessExecutionTimeInput"></a>

```java
public java.lang.String getMinimumProcessExecutionTimeInput();
```

- *Type:* java.lang.String

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `minimumProcessExecutionTime`<sup>Required</sup> <a name="minimumProcessExecutionTime" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.property.minimumProcessExecutionTime"></a>

```java
public java.lang.String getMinimumProcessExecutionTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference.property.internalValue"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingAction">LinuxWebAppSiteConfigAutoHealSettingAction</a>

---


### LinuxWebAppSiteConfigAutoHealSettingOutputReference <a name="LinuxWebAppSiteConfigAutoHealSettingOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigAutoHealSettingOutputReference;

new LinuxWebAppSiteConfigAutoHealSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.putTrigger">putTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.resetTrigger">resetTrigger</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.putAction"></a>

```java
public void putAction(LinuxWebAppSiteConfigAutoHealSettingAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingAction">LinuxWebAppSiteConfigAutoHealSettingAction</a>

---

##### `putTrigger` <a name="putTrigger" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.putTrigger"></a>

```java
public void putTrigger(LinuxWebAppSiteConfigAutoHealSettingTrigger value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTrigger">LinuxWebAppSiteConfigAutoHealSettingTrigger</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetTrigger` <a name="resetTrigger" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.resetTrigger"></a>

```java
public void resetTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference">LinuxWebAppSiteConfigAutoHealSettingActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference">LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingAction">LinuxWebAppSiteConfigAutoHealSettingAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.property.triggerInput">triggerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTrigger">LinuxWebAppSiteConfigAutoHealSettingTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSetting">LinuxWebAppSiteConfigAutoHealSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.property.action"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingActionOutputReference getAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingActionOutputReference">LinuxWebAppSiteConfigAutoHealSettingActionOutputReference</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.property.trigger"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference getTrigger();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference">LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.property.actionInput"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingAction getActionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingAction">LinuxWebAppSiteConfigAutoHealSettingAction</a>

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.property.triggerInput"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingTrigger getTriggerInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTrigger">LinuxWebAppSiteConfigAutoHealSettingTrigger</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference.property.internalValue"></a>

```java
public LinuxWebAppSiteConfigAutoHealSetting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSetting">LinuxWebAppSiteConfigAutoHealSetting</a>

---


### LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference <a name="LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference;

new LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.putRequests">putRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.putSlowRequest">putSlowRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.putStatusCode">putStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.resetRequests">resetRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.resetSlowRequest">resetSlowRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequests` <a name="putRequests" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.putRequests"></a>

```java
public void putRequests(LinuxWebAppSiteConfigAutoHealSettingTriggerRequests value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.putRequests.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequests">LinuxWebAppSiteConfigAutoHealSettingTriggerRequests</a>

---

##### `putSlowRequest` <a name="putSlowRequest" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.putSlowRequest"></a>

```java
public void putSlowRequest(LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.putSlowRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest">LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest</a>

---

##### `putStatusCode` <a name="putStatusCode" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.putStatusCode"></a>

```java
public void putStatusCode(IResolvable OR java.util.List<LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.putStatusCode.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode</a>>

---

##### `resetRequests` <a name="resetRequests" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.resetRequests"></a>

```java
public void resetRequests()
```

##### `resetSlowRequest` <a name="resetSlowRequest" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.resetSlowRequest"></a>

```java
public void resetSlowRequest()
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.resetStatusCode"></a>

```java
public void resetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.requests">requests</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference">LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.slowRequest">slowRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference">LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.statusCode">statusCode</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList">LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.requestsInput">requestsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequests">LinuxWebAppSiteConfigAutoHealSettingTriggerRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.slowRequestInput">slowRequestInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest">LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTrigger">LinuxWebAppSiteConfigAutoHealSettingTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.requests"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference getRequests();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference">LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference</a>

---

##### `slowRequest`<sup>Required</sup> <a name="slowRequest" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.slowRequest"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference getSlowRequest();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference">LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference</a>

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.statusCode"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList getStatusCode();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList">LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList</a>

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.requestsInput"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingTriggerRequests getRequestsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequests">LinuxWebAppSiteConfigAutoHealSettingTriggerRequests</a>

---

##### `slowRequestInput`<sup>Optional</sup> <a name="slowRequestInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.slowRequestInput"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest getSlowRequestInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest">LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest</a>

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.statusCodeInput"></a>

```java
public java.lang.Object getStatusCodeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerOutputReference.property.internalValue"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingTrigger getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTrigger">LinuxWebAppSiteConfigAutoHealSettingTrigger</a>

---


### LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference <a name="LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference;

new LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.interval">interval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequests">LinuxWebAppSiteConfigAutoHealSettingTriggerRequests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.intervalInput"></a>

```java
public java.lang.String getIntervalInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequestsOutputReference.property.internalValue"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingTriggerRequests getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerRequests">LinuxWebAppSiteConfigAutoHealSettingTriggerRequests</a>

---


### LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference <a name="LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference;

new LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.timeTakenInput">timeTakenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.interval">interval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.timeTaken">timeTaken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest">LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.intervalInput"></a>

```java
public java.lang.String getIntervalInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `timeTakenInput`<sup>Optional</sup> <a name="timeTakenInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.timeTakenInput"></a>

```java
public java.lang.String getTimeTakenInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `timeTaken`<sup>Required</sup> <a name="timeTaken" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.timeTaken"></a>

```java
public java.lang.String getTimeTaken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequestOutputReference.property.internalValue"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest">LinuxWebAppSiteConfigAutoHealSettingTriggerSlowRequest</a>

---


### LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList <a name="LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList;

new LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.get"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode</a>>

---


### LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference <a name="LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference;

new LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resetSubStatus">resetSubStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resetWin32Status">resetWin32Status</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetSubStatus` <a name="resetSubStatus" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resetSubStatus"></a>

```java
public void resetSubStatus()
```

##### `resetWin32Status` <a name="resetWin32Status" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.resetWin32Status"></a>

```java
public void resetWin32Status()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.statusCodeRangeInput">statusCodeRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.subStatusInput">subStatusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.win32StatusInput">win32StatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.interval">interval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.statusCodeRange">statusCodeRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.subStatus">subStatus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.win32Status">win32Status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.intervalInput"></a>

```java
public java.lang.String getIntervalInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `statusCodeRangeInput`<sup>Optional</sup> <a name="statusCodeRangeInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.statusCodeRangeInput"></a>

```java
public java.lang.String getStatusCodeRangeInput();
```

- *Type:* java.lang.String

---

##### `subStatusInput`<sup>Optional</sup> <a name="subStatusInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.subStatusInput"></a>

```java
public java.lang.Number getSubStatusInput();
```

- *Type:* java.lang.Number

---

##### `win32StatusInput`<sup>Optional</sup> <a name="win32StatusInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.win32StatusInput"></a>

```java
public java.lang.String getWin32StatusInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `statusCodeRange`<sup>Required</sup> <a name="statusCodeRange" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.statusCodeRange"></a>

```java
public java.lang.String getStatusCodeRange();
```

- *Type:* java.lang.String

---

##### `subStatus`<sup>Required</sup> <a name="subStatus" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.subStatus"></a>

```java
public java.lang.Number getSubStatus();
```

- *Type:* java.lang.Number

---

##### `win32Status`<sup>Required</sup> <a name="win32Status" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.win32Status"></a>

```java
public java.lang.String getWin32Status();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCodeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode">LinuxWebAppSiteConfigAutoHealSettingTriggerStatusCode</a> OR com.hashicorp.cdktf.IResolvable

---


### LinuxWebAppSiteConfigCorsOutputReference <a name="LinuxWebAppSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigCorsOutputReference;

new LinuxWebAppSiteConfigCorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.resetSupportCredentials">resetSupportCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSupportCredentials` <a name="resetSupportCredentials" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```java
public void resetSupportCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.property.supportCredentialsInput">supportCredentialsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.property.supportCredentials">supportCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCors">LinuxWebAppSiteConfigCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportCredentialsInput`<sup>Optional</sup> <a name="supportCredentialsInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```java
public java.lang.Object getSupportCredentialsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportCredentials`<sup>Required</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.property.supportCredentials"></a>

```java
public java.lang.Object getSupportCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference.property.internalValue"></a>

```java
public LinuxWebAppSiteConfigCors getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCors">LinuxWebAppSiteConfigCors</a>

---


### LinuxWebAppSiteConfigIpRestrictionHeadersList <a name="LinuxWebAppSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigIpRestrictionHeadersList;

new LinuxWebAppSiteConfigIpRestrictionHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.get"></a>

```java
public LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders">LinuxWebAppSiteConfigIpRestrictionHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders">LinuxWebAppSiteConfigIpRestrictionHeaders</a>>

---


### LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference <a name="LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference;

new LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```java
public void resetXAzureFdid()
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```java
public void resetXFdHealthProbe()
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```java
public void resetXForwardedFor()
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```java
public void resetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders">LinuxWebAppSiteConfigIpRestrictionHeaders</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```java
public java.util.List<java.lang.String> getXAzureFdidInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```java
public java.util.List<java.lang.String> getXForwardedForInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```java
public java.util.List<java.lang.String> getXForwardedHostInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```java
public java.util.List<java.lang.String> getXAzureFdid();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbe();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```java
public java.util.List<java.lang.String> getXForwardedFor();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```java
public java.util.List<java.lang.String> getXForwardedHost();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders">LinuxWebAppSiteConfigIpRestrictionHeaders</a> OR com.hashicorp.cdktf.IResolvable

---


### LinuxWebAppSiteConfigIpRestrictionList <a name="LinuxWebAppSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigIpRestrictionList;

new LinuxWebAppSiteConfigIpRestrictionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.get"></a>

```java
public LinuxWebAppSiteConfigIpRestrictionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction">LinuxWebAppSiteConfigIpRestriction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction">LinuxWebAppSiteConfigIpRestriction</a>>

---


### LinuxWebAppSiteConfigIpRestrictionOutputReference <a name="LinuxWebAppSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigIpRestrictionOutputReference;

new LinuxWebAppSiteConfigIpRestrictionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<LinuxWebAppSiteConfigIpRestrictionHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders">LinuxWebAppSiteConfigIpRestrictionHeaders</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```java
public void resetServiceTag()
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```java
public void resetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList">LinuxWebAppSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders">LinuxWebAppSiteConfigIpRestrictionHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction">LinuxWebAppSiteConfigIpRestriction</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.headers"></a>

```java
public LinuxWebAppSiteConfigIpRestrictionHeadersList getHeaders();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeadersList">LinuxWebAppSiteConfigIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionHeaders">LinuxWebAppSiteConfigIpRestrictionHeaders</a>>

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```java
public java.lang.String getServiceTagInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```java
public java.lang.String getVirtualNetworkSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```java
public java.lang.String getServiceTag();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction">LinuxWebAppSiteConfigIpRestriction</a> OR com.hashicorp.cdktf.IResolvable

---


### LinuxWebAppSiteConfigOutputReference <a name="LinuxWebAppSiteConfigOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigOutputReference;

new LinuxWebAppSiteConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.putApplicationStack">putApplicationStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.putAutoHealSetting">putAutoHealSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.putIpRestriction">putIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.putScmIpRestriction">putScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetAlwaysOn">resetAlwaysOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetApiDefinitionUrl">resetApiDefinitionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetApiManagementApiId">resetApiManagementApiId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetAppCommandLine">resetAppCommandLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetApplicationStack">resetApplicationStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetAutoHealEnabled">resetAutoHealEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetAutoHealSetting">resetAutoHealSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetContainerRegistryManagedIdentityClientId">resetContainerRegistryManagedIdentityClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetContainerRegistryUseManagedIdentity">resetContainerRegistryUseManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetDefaultDocuments">resetDefaultDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetFtpsState">resetFtpsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetHealthCheckEvictionTimeInMin">resetHealthCheckEvictionTimeInMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetHttp2Enabled">resetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetIpRestriction">resetIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetLoadBalancingMode">resetLoadBalancingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetLocalMysqlEnabled">resetLocalMysqlEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetManagedPipelineMode">resetManagedPipelineMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetMinimumTlsVersion">resetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetRemoteDebuggingEnabled">resetRemoteDebuggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetRemoteDebuggingVersion">resetRemoteDebuggingVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetScmIpRestriction">resetScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetScmMinimumTlsVersion">resetScmMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetScmUseMainIpRestriction">resetScmUseMainIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetUse32BitWorker">resetUse32BitWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetVnetRouteAllEnabled">resetVnetRouteAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetWebsocketsEnabled">resetWebsocketsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetWorkerCount">resetWorkerCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplicationStack` <a name="putApplicationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.putApplicationStack"></a>

```java
public void putApplicationStack(LinuxWebAppSiteConfigApplicationStack value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.putApplicationStack.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack">LinuxWebAppSiteConfigApplicationStack</a>

---

##### `putAutoHealSetting` <a name="putAutoHealSetting" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.putAutoHealSetting"></a>

```java
public void putAutoHealSetting(LinuxWebAppSiteConfigAutoHealSetting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.putAutoHealSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSetting">LinuxWebAppSiteConfigAutoHealSetting</a>

---

##### `putCors` <a name="putCors" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.putCors"></a>

```java
public void putCors(LinuxWebAppSiteConfigCors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCors">LinuxWebAppSiteConfigCors</a>

---

##### `putIpRestriction` <a name="putIpRestriction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.putIpRestriction"></a>

```java
public void putIpRestriction(IResolvable OR java.util.List<LinuxWebAppSiteConfigIpRestriction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction">LinuxWebAppSiteConfigIpRestriction</a>>

---

##### `putScmIpRestriction` <a name="putScmIpRestriction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.putScmIpRestriction"></a>

```java
public void putScmIpRestriction(IResolvable OR java.util.List<LinuxWebAppSiteConfigScmIpRestriction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction">LinuxWebAppSiteConfigScmIpRestriction</a>>

---

##### `resetAlwaysOn` <a name="resetAlwaysOn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetAlwaysOn"></a>

```java
public void resetAlwaysOn()
```

##### `resetApiDefinitionUrl` <a name="resetApiDefinitionUrl" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetApiDefinitionUrl"></a>

```java
public void resetApiDefinitionUrl()
```

##### `resetApiManagementApiId` <a name="resetApiManagementApiId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetApiManagementApiId"></a>

```java
public void resetApiManagementApiId()
```

##### `resetAppCommandLine` <a name="resetAppCommandLine" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetAppCommandLine"></a>

```java
public void resetAppCommandLine()
```

##### `resetApplicationStack` <a name="resetApplicationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetApplicationStack"></a>

```java
public void resetApplicationStack()
```

##### `resetAutoHealEnabled` <a name="resetAutoHealEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetAutoHealEnabled"></a>

```java
public void resetAutoHealEnabled()
```

##### `resetAutoHealSetting` <a name="resetAutoHealSetting" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetAutoHealSetting"></a>

```java
public void resetAutoHealSetting()
```

##### `resetContainerRegistryManagedIdentityClientId` <a name="resetContainerRegistryManagedIdentityClientId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetContainerRegistryManagedIdentityClientId"></a>

```java
public void resetContainerRegistryManagedIdentityClientId()
```

##### `resetContainerRegistryUseManagedIdentity` <a name="resetContainerRegistryUseManagedIdentity" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetContainerRegistryUseManagedIdentity"></a>

```java
public void resetContainerRegistryUseManagedIdentity()
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetCors"></a>

```java
public void resetCors()
```

##### `resetDefaultDocuments` <a name="resetDefaultDocuments" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetDefaultDocuments"></a>

```java
public void resetDefaultDocuments()
```

##### `resetFtpsState` <a name="resetFtpsState" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetFtpsState"></a>

```java
public void resetFtpsState()
```

##### `resetHealthCheckEvictionTimeInMin` <a name="resetHealthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetHealthCheckEvictionTimeInMin"></a>

```java
public void resetHealthCheckEvictionTimeInMin()
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetHealthCheckPath"></a>

```java
public void resetHealthCheckPath()
```

##### `resetHttp2Enabled` <a name="resetHttp2Enabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetHttp2Enabled"></a>

```java
public void resetHttp2Enabled()
```

##### `resetIpRestriction` <a name="resetIpRestriction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetIpRestriction"></a>

```java
public void resetIpRestriction()
```

##### `resetLoadBalancingMode` <a name="resetLoadBalancingMode" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetLoadBalancingMode"></a>

```java
public void resetLoadBalancingMode()
```

##### `resetLocalMysqlEnabled` <a name="resetLocalMysqlEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetLocalMysqlEnabled"></a>

```java
public void resetLocalMysqlEnabled()
```

##### `resetManagedPipelineMode` <a name="resetManagedPipelineMode" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetManagedPipelineMode"></a>

```java
public void resetManagedPipelineMode()
```

##### `resetMinimumTlsVersion` <a name="resetMinimumTlsVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetMinimumTlsVersion"></a>

```java
public void resetMinimumTlsVersion()
```

##### `resetRemoteDebuggingEnabled` <a name="resetRemoteDebuggingEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetRemoteDebuggingEnabled"></a>

```java
public void resetRemoteDebuggingEnabled()
```

##### `resetRemoteDebuggingVersion` <a name="resetRemoteDebuggingVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetRemoteDebuggingVersion"></a>

```java
public void resetRemoteDebuggingVersion()
```

##### `resetScmIpRestriction` <a name="resetScmIpRestriction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetScmIpRestriction"></a>

```java
public void resetScmIpRestriction()
```

##### `resetScmMinimumTlsVersion` <a name="resetScmMinimumTlsVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetScmMinimumTlsVersion"></a>

```java
public void resetScmMinimumTlsVersion()
```

##### `resetScmUseMainIpRestriction` <a name="resetScmUseMainIpRestriction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```java
public void resetScmUseMainIpRestriction()
```

##### `resetUse32BitWorker` <a name="resetUse32BitWorker" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetUse32BitWorker"></a>

```java
public void resetUse32BitWorker()
```

##### `resetVnetRouteAllEnabled` <a name="resetVnetRouteAllEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```java
public void resetVnetRouteAllEnabled()
```

##### `resetWebsocketsEnabled` <a name="resetWebsocketsEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```java
public void resetWebsocketsEnabled()
```

##### `resetWorkerCount` <a name="resetWorkerCount" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.resetWorkerCount"></a>

```java
public void resetWorkerCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.applicationStack">applicationStack</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference">LinuxWebAppSiteConfigApplicationStackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.autoHealSetting">autoHealSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference">LinuxWebAppSiteConfigAutoHealSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference">LinuxWebAppSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.detailedErrorLoggingEnabled">detailedErrorLoggingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.ipRestriction">ipRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList">LinuxWebAppSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.linuxFxVersion">linuxFxVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.scmIpRestriction">scmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList">LinuxWebAppSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.scmType">scmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.alwaysOnInput">alwaysOnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.apiDefinitionUrlInput">apiDefinitionUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.apiManagementApiIdInput">apiManagementApiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.appCommandLineInput">appCommandLineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.applicationStackInput">applicationStackInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack">LinuxWebAppSiteConfigApplicationStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.autoHealEnabledInput">autoHealEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.autoHealSettingInput">autoHealSettingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSetting">LinuxWebAppSiteConfigAutoHealSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.containerRegistryManagedIdentityClientIdInput">containerRegistryManagedIdentityClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.containerRegistryUseManagedIdentityInput">containerRegistryUseManagedIdentityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.corsInput">corsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCors">LinuxWebAppSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.defaultDocumentsInput">defaultDocumentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.ftpsStateInput">ftpsStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMinInput">healthCheckEvictionTimeInMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.http2EnabledInput">http2EnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.ipRestrictionInput">ipRestrictionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction">LinuxWebAppSiteConfigIpRestriction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.loadBalancingModeInput">loadBalancingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.localMysqlEnabledInput">localMysqlEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.managedPipelineModeInput">managedPipelineModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.minimumTlsVersionInput">minimumTlsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.remoteDebuggingEnabledInput">remoteDebuggingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.remoteDebuggingVersionInput">remoteDebuggingVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.scmIpRestrictionInput">scmIpRestrictionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction">LinuxWebAppSiteConfigScmIpRestriction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.scmMinimumTlsVersionInput">scmMinimumTlsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">scmUseMainIpRestrictionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.use32BitWorkerInput">use32BitWorkerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.vnetRouteAllEnabledInput">vnetRouteAllEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.websocketsEnabledInput">websocketsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.workerCountInput">workerCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.alwaysOn">alwaysOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.apiDefinitionUrl">apiDefinitionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.apiManagementApiId">apiManagementApiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.appCommandLine">appCommandLine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.autoHealEnabled">autoHealEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.containerRegistryManagedIdentityClientId">containerRegistryManagedIdentityClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.containerRegistryUseManagedIdentity">containerRegistryUseManagedIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.defaultDocuments">defaultDocuments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.ftpsState">ftpsState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMin">healthCheckEvictionTimeInMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.http2Enabled">http2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.loadBalancingMode">loadBalancingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.localMysqlEnabled">localMysqlEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.managedPipelineMode">managedPipelineMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.remoteDebuggingEnabled">remoteDebuggingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.remoteDebuggingVersion">remoteDebuggingVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.scmMinimumTlsVersion">scmMinimumTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.use32BitWorker">use32BitWorker</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.websocketsEnabled">websocketsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.workerCount">workerCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig">LinuxWebAppSiteConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationStack`<sup>Required</sup> <a name="applicationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.applicationStack"></a>

```java
public LinuxWebAppSiteConfigApplicationStackOutputReference getApplicationStack();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStackOutputReference">LinuxWebAppSiteConfigApplicationStackOutputReference</a>

---

##### `autoHealSetting`<sup>Required</sup> <a name="autoHealSetting" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.autoHealSetting"></a>

```java
public LinuxWebAppSiteConfigAutoHealSettingOutputReference getAutoHealSetting();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSettingOutputReference">LinuxWebAppSiteConfigAutoHealSettingOutputReference</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.cors"></a>

```java
public LinuxWebAppSiteConfigCorsOutputReference getCors();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCorsOutputReference">LinuxWebAppSiteConfigCorsOutputReference</a>

---

##### `detailedErrorLoggingEnabled`<sup>Required</sup> <a name="detailedErrorLoggingEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.detailedErrorLoggingEnabled"></a>

```java
public IResolvable getDetailedErrorLoggingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ipRestriction`<sup>Required</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.ipRestriction"></a>

```java
public LinuxWebAppSiteConfigIpRestrictionList getIpRestriction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestrictionList">LinuxWebAppSiteConfigIpRestrictionList</a>

---

##### `linuxFxVersion`<sup>Required</sup> <a name="linuxFxVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.linuxFxVersion"></a>

```java
public java.lang.String getLinuxFxVersion();
```

- *Type:* java.lang.String

---

##### `scmIpRestriction`<sup>Required</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.scmIpRestriction"></a>

```java
public LinuxWebAppSiteConfigScmIpRestrictionList getScmIpRestriction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList">LinuxWebAppSiteConfigScmIpRestrictionList</a>

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.scmType"></a>

```java
public java.lang.String getScmType();
```

- *Type:* java.lang.String

---

##### `alwaysOnInput`<sup>Optional</sup> <a name="alwaysOnInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.alwaysOnInput"></a>

```java
public java.lang.Object getAlwaysOnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `apiDefinitionUrlInput`<sup>Optional</sup> <a name="apiDefinitionUrlInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.apiDefinitionUrlInput"></a>

```java
public java.lang.String getApiDefinitionUrlInput();
```

- *Type:* java.lang.String

---

##### `apiManagementApiIdInput`<sup>Optional</sup> <a name="apiManagementApiIdInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.apiManagementApiIdInput"></a>

```java
public java.lang.String getApiManagementApiIdInput();
```

- *Type:* java.lang.String

---

##### `appCommandLineInput`<sup>Optional</sup> <a name="appCommandLineInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.appCommandLineInput"></a>

```java
public java.lang.String getAppCommandLineInput();
```

- *Type:* java.lang.String

---

##### `applicationStackInput`<sup>Optional</sup> <a name="applicationStackInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.applicationStackInput"></a>

```java
public LinuxWebAppSiteConfigApplicationStack getApplicationStackInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigApplicationStack">LinuxWebAppSiteConfigApplicationStack</a>

---

##### `autoHealEnabledInput`<sup>Optional</sup> <a name="autoHealEnabledInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.autoHealEnabledInput"></a>

```java
public java.lang.Object getAutoHealEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoHealSettingInput`<sup>Optional</sup> <a name="autoHealSettingInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.autoHealSettingInput"></a>

```java
public LinuxWebAppSiteConfigAutoHealSetting getAutoHealSettingInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigAutoHealSetting">LinuxWebAppSiteConfigAutoHealSetting</a>

---

##### `containerRegistryManagedIdentityClientIdInput`<sup>Optional</sup> <a name="containerRegistryManagedIdentityClientIdInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.containerRegistryManagedIdentityClientIdInput"></a>

```java
public java.lang.String getContainerRegistryManagedIdentityClientIdInput();
```

- *Type:* java.lang.String

---

##### `containerRegistryUseManagedIdentityInput`<sup>Optional</sup> <a name="containerRegistryUseManagedIdentityInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.containerRegistryUseManagedIdentityInput"></a>

```java
public java.lang.Object getContainerRegistryUseManagedIdentityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.corsInput"></a>

```java
public LinuxWebAppSiteConfigCors getCorsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigCors">LinuxWebAppSiteConfigCors</a>

---

##### `defaultDocumentsInput`<sup>Optional</sup> <a name="defaultDocumentsInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.defaultDocumentsInput"></a>

```java
public java.util.List<java.lang.String> getDefaultDocumentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ftpsStateInput`<sup>Optional</sup> <a name="ftpsStateInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.ftpsStateInput"></a>

```java
public java.lang.String getFtpsStateInput();
```

- *Type:* java.lang.String

---

##### `healthCheckEvictionTimeInMinInput`<sup>Optional</sup> <a name="healthCheckEvictionTimeInMinInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMinInput"></a>

```java
public java.lang.Number getHealthCheckEvictionTimeInMinInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.healthCheckPathInput"></a>

```java
public java.lang.String getHealthCheckPathInput();
```

- *Type:* java.lang.String

---

##### `http2EnabledInput`<sup>Optional</sup> <a name="http2EnabledInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.http2EnabledInput"></a>

```java
public java.lang.Object getHttp2EnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipRestrictionInput`<sup>Optional</sup> <a name="ipRestrictionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.ipRestrictionInput"></a>

```java
public java.lang.Object getIpRestrictionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigIpRestriction">LinuxWebAppSiteConfigIpRestriction</a>>

---

##### `loadBalancingModeInput`<sup>Optional</sup> <a name="loadBalancingModeInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.loadBalancingModeInput"></a>

```java
public java.lang.String getLoadBalancingModeInput();
```

- *Type:* java.lang.String

---

##### `localMysqlEnabledInput`<sup>Optional</sup> <a name="localMysqlEnabledInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.localMysqlEnabledInput"></a>

```java
public java.lang.Object getLocalMysqlEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managedPipelineModeInput`<sup>Optional</sup> <a name="managedPipelineModeInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.managedPipelineModeInput"></a>

```java
public java.lang.String getManagedPipelineModeInput();
```

- *Type:* java.lang.String

---

##### `minimumTlsVersionInput`<sup>Optional</sup> <a name="minimumTlsVersionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.minimumTlsVersionInput"></a>

```java
public java.lang.String getMinimumTlsVersionInput();
```

- *Type:* java.lang.String

---

##### `remoteDebuggingEnabledInput`<sup>Optional</sup> <a name="remoteDebuggingEnabledInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.remoteDebuggingEnabledInput"></a>

```java
public java.lang.Object getRemoteDebuggingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `remoteDebuggingVersionInput`<sup>Optional</sup> <a name="remoteDebuggingVersionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.remoteDebuggingVersionInput"></a>

```java
public java.lang.String getRemoteDebuggingVersionInput();
```

- *Type:* java.lang.String

---

##### `scmIpRestrictionInput`<sup>Optional</sup> <a name="scmIpRestrictionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```java
public java.lang.Object getScmIpRestrictionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction">LinuxWebAppSiteConfigScmIpRestriction</a>>

---

##### `scmMinimumTlsVersionInput`<sup>Optional</sup> <a name="scmMinimumTlsVersionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.scmMinimumTlsVersionInput"></a>

```java
public java.lang.String getScmMinimumTlsVersionInput();
```

- *Type:* java.lang.String

---

##### `scmUseMainIpRestrictionInput`<sup>Optional</sup> <a name="scmUseMainIpRestrictionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```java
public java.lang.Object getScmUseMainIpRestrictionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `use32BitWorkerInput`<sup>Optional</sup> <a name="use32BitWorkerInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.use32BitWorkerInput"></a>

```java
public java.lang.Object getUse32BitWorkerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnetRouteAllEnabledInput`<sup>Optional</sup> <a name="vnetRouteAllEnabledInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```java
public java.lang.Object getVnetRouteAllEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `websocketsEnabledInput`<sup>Optional</sup> <a name="websocketsEnabledInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```java
public java.lang.Object getWebsocketsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `workerCountInput`<sup>Optional</sup> <a name="workerCountInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.workerCountInput"></a>

```java
public java.lang.Number getWorkerCountInput();
```

- *Type:* java.lang.Number

---

##### `alwaysOn`<sup>Required</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.alwaysOn"></a>

```java
public java.lang.Object getAlwaysOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `apiDefinitionUrl`<sup>Required</sup> <a name="apiDefinitionUrl" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.apiDefinitionUrl"></a>

```java
public java.lang.String getApiDefinitionUrl();
```

- *Type:* java.lang.String

---

##### `apiManagementApiId`<sup>Required</sup> <a name="apiManagementApiId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.apiManagementApiId"></a>

```java
public java.lang.String getApiManagementApiId();
```

- *Type:* java.lang.String

---

##### `appCommandLine`<sup>Required</sup> <a name="appCommandLine" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.appCommandLine"></a>

```java
public java.lang.String getAppCommandLine();
```

- *Type:* java.lang.String

---

##### `autoHealEnabled`<sup>Required</sup> <a name="autoHealEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.autoHealEnabled"></a>

```java
public java.lang.Object getAutoHealEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `containerRegistryManagedIdentityClientId`<sup>Required</sup> <a name="containerRegistryManagedIdentityClientId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.containerRegistryManagedIdentityClientId"></a>

```java
public java.lang.String getContainerRegistryManagedIdentityClientId();
```

- *Type:* java.lang.String

---

##### `containerRegistryUseManagedIdentity`<sup>Required</sup> <a name="containerRegistryUseManagedIdentity" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.containerRegistryUseManagedIdentity"></a>

```java
public java.lang.Object getContainerRegistryUseManagedIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultDocuments`<sup>Required</sup> <a name="defaultDocuments" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.defaultDocuments"></a>

```java
public java.util.List<java.lang.String> getDefaultDocuments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ftpsState`<sup>Required</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.ftpsState"></a>

```java
public java.lang.String getFtpsState();
```

- *Type:* java.lang.String

---

##### `healthCheckEvictionTimeInMin`<sup>Required</sup> <a name="healthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMin"></a>

```java
public java.lang.Number getHealthCheckEvictionTimeInMin();
```

- *Type:* java.lang.Number

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

---

##### `http2Enabled`<sup>Required</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.http2Enabled"></a>

```java
public java.lang.Object getHttp2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loadBalancingMode`<sup>Required</sup> <a name="loadBalancingMode" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.loadBalancingMode"></a>

```java
public java.lang.String getLoadBalancingMode();
```

- *Type:* java.lang.String

---

##### `localMysqlEnabled`<sup>Required</sup> <a name="localMysqlEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.localMysqlEnabled"></a>

```java
public java.lang.Object getLocalMysqlEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managedPipelineMode`<sup>Required</sup> <a name="managedPipelineMode" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.managedPipelineMode"></a>

```java
public java.lang.String getManagedPipelineMode();
```

- *Type:* java.lang.String

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.minimumTlsVersion"></a>

```java
public java.lang.String getMinimumTlsVersion();
```

- *Type:* java.lang.String

---

##### `remoteDebuggingEnabled`<sup>Required</sup> <a name="remoteDebuggingEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.remoteDebuggingEnabled"></a>

```java
public java.lang.Object getRemoteDebuggingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `remoteDebuggingVersion`<sup>Required</sup> <a name="remoteDebuggingVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.remoteDebuggingVersion"></a>

```java
public java.lang.String getRemoteDebuggingVersion();
```

- *Type:* java.lang.String

---

##### `scmMinimumTlsVersion`<sup>Required</sup> <a name="scmMinimumTlsVersion" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.scmMinimumTlsVersion"></a>

```java
public java.lang.String getScmMinimumTlsVersion();
```

- *Type:* java.lang.String

---

##### `scmUseMainIpRestriction`<sup>Required</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```java
public java.lang.Object getScmUseMainIpRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `use32BitWorker`<sup>Required</sup> <a name="use32BitWorker" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.use32BitWorker"></a>

```java
public java.lang.Object getUse32BitWorker();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnetRouteAllEnabled`<sup>Required</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```java
public java.lang.Object getVnetRouteAllEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `websocketsEnabled`<sup>Required</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.websocketsEnabled"></a>

```java
public java.lang.Object getWebsocketsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `workerCount`<sup>Required</sup> <a name="workerCount" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.workerCount"></a>

```java
public java.lang.Number getWorkerCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigOutputReference.property.internalValue"></a>

```java
public LinuxWebAppSiteConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfig">LinuxWebAppSiteConfig</a>

---


### LinuxWebAppSiteConfigScmIpRestrictionHeadersList <a name="LinuxWebAppSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigScmIpRestrictionHeadersList;

new LinuxWebAppSiteConfigScmIpRestrictionHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.get"></a>

```java
public LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders">LinuxWebAppSiteConfigScmIpRestrictionHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders">LinuxWebAppSiteConfigScmIpRestrictionHeaders</a>>

---


### LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference <a name="LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference;

new LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```java
public void resetXAzureFdid()
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```java
public void resetXFdHealthProbe()
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```java
public void resetXForwardedFor()
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```java
public void resetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders">LinuxWebAppSiteConfigScmIpRestrictionHeaders</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```java
public java.util.List<java.lang.String> getXAzureFdidInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```java
public java.util.List<java.lang.String> getXForwardedForInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```java
public java.util.List<java.lang.String> getXForwardedHostInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```java
public java.util.List<java.lang.String> getXAzureFdid();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbe();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```java
public java.util.List<java.lang.String> getXForwardedFor();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```java
public java.util.List<java.lang.String> getXForwardedHost();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders">LinuxWebAppSiteConfigScmIpRestrictionHeaders</a> OR com.hashicorp.cdktf.IResolvable

---


### LinuxWebAppSiteConfigScmIpRestrictionList <a name="LinuxWebAppSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigScmIpRestrictionList;

new LinuxWebAppSiteConfigScmIpRestrictionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.get"></a>

```java
public LinuxWebAppSiteConfigScmIpRestrictionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction">LinuxWebAppSiteConfigScmIpRestriction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction">LinuxWebAppSiteConfigScmIpRestriction</a>>

---


### LinuxWebAppSiteConfigScmIpRestrictionOutputReference <a name="LinuxWebAppSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteConfigScmIpRestrictionOutputReference;

new LinuxWebAppSiteConfigScmIpRestrictionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<LinuxWebAppSiteConfigScmIpRestrictionHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders">LinuxWebAppSiteConfigScmIpRestrictionHeaders</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```java
public void resetServiceTag()
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```java
public void resetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList">LinuxWebAppSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders">LinuxWebAppSiteConfigScmIpRestrictionHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction">LinuxWebAppSiteConfigScmIpRestriction</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```java
public LinuxWebAppSiteConfigScmIpRestrictionHeadersList getHeaders();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeadersList">LinuxWebAppSiteConfigScmIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionHeaders">LinuxWebAppSiteConfigScmIpRestrictionHeaders</a>>

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```java
public java.lang.String getServiceTagInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```java
public java.lang.String getVirtualNetworkSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```java
public java.lang.String getServiceTag();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteConfigScmIpRestriction">LinuxWebAppSiteConfigScmIpRestriction</a> OR com.hashicorp.cdktf.IResolvable

---


### LinuxWebAppSiteCredentialList <a name="LinuxWebAppSiteCredentialList" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteCredentialList;

new LinuxWebAppSiteCredentialList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.get"></a>

```java
public LinuxWebAppSiteCredentialOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### LinuxWebAppSiteCredentialOutputReference <a name="LinuxWebAppSiteCredentialOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppSiteCredentialOutputReference;

new LinuxWebAppSiteCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredential">LinuxWebAppSiteCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredentialOutputReference.property.internalValue"></a>

```java
public LinuxWebAppSiteCredential getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppSiteCredential">LinuxWebAppSiteCredential</a>

---


### LinuxWebAppStickySettingsOutputReference <a name="LinuxWebAppStickySettingsOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppStickySettingsOutputReference;

new LinuxWebAppStickySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.resetAppSettingNames">resetAppSettingNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.resetConnectionStringNames">resetConnectionStringNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppSettingNames` <a name="resetAppSettingNames" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.resetAppSettingNames"></a>

```java
public void resetAppSettingNames()
```

##### `resetConnectionStringNames` <a name="resetConnectionStringNames" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.resetConnectionStringNames"></a>

```java
public void resetConnectionStringNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.property.appSettingNamesInput">appSettingNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.property.connectionStringNamesInput">connectionStringNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.property.appSettingNames">appSettingNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.property.connectionStringNames">connectionStringNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettings">LinuxWebAppStickySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appSettingNamesInput`<sup>Optional</sup> <a name="appSettingNamesInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.property.appSettingNamesInput"></a>

```java
public java.util.List<java.lang.String> getAppSettingNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionStringNamesInput`<sup>Optional</sup> <a name="connectionStringNamesInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.property.connectionStringNamesInput"></a>

```java
public java.util.List<java.lang.String> getConnectionStringNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appSettingNames`<sup>Required</sup> <a name="appSettingNames" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.property.appSettingNames"></a>

```java
public java.util.List<java.lang.String> getAppSettingNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionStringNames`<sup>Required</sup> <a name="connectionStringNames" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.property.connectionStringNames"></a>

```java
public java.util.List<java.lang.String> getConnectionStringNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettingsOutputReference.property.internalValue"></a>

```java
public LinuxWebAppStickySettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStickySettings">LinuxWebAppStickySettings</a>

---


### LinuxWebAppStorageAccountList <a name="LinuxWebAppStorageAccountList" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppStorageAccountList;

new LinuxWebAppStorageAccountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.get"></a>

```java
public LinuxWebAppStorageAccountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount">LinuxWebAppStorageAccount</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount">LinuxWebAppStorageAccount</a>>

---


### LinuxWebAppStorageAccountOutputReference <a name="LinuxWebAppStorageAccountOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppStorageAccountOutputReference;

new LinuxWebAppStorageAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountPath` <a name="resetMountPath" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.resetMountPath"></a>

```java
public void resetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.shareName">shareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount">LinuxWebAppStorageAccount</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.accessKeyInput"></a>

```java
public java.lang.String getAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.shareNameInput"></a>

```java
public java.lang.String getShareNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccountOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppStorageAccount">LinuxWebAppStorageAccount</a> OR com.hashicorp.cdktf.IResolvable

---


### LinuxWebAppTimeoutsOutputReference <a name="LinuxWebAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_web_app.LinuxWebAppTimeoutsOutputReference;

new LinuxWebAppTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts">LinuxWebAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxWebApp.LinuxWebAppTimeouts">LinuxWebAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



