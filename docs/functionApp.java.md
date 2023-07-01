# `azurerm_function_app`

Refer to the Terraform Registory for docs: [`azurerm_function_app`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app).

# `functionApp` Submodule <a name="`functionApp` Submodule" id="@cdktf/provider-azurerm.functionApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionApp <a name="FunctionApp" id="@cdktf/provider-azurerm.functionApp.FunctionApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app azurerm_function_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionApp;

FunctionApp.Builder.create(Construct scope, java.lang.String id)
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
    .appServicePlanId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageAccountAccessKey(java.lang.String)
    .storageAccountName(java.lang.String)
//  .appSettings(java.util.Map<java.lang.String, java.lang.String>)
//  .authSettings(FunctionAppAuthSettings)
//  .clientCertMode(java.lang.String)
//  .connectionString(IResolvable)
//  .connectionString(java.util.List<FunctionAppConnectionString>)
//  .dailyMemoryTimeQuota(java.lang.Number)
//  .enableBuiltinLogging(java.lang.Boolean)
//  .enableBuiltinLogging(IResolvable)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .httpsOnly(java.lang.Boolean)
//  .httpsOnly(IResolvable)
//  .id(java.lang.String)
//  .identity(FunctionAppIdentity)
//  .keyVaultReferenceIdentityId(java.lang.String)
//  .osType(java.lang.String)
//  .siteConfig(FunctionAppSiteConfig)
//  .sourceControl(FunctionAppSourceControl)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FunctionAppTimeouts)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.appServicePlanId">appServicePlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#app_service_plan_id FunctionApp#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#location FunctionApp#location}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#resource_group_name FunctionApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#storage_account_access_key FunctionApp#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#storage_account_name FunctionApp#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.appSettings">appSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#app_settings FunctionApp#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.clientCertMode">clientCertMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#client_cert_mode FunctionApp#client_cert_mode}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.connectionString">connectionString</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>></code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.dailyMemoryTimeQuota">dailyMemoryTimeQuota</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#daily_memory_time_quota FunctionApp#daily_memory_time_quota}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.enableBuiltinLogging">enableBuiltinLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#enable_builtin_logging FunctionApp#enable_builtin_logging}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#enabled FunctionApp#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#https_only FunctionApp#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#id FunctionApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#key_vault_reference_identity_id FunctionApp#key_vault_reference_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#os_type FunctionApp#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.sourceControl">sourceControl</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a></code> | source_control block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#tags FunctionApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#version FunctionApp#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appServicePlanId`<sup>Required</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.appServicePlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#app_service_plan_id FunctionApp#app_service_plan_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#location FunctionApp#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#name FunctionApp#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#resource_group_name FunctionApp#resource_group_name}.

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#storage_account_access_key FunctionApp#storage_account_access_key}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.storageAccountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#storage_account_name FunctionApp#storage_account_name}.

---

##### `appSettings`<sup>Optional</sup> <a name="appSettings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.appSettings"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#app_settings FunctionApp#app_settings}.

---

##### `authSettings`<sup>Optional</sup> <a name="authSettings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.authSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#auth_settings FunctionApp#auth_settings}

---

##### `clientCertMode`<sup>Optional</sup> <a name="clientCertMode" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.clientCertMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#client_cert_mode FunctionApp#client_cert_mode}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.connectionString"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>>

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#connection_string FunctionApp#connection_string}

---

##### `dailyMemoryTimeQuota`<sup>Optional</sup> <a name="dailyMemoryTimeQuota" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.dailyMemoryTimeQuota"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#daily_memory_time_quota FunctionApp#daily_memory_time_quota}.

---

##### `enableBuiltinLogging`<sup>Optional</sup> <a name="enableBuiltinLogging" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.enableBuiltinLogging"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#enable_builtin_logging FunctionApp#enable_builtin_logging}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#enabled FunctionApp#enabled}.

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.httpsOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#https_only FunctionApp#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#id FunctionApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#identity FunctionApp#identity}

---

##### `keyVaultReferenceIdentityId`<sup>Optional</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.keyVaultReferenceIdentityId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#key_vault_reference_identity_id FunctionApp#key_vault_reference_identity_id}.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.osType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#os_type FunctionApp#os_type}.

---

##### `siteConfig`<sup>Optional</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.siteConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#site_config FunctionApp#site_config}

---

##### `sourceControl`<sup>Optional</sup> <a name="sourceControl" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.sourceControl"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a>

source_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#source_control FunctionApp#source_control}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#tags FunctionApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#timeouts FunctionApp#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#version FunctionApp#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings">putAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putConnectionString">putConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig">putSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putSourceControl">putSourceControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetAppSettings">resetAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetAuthSettings">resetAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetClientCertMode">resetClientCertMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetDailyMemoryTimeQuota">resetDailyMemoryTimeQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetEnableBuiltinLogging">resetEnableBuiltinLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetHttpsOnly">resetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetKeyVaultReferenceIdentityId">resetKeyVaultReferenceIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetOsType">resetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetSiteConfig">resetSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetSourceControl">resetSourceControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.functionApp.FunctionApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.functionApp.FunctionApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.functionApp.FunctionApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.functionApp.FunctionApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAuthSettings` <a name="putAuthSettings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings"></a>

```java
public void putAuthSettings(FunctionAppAuthSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a>

---

##### `putConnectionString` <a name="putConnectionString" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putConnectionString"></a>

```java
public void putConnectionString(IResolvable OR java.util.List<FunctionAppConnectionString> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putConnectionString.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putIdentity"></a>

```java
public void putIdentity(FunctionAppIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a>

---

##### `putSiteConfig` <a name="putSiteConfig" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig"></a>

```java
public void putSiteConfig(FunctionAppSiteConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a>

---

##### `putSourceControl` <a name="putSourceControl" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSourceControl"></a>

```java
public void putSourceControl(FunctionAppSourceControl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSourceControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putTimeouts"></a>

```java
public void putTimeouts(FunctionAppTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a>

---

##### `resetAppSettings` <a name="resetAppSettings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetAppSettings"></a>

```java
public void resetAppSettings()
```

##### `resetAuthSettings` <a name="resetAuthSettings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetAuthSettings"></a>

```java
public void resetAuthSettings()
```

##### `resetClientCertMode` <a name="resetClientCertMode" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetClientCertMode"></a>

```java
public void resetClientCertMode()
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetConnectionString"></a>

```java
public void resetConnectionString()
```

##### `resetDailyMemoryTimeQuota` <a name="resetDailyMemoryTimeQuota" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetDailyMemoryTimeQuota"></a>

```java
public void resetDailyMemoryTimeQuota()
```

##### `resetEnableBuiltinLogging` <a name="resetEnableBuiltinLogging" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetEnableBuiltinLogging"></a>

```java
public void resetEnableBuiltinLogging()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetHttpsOnly` <a name="resetHttpsOnly" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetHttpsOnly"></a>

```java
public void resetHttpsOnly()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetKeyVaultReferenceIdentityId` <a name="resetKeyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetKeyVaultReferenceIdentityId"></a>

```java
public void resetKeyVaultReferenceIdentityId()
```

##### `resetOsType` <a name="resetOsType" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetOsType"></a>

```java
public void resetOsType()
```

##### `resetSiteConfig` <a name="resetSiteConfig" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetSiteConfig"></a>

```java
public void resetSiteConfig()
```

##### `resetSourceControl` <a name="resetSourceControl" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetSourceControl"></a>

```java
public void resetSourceControl()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionApp;

FunctionApp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionApp;

FunctionApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionApp;

FunctionApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference">FunctionAppAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.connectionString">connectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList">FunctionAppConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.customDomainVerificationId">customDomainVerificationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.defaultHostname">defaultHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference">FunctionAppIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.outboundIpAddresses">outboundIpAddresses</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.possibleOutboundIpAddresses">possibleOutboundIpAddresses</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference">FunctionAppSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteCredential">siteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList">FunctionAppSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.sourceControl">sourceControl</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference">FunctionAppSourceControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference">FunctionAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.appServicePlanIdInput">appServicePlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.appSettingsInput">appSettingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.authSettingsInput">authSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.clientCertModeInput">clientCertModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.connectionStringInput">connectionStringInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.dailyMemoryTimeQuotaInput">dailyMemoryTimeQuotaInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.enableBuiltinLoggingInput">enableBuiltinLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.httpsOnlyInput">httpsOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.keyVaultReferenceIdentityIdInput">keyVaultReferenceIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.osTypeInput">osTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteConfigInput">siteConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.sourceControlInput">sourceControlInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.appServicePlanId">appServicePlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.appSettings">appSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.clientCertMode">clientCertMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.dailyMemoryTimeQuota">dailyMemoryTimeQuota</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.enableBuiltinLogging">enableBuiltinLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authSettings`<sup>Required</sup> <a name="authSettings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.authSettings"></a>

```java
public FunctionAppAuthSettingsOutputReference getAuthSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference">FunctionAppAuthSettingsOutputReference</a>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.connectionString"></a>

```java
public FunctionAppConnectionStringList getConnectionString();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList">FunctionAppConnectionStringList</a>

---

##### `customDomainVerificationId`<sup>Required</sup> <a name="customDomainVerificationId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.customDomainVerificationId"></a>

```java
public java.lang.String getCustomDomainVerificationId();
```

- *Type:* java.lang.String

---

##### `defaultHostname`<sup>Required</sup> <a name="defaultHostname" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.defaultHostname"></a>

```java
public java.lang.String getDefaultHostname();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.identity"></a>

```java
public FunctionAppIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference">FunctionAppIdentityOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `outboundIpAddresses`<sup>Required</sup> <a name="outboundIpAddresses" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.outboundIpAddresses"></a>

```java
public java.lang.String getOutboundIpAddresses();
```

- *Type:* java.lang.String

---

##### `possibleOutboundIpAddresses`<sup>Required</sup> <a name="possibleOutboundIpAddresses" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.possibleOutboundIpAddresses"></a>

```java
public java.lang.String getPossibleOutboundIpAddresses();
```

- *Type:* java.lang.String

---

##### `siteConfig`<sup>Required</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteConfig"></a>

```java
public FunctionAppSiteConfigOutputReference getSiteConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference">FunctionAppSiteConfigOutputReference</a>

---

##### `siteCredential`<sup>Required</sup> <a name="siteCredential" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteCredential"></a>

```java
public FunctionAppSiteCredentialList getSiteCredential();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList">FunctionAppSiteCredentialList</a>

---

##### `sourceControl`<sup>Required</sup> <a name="sourceControl" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.sourceControl"></a>

```java
public FunctionAppSourceControlOutputReference getSourceControl();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference">FunctionAppSourceControlOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.timeouts"></a>

```java
public FunctionAppTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference">FunctionAppTimeoutsOutputReference</a>

---

##### `appServicePlanIdInput`<sup>Optional</sup> <a name="appServicePlanIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.appServicePlanIdInput"></a>

```java
public java.lang.String getAppServicePlanIdInput();
```

- *Type:* java.lang.String

---

##### `appSettingsInput`<sup>Optional</sup> <a name="appSettingsInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.appSettingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAppSettingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authSettingsInput`<sup>Optional</sup> <a name="authSettingsInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.authSettingsInput"></a>

```java
public FunctionAppAuthSettings getAuthSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a>

---

##### `clientCertModeInput`<sup>Optional</sup> <a name="clientCertModeInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.clientCertModeInput"></a>

```java
public java.lang.String getClientCertModeInput();
```

- *Type:* java.lang.String

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.connectionStringInput"></a>

```java
public java.lang.Object getConnectionStringInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>>

---

##### `dailyMemoryTimeQuotaInput`<sup>Optional</sup> <a name="dailyMemoryTimeQuotaInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.dailyMemoryTimeQuotaInput"></a>

```java
public java.lang.Number getDailyMemoryTimeQuotaInput();
```

- *Type:* java.lang.Number

---

##### `enableBuiltinLoggingInput`<sup>Optional</sup> <a name="enableBuiltinLoggingInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.enableBuiltinLoggingInput"></a>

```java
public java.lang.Object getEnableBuiltinLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpsOnlyInput`<sup>Optional</sup> <a name="httpsOnlyInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.httpsOnlyInput"></a>

```java
public java.lang.Object getHttpsOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.identityInput"></a>

```java
public FunctionAppIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultReferenceIdentityIdInput`<sup>Optional</sup> <a name="keyVaultReferenceIdentityIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.keyVaultReferenceIdentityIdInput"></a>

```java
public java.lang.String getKeyVaultReferenceIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.osTypeInput"></a>

```java
public java.lang.String getOsTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `siteConfigInput`<sup>Optional</sup> <a name="siteConfigInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteConfigInput"></a>

```java
public FunctionAppSiteConfig getSiteConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a>

---

##### `sourceControlInput`<sup>Optional</sup> <a name="sourceControlInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.sourceControlInput"></a>

```java
public FunctionAppSourceControl getSourceControlInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a>

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountAccessKeyInput"></a>

```java
public java.lang.String getStorageAccountAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountNameInput"></a>

```java
public java.lang.String getStorageAccountNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `appServicePlanId`<sup>Required</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.appServicePlanId"></a>

```java
public java.lang.String getAppServicePlanId();
```

- *Type:* java.lang.String

---

##### `appSettings`<sup>Required</sup> <a name="appSettings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.appSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAppSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `clientCertMode`<sup>Required</sup> <a name="clientCertMode" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.clientCertMode"></a>

```java
public java.lang.String getClientCertMode();
```

- *Type:* java.lang.String

---

##### `dailyMemoryTimeQuota`<sup>Required</sup> <a name="dailyMemoryTimeQuota" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.dailyMemoryTimeQuota"></a>

```java
public java.lang.Number getDailyMemoryTimeQuota();
```

- *Type:* java.lang.Number

---

##### `enableBuiltinLogging`<sup>Required</sup> <a name="enableBuiltinLogging" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.enableBuiltinLogging"></a>

```java
public java.lang.Object getEnableBuiltinLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpsOnly`<sup>Required</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.httpsOnly"></a>

```java
public java.lang.Object getHttpsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyVaultReferenceIdentityId`<sup>Required</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.keyVaultReferenceIdentityId"></a>

```java
public java.lang.String getKeyVaultReferenceIdentityId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionAppAuthSettings <a name="FunctionAppAuthSettings" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppAuthSettings;

FunctionAppAuthSettings.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .activeDirectory(FunctionAppAuthSettingsActiveDirectory)
//  .additionalLoginParams(java.util.Map<java.lang.String, java.lang.String>)
//  .allowedExternalRedirectUrls(java.util.List<java.lang.String>)
//  .defaultProvider(java.lang.String)
//  .facebook(FunctionAppAuthSettingsFacebook)
//  .google(FunctionAppAuthSettingsGoogle)
//  .issuer(java.lang.String)
//  .microsoft(FunctionAppAuthSettingsMicrosoft)
//  .runtimeVersion(java.lang.String)
//  .tokenRefreshExtensionHours(java.lang.Number)
//  .tokenStoreEnabled(java.lang.Boolean)
//  .tokenStoreEnabled(IResolvable)
//  .twitter(FunctionAppAuthSettingsTwitter)
//  .unauthenticatedClientAction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#enabled FunctionApp#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.additionalLoginParams">additionalLoginParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#additional_login_params FunctionApp#additional_login_params}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#allowed_external_redirect_urls FunctionApp#allowed_external_redirect_urls}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.defaultProvider">defaultProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#default_provider FunctionApp#default_provider}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#issuer FunctionApp#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#runtime_version FunctionApp#runtime_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#token_refresh_extension_hours FunctionApp#token_refresh_extension_hours}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#token_store_enabled FunctionApp#token_store_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#unauthenticated_client_action FunctionApp#unauthenticated_client_action}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#enabled FunctionApp#enabled}.

---

##### `activeDirectory`<sup>Optional</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.activeDirectory"></a>

```java
public FunctionAppAuthSettingsActiveDirectory getActiveDirectory();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#active_directory FunctionApp#active_directory}

---

##### `additionalLoginParams`<sup>Optional</sup> <a name="additionalLoginParams" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.additionalLoginParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalLoginParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#additional_login_params FunctionApp#additional_login_params}.

---

##### `allowedExternalRedirectUrls`<sup>Optional</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.allowedExternalRedirectUrls"></a>

```java
public java.util.List<java.lang.String> getAllowedExternalRedirectUrls();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#allowed_external_redirect_urls FunctionApp#allowed_external_redirect_urls}.

---

##### `defaultProvider`<sup>Optional</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.defaultProvider"></a>

```java
public java.lang.String getDefaultProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#default_provider FunctionApp#default_provider}.

---

##### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.facebook"></a>

```java
public FunctionAppAuthSettingsFacebook getFacebook();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#facebook FunctionApp#facebook}

---

##### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.google"></a>

```java
public FunctionAppAuthSettingsGoogle getGoogle();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#google FunctionApp#google}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#issuer FunctionApp#issuer}.

---

##### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.microsoft"></a>

```java
public FunctionAppAuthSettingsMicrosoft getMicrosoft();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#microsoft FunctionApp#microsoft}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#runtime_version FunctionApp#runtime_version}.

---

##### `tokenRefreshExtensionHours`<sup>Optional</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.tokenRefreshExtensionHours"></a>

```java
public java.lang.Number getTokenRefreshExtensionHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#token_refresh_extension_hours FunctionApp#token_refresh_extension_hours}.

---

##### `tokenStoreEnabled`<sup>Optional</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.tokenStoreEnabled"></a>

```java
public java.lang.Object getTokenStoreEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#token_store_enabled FunctionApp#token_store_enabled}.

---

##### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.twitter"></a>

```java
public FunctionAppAuthSettingsTwitter getTwitter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#twitter FunctionApp#twitter}

---

##### `unauthenticatedClientAction`<sup>Optional</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.unauthenticatedClientAction"></a>

```java
public java.lang.String getUnauthenticatedClientAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#unauthenticated_client_action FunctionApp#unauthenticated_client_action}.

---

### FunctionAppAuthSettingsActiveDirectory <a name="FunctionAppAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppAuthSettingsActiveDirectory;

FunctionAppAuthSettingsActiveDirectory.builder()
    .clientId(java.lang.String)
//  .allowedAudiences(java.util.List<java.lang.String>)
//  .clientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#client_id FunctionApp#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.allowedAudiences">allowedAudiences</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#allowed_audiences FunctionApp#allowed_audiences}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#client_secret FunctionApp#client_secret}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#client_id FunctionApp#client_id}.

---

##### `allowedAudiences`<sup>Optional</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiences();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#allowed_audiences FunctionApp#allowed_audiences}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#client_secret FunctionApp#client_secret}.

---

### FunctionAppAuthSettingsFacebook <a name="FunctionAppAuthSettingsFacebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppAuthSettingsFacebook;

FunctionAppAuthSettingsFacebook.builder()
    .appId(java.lang.String)
    .appSecret(java.lang.String)
//  .oauthScopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#app_id FunctionApp#app_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.appSecret">appSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#app_secret FunctionApp#app_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#app_id FunctionApp#app_id}.

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.appSecret"></a>

```java
public java.lang.String getAppSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#app_secret FunctionApp#app_secret}.

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}.

---

### FunctionAppAuthSettingsGoogle <a name="FunctionAppAuthSettingsGoogle" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppAuthSettingsGoogle;

FunctionAppAuthSettingsGoogle.builder()
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
//  .oauthScopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#client_id FunctionApp#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#client_secret FunctionApp#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#client_id FunctionApp#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#client_secret FunctionApp#client_secret}.

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}.

---

### FunctionAppAuthSettingsMicrosoft <a name="FunctionAppAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppAuthSettingsMicrosoft;

FunctionAppAuthSettingsMicrosoft.builder()
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
//  .oauthScopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#client_id FunctionApp#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#client_secret FunctionApp#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#client_id FunctionApp#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#client_secret FunctionApp#client_secret}.

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}.

---

### FunctionAppAuthSettingsTwitter <a name="FunctionAppAuthSettingsTwitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppAuthSettingsTwitter;

FunctionAppAuthSettingsTwitter.builder()
    .consumerKey(java.lang.String)
    .consumerSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#consumer_key FunctionApp#consumer_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#consumer_secret FunctionApp#consumer_secret}. |

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#consumer_key FunctionApp#consumer_key}.

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#consumer_secret FunctionApp#consumer_secret}.

---

### FunctionAppConfig <a name="FunctionAppConfig" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppConfig;

FunctionAppConfig.builder()
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
    .appServicePlanId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageAccountAccessKey(java.lang.String)
    .storageAccountName(java.lang.String)
//  .appSettings(java.util.Map<java.lang.String, java.lang.String>)
//  .authSettings(FunctionAppAuthSettings)
//  .clientCertMode(java.lang.String)
//  .connectionString(IResolvable)
//  .connectionString(java.util.List<FunctionAppConnectionString>)
//  .dailyMemoryTimeQuota(java.lang.Number)
//  .enableBuiltinLogging(java.lang.Boolean)
//  .enableBuiltinLogging(IResolvable)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .httpsOnly(java.lang.Boolean)
//  .httpsOnly(IResolvable)
//  .id(java.lang.String)
//  .identity(FunctionAppIdentity)
//  .keyVaultReferenceIdentityId(java.lang.String)
//  .osType(java.lang.String)
//  .siteConfig(FunctionAppSiteConfig)
//  .sourceControl(FunctionAppSourceControl)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FunctionAppTimeouts)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.appServicePlanId">appServicePlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#app_service_plan_id FunctionApp#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#location FunctionApp#location}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#resource_group_name FunctionApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#storage_account_access_key FunctionApp#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#storage_account_name FunctionApp#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.appSettings">appSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#app_settings FunctionApp#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.clientCertMode">clientCertMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#client_cert_mode FunctionApp#client_cert_mode}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.connectionString">connectionString</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>></code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.dailyMemoryTimeQuota">dailyMemoryTimeQuota</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#daily_memory_time_quota FunctionApp#daily_memory_time_quota}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.enableBuiltinLogging">enableBuiltinLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#enable_builtin_logging FunctionApp#enable_builtin_logging}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#enabled FunctionApp#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#https_only FunctionApp#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#id FunctionApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#key_vault_reference_identity_id FunctionApp#key_vault_reference_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#os_type FunctionApp#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.sourceControl">sourceControl</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a></code> | source_control block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#tags FunctionApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#version FunctionApp#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appServicePlanId`<sup>Required</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.appServicePlanId"></a>

```java
public java.lang.String getAppServicePlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#app_service_plan_id FunctionApp#app_service_plan_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#location FunctionApp#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#name FunctionApp#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#resource_group_name FunctionApp#resource_group_name}.

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#storage_account_access_key FunctionApp#storage_account_access_key}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#storage_account_name FunctionApp#storage_account_name}.

---

##### `appSettings`<sup>Optional</sup> <a name="appSettings" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.appSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAppSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#app_settings FunctionApp#app_settings}.

---

##### `authSettings`<sup>Optional</sup> <a name="authSettings" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.authSettings"></a>

```java
public FunctionAppAuthSettings getAuthSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#auth_settings FunctionApp#auth_settings}

---

##### `clientCertMode`<sup>Optional</sup> <a name="clientCertMode" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.clientCertMode"></a>

```java
public java.lang.String getClientCertMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#client_cert_mode FunctionApp#client_cert_mode}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.connectionString"></a>

```java
public java.lang.Object getConnectionString();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>>

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#connection_string FunctionApp#connection_string}

---

##### `dailyMemoryTimeQuota`<sup>Optional</sup> <a name="dailyMemoryTimeQuota" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.dailyMemoryTimeQuota"></a>

```java
public java.lang.Number getDailyMemoryTimeQuota();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#daily_memory_time_quota FunctionApp#daily_memory_time_quota}.

---

##### `enableBuiltinLogging`<sup>Optional</sup> <a name="enableBuiltinLogging" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.enableBuiltinLogging"></a>

```java
public java.lang.Object getEnableBuiltinLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#enable_builtin_logging FunctionApp#enable_builtin_logging}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#enabled FunctionApp#enabled}.

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.httpsOnly"></a>

```java
public java.lang.Object getHttpsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#https_only FunctionApp#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#id FunctionApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.identity"></a>

```java
public FunctionAppIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#identity FunctionApp#identity}

---

##### `keyVaultReferenceIdentityId`<sup>Optional</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.keyVaultReferenceIdentityId"></a>

```java
public java.lang.String getKeyVaultReferenceIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#key_vault_reference_identity_id FunctionApp#key_vault_reference_identity_id}.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#os_type FunctionApp#os_type}.

---

##### `siteConfig`<sup>Optional</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.siteConfig"></a>

```java
public FunctionAppSiteConfig getSiteConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#site_config FunctionApp#site_config}

---

##### `sourceControl`<sup>Optional</sup> <a name="sourceControl" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.sourceControl"></a>

```java
public FunctionAppSourceControl getSourceControl();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a>

source_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#source_control FunctionApp#source_control}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#tags FunctionApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.timeouts"></a>

```java
public FunctionAppTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#timeouts FunctionApp#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#version FunctionApp#version}.

---

### FunctionAppConnectionString <a name="FunctionAppConnectionString" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppConnectionString;

FunctionAppConnectionString.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#type FunctionApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#value FunctionApp#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#name FunctionApp#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#type FunctionApp#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#value FunctionApp#value}.

---

### FunctionAppIdentity <a name="FunctionAppIdentity" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppIdentity;

FunctionAppIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#type FunctionApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#identity_ids FunctionApp#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#type FunctionApp#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#identity_ids FunctionApp#identity_ids}.

---

### FunctionAppSiteConfig <a name="FunctionAppSiteConfig" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteConfig;

FunctionAppSiteConfig.builder()
//  .alwaysOn(java.lang.Boolean)
//  .alwaysOn(IResolvable)
//  .appScaleLimit(java.lang.Number)
//  .autoSwapSlotName(java.lang.String)
//  .cors(FunctionAppSiteConfigCors)
//  .dotnetFrameworkVersion(java.lang.String)
//  .elasticInstanceMinimum(java.lang.Number)
//  .ftpsState(java.lang.String)
//  .healthCheckPath(java.lang.String)
//  .http2Enabled(java.lang.Boolean)
//  .http2Enabled(IResolvable)
//  .ipRestriction(IResolvable)
//  .ipRestriction(java.util.List<FunctionAppSiteConfigIpRestriction>)
//  .javaVersion(java.lang.String)
//  .linuxFxVersion(java.lang.String)
//  .minTlsVersion(java.lang.String)
//  .preWarmedInstanceCount(java.lang.Number)
//  .runtimeScaleMonitoringEnabled(java.lang.Boolean)
//  .runtimeScaleMonitoringEnabled(IResolvable)
//  .scmIpRestriction(IResolvable)
//  .scmIpRestriction(java.util.List<FunctionAppSiteConfigScmIpRestriction>)
//  .scmType(java.lang.String)
//  .scmUseMainIpRestriction(java.lang.Boolean)
//  .scmUseMainIpRestriction(IResolvable)
//  .use32BitWorkerProcess(java.lang.Boolean)
//  .use32BitWorkerProcess(IResolvable)
//  .vnetRouteAllEnabled(java.lang.Boolean)
//  .vnetRouteAllEnabled(IResolvable)
//  .websocketsEnabled(java.lang.Boolean)
//  .websocketsEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.alwaysOn">alwaysOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#always_on FunctionApp#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.appScaleLimit">appScaleLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#app_scale_limit FunctionApp#app_scale_limit}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.autoSwapSlotName">autoSwapSlotName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#auto_swap_slot_name FunctionApp#auto_swap_slot_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.dotnetFrameworkVersion">dotnetFrameworkVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#dotnet_framework_version FunctionApp#dotnet_framework_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.elasticInstanceMinimum">elasticInstanceMinimum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#elastic_instance_minimum FunctionApp#elastic_instance_minimum}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.ftpsState">ftpsState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#ftps_state FunctionApp#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#health_check_path FunctionApp#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.http2Enabled">http2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#http2_enabled FunctionApp#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.ipRestriction">ipRestriction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#ip_restriction FunctionApp#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.javaVersion">javaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#java_version FunctionApp#java_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.linuxFxVersion">linuxFxVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#linux_fx_version FunctionApp#linux_fx_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#min_tls_version FunctionApp#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.preWarmedInstanceCount">preWarmedInstanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#pre_warmed_instance_count FunctionApp#pre_warmed_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.runtimeScaleMonitoringEnabled">runtimeScaleMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#runtime_scale_monitoring_enabled FunctionApp#runtime_scale_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmIpRestriction">scmIpRestriction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#scm_ip_restriction FunctionApp#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmType">scmType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#scm_type FunctionApp#scm_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#scm_use_main_ip_restriction FunctionApp#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.use32BitWorkerProcess">use32BitWorkerProcess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#use_32_bit_worker_process FunctionApp#use_32_bit_worker_process}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#vnet_route_all_enabled FunctionApp#vnet_route_all_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.websocketsEnabled">websocketsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#websockets_enabled FunctionApp#websockets_enabled}. |

---

##### `alwaysOn`<sup>Optional</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.alwaysOn"></a>

```java
public java.lang.Object getAlwaysOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#always_on FunctionApp#always_on}.

---

##### `appScaleLimit`<sup>Optional</sup> <a name="appScaleLimit" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.appScaleLimit"></a>

```java
public java.lang.Number getAppScaleLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#app_scale_limit FunctionApp#app_scale_limit}.

---

##### `autoSwapSlotName`<sup>Optional</sup> <a name="autoSwapSlotName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.autoSwapSlotName"></a>

```java
public java.lang.String getAutoSwapSlotName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#auto_swap_slot_name FunctionApp#auto_swap_slot_name}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.cors"></a>

```java
public FunctionAppSiteConfigCors getCors();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#cors FunctionApp#cors}

---

##### `dotnetFrameworkVersion`<sup>Optional</sup> <a name="dotnetFrameworkVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.dotnetFrameworkVersion"></a>

```java
public java.lang.String getDotnetFrameworkVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#dotnet_framework_version FunctionApp#dotnet_framework_version}.

---

##### `elasticInstanceMinimum`<sup>Optional</sup> <a name="elasticInstanceMinimum" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.elasticInstanceMinimum"></a>

```java
public java.lang.Number getElasticInstanceMinimum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#elastic_instance_minimum FunctionApp#elastic_instance_minimum}.

---

##### `ftpsState`<sup>Optional</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.ftpsState"></a>

```java
public java.lang.String getFtpsState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#ftps_state FunctionApp#ftps_state}.

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#health_check_path FunctionApp#health_check_path}.

---

##### `http2Enabled`<sup>Optional</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.http2Enabled"></a>

```java
public java.lang.Object getHttp2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#http2_enabled FunctionApp#http2_enabled}.

---

##### `ipRestriction`<sup>Optional</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.ipRestriction"></a>

```java
public java.lang.Object getIpRestriction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#ip_restriction FunctionApp#ip_restriction}.

---

##### `javaVersion`<sup>Optional</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.javaVersion"></a>

```java
public java.lang.String getJavaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#java_version FunctionApp#java_version}.

---

##### `linuxFxVersion`<sup>Optional</sup> <a name="linuxFxVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.linuxFxVersion"></a>

```java
public java.lang.String getLinuxFxVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#linux_fx_version FunctionApp#linux_fx_version}.

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.minTlsVersion"></a>

```java
public java.lang.String getMinTlsVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#min_tls_version FunctionApp#min_tls_version}.

---

##### `preWarmedInstanceCount`<sup>Optional</sup> <a name="preWarmedInstanceCount" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.preWarmedInstanceCount"></a>

```java
public java.lang.Number getPreWarmedInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#pre_warmed_instance_count FunctionApp#pre_warmed_instance_count}.

---

##### `runtimeScaleMonitoringEnabled`<sup>Optional</sup> <a name="runtimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.runtimeScaleMonitoringEnabled"></a>

```java
public java.lang.Object getRuntimeScaleMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#runtime_scale_monitoring_enabled FunctionApp#runtime_scale_monitoring_enabled}.

---

##### `scmIpRestriction`<sup>Optional</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmIpRestriction"></a>

```java
public java.lang.Object getScmIpRestriction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#scm_ip_restriction FunctionApp#scm_ip_restriction}.

---

##### `scmType`<sup>Optional</sup> <a name="scmType" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmType"></a>

```java
public java.lang.String getScmType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#scm_type FunctionApp#scm_type}.

---

##### `scmUseMainIpRestriction`<sup>Optional</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmUseMainIpRestriction"></a>

```java
public java.lang.Object getScmUseMainIpRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#scm_use_main_ip_restriction FunctionApp#scm_use_main_ip_restriction}.

---

##### `use32BitWorkerProcess`<sup>Optional</sup> <a name="use32BitWorkerProcess" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.use32BitWorkerProcess"></a>

```java
public java.lang.Object getUse32BitWorkerProcess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#use_32_bit_worker_process FunctionApp#use_32_bit_worker_process}.

---

##### `vnetRouteAllEnabled`<sup>Optional</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.vnetRouteAllEnabled"></a>

```java
public java.lang.Object getVnetRouteAllEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#vnet_route_all_enabled FunctionApp#vnet_route_all_enabled}.

---

##### `websocketsEnabled`<sup>Optional</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.websocketsEnabled"></a>

```java
public java.lang.Object getWebsocketsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#websockets_enabled FunctionApp#websockets_enabled}.

---

### FunctionAppSiteConfigCors <a name="FunctionAppSiteConfigCors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteConfigCors;

FunctionAppSiteConfigCors.builder()
    .allowedOrigins(java.util.List<java.lang.String>)
//  .supportCredentials(java.lang.Boolean)
//  .supportCredentials(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#allowed_origins FunctionApp#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.property.supportCredentials">supportCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#support_credentials FunctionApp#support_credentials}. |

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#allowed_origins FunctionApp#allowed_origins}.

---

##### `supportCredentials`<sup>Optional</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.property.supportCredentials"></a>

```java
public java.lang.Object getSupportCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#support_credentials FunctionApp#support_credentials}.

---

### FunctionAppSiteConfigIpRestriction <a name="FunctionAppSiteConfigIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteConfigIpRestriction;

FunctionAppSiteConfigIpRestriction.builder()
//  .action(java.lang.String)
//  .headers(IResolvable)
//  .headers(java.util.List<FunctionAppSiteConfigIpRestrictionHeaders>)
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
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#action FunctionApp#action}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#headers FunctionApp#headers}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#ip_address FunctionApp#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#priority FunctionApp#priority}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.serviceTag">serviceTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#service_tag FunctionApp#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#action FunctionApp#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#headers FunctionApp#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#ip_address FunctionApp#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#name FunctionApp#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#priority FunctionApp#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.serviceTag"></a>

```java
public java.lang.String getServiceTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#service_tag FunctionApp#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}.

---

### FunctionAppSiteConfigIpRestrictionHeaders <a name="FunctionAppSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteConfigIpRestrictionHeaders;

FunctionAppSiteConfigIpRestrictionHeaders.builder()
//  .xAzureFdid(java.util.List<java.lang.String>)
//  .xFdHealthProbe(java.util.List<java.lang.String>)
//  .xForwardedFor(java.util.List<java.lang.String>)
//  .xForwardedHost(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#x_azure_fdid FunctionApp#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#x_fd_health_probe FunctionApp#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#x_forwarded_for FunctionApp#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#x_forwarded_host FunctionApp#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```java
public java.util.List<java.lang.String> getXAzureFdid();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#x_azure_fdid FunctionApp#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbe();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#x_fd_health_probe FunctionApp#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```java
public java.util.List<java.lang.String> getXForwardedFor();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#x_forwarded_for FunctionApp#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```java
public java.util.List<java.lang.String> getXForwardedHost();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#x_forwarded_host FunctionApp#x_forwarded_host}.

---

### FunctionAppSiteConfigScmIpRestriction <a name="FunctionAppSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteConfigScmIpRestriction;

FunctionAppSiteConfigScmIpRestriction.builder()
//  .action(java.lang.String)
//  .headers(IResolvable)
//  .headers(java.util.List<FunctionAppSiteConfigScmIpRestrictionHeaders>)
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
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#action FunctionApp#action}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#headers FunctionApp#headers}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#ip_address FunctionApp#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#priority FunctionApp#priority}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.serviceTag">serviceTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#service_tag FunctionApp#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#action FunctionApp#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#headers FunctionApp#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#ip_address FunctionApp#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#name FunctionApp#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#priority FunctionApp#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.serviceTag"></a>

```java
public java.lang.String getServiceTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#service_tag FunctionApp#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}.

---

### FunctionAppSiteConfigScmIpRestrictionHeaders <a name="FunctionAppSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteConfigScmIpRestrictionHeaders;

FunctionAppSiteConfigScmIpRestrictionHeaders.builder()
//  .xAzureFdid(java.util.List<java.lang.String>)
//  .xFdHealthProbe(java.util.List<java.lang.String>)
//  .xForwardedFor(java.util.List<java.lang.String>)
//  .xForwardedHost(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#x_azure_fdid FunctionApp#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#x_fd_health_probe FunctionApp#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#x_forwarded_for FunctionApp#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#x_forwarded_host FunctionApp#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```java
public java.util.List<java.lang.String> getXAzureFdid();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#x_azure_fdid FunctionApp#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbe();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#x_fd_health_probe FunctionApp#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```java
public java.util.List<java.lang.String> getXForwardedFor();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#x_forwarded_for FunctionApp#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```java
public java.util.List<java.lang.String> getXForwardedHost();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#x_forwarded_host FunctionApp#x_forwarded_host}.

---

### FunctionAppSiteCredential <a name="FunctionAppSiteCredential" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteCredential;

FunctionAppSiteCredential.builder()
    .build();
```


### FunctionAppSourceControl <a name="FunctionAppSourceControl" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSourceControl;

FunctionAppSourceControl.builder()
//  .branch(java.lang.String)
//  .manualIntegration(java.lang.Boolean)
//  .manualIntegration(IResolvable)
//  .repoUrl(java.lang.String)
//  .rollbackEnabled(java.lang.Boolean)
//  .rollbackEnabled(IResolvable)
//  .useMercurial(java.lang.Boolean)
//  .useMercurial(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.branch">branch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#branch FunctionApp#branch}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.manualIntegration">manualIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#manual_integration FunctionApp#manual_integration}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.repoUrl">repoUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#repo_url FunctionApp#repo_url}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.rollbackEnabled">rollbackEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#rollback_enabled FunctionApp#rollback_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.useMercurial">useMercurial</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#use_mercurial FunctionApp#use_mercurial}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#branch FunctionApp#branch}.

---

##### `manualIntegration`<sup>Optional</sup> <a name="manualIntegration" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.manualIntegration"></a>

```java
public java.lang.Object getManualIntegration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#manual_integration FunctionApp#manual_integration}.

---

##### `repoUrl`<sup>Optional</sup> <a name="repoUrl" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.repoUrl"></a>

```java
public java.lang.String getRepoUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#repo_url FunctionApp#repo_url}.

---

##### `rollbackEnabled`<sup>Optional</sup> <a name="rollbackEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.rollbackEnabled"></a>

```java
public java.lang.Object getRollbackEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#rollback_enabled FunctionApp#rollback_enabled}.

---

##### `useMercurial`<sup>Optional</sup> <a name="useMercurial" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.useMercurial"></a>

```java
public java.lang.Object getUseMercurial();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#use_mercurial FunctionApp#use_mercurial}.

---

### FunctionAppTimeouts <a name="FunctionAppTimeouts" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppTimeouts;

FunctionAppTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#create FunctionApp#create}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#delete FunctionApp#delete}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#read FunctionApp#read}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#update FunctionApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#create FunctionApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#delete FunctionApp#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#read FunctionApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/function_app#update FunctionApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionAppAuthSettingsActiveDirectoryOutputReference <a name="FunctionAppAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppAuthSettingsActiveDirectoryOutputReference;

new FunctionAppAuthSettingsActiveDirectoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">resetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAudiences` <a name="resetAllowedAudiences" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```java
public void resetAllowedAudiences()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">allowedAudiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAudiencesInput`<sup>Optional</sup> <a name="allowedAudiencesInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```java
public FunctionAppAuthSettingsActiveDirectory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a>

---


### FunctionAppAuthSettingsFacebookOutputReference <a name="FunctionAppAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppAuthSettingsFacebookOutputReference;

new FunctionAppAuthSettingsFacebookOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```java
public void resetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appSecretInput">appSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appSecret">appSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `appSecretInput`<sup>Optional</sup> <a name="appSecretInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```java
public java.lang.String getAppSecretInput();
```

- *Type:* java.lang.String

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```java
public java.util.List<java.lang.String> getOauthScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appSecret"></a>

```java
public java.lang.String getAppSecret();
```

- *Type:* java.lang.String

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.internalValue"></a>

```java
public FunctionAppAuthSettingsFacebook getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a>

---


### FunctionAppAuthSettingsGoogleOutputReference <a name="FunctionAppAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppAuthSettingsGoogleOutputReference;

new FunctionAppAuthSettingsGoogleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```java
public void resetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```java
public java.util.List<java.lang.String> getOauthScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.internalValue"></a>

```java
public FunctionAppAuthSettingsGoogle getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a>

---


### FunctionAppAuthSettingsMicrosoftOutputReference <a name="FunctionAppAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppAuthSettingsMicrosoftOutputReference;

new FunctionAppAuthSettingsMicrosoftOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```java
public void resetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```java
public java.util.List<java.lang.String> getOauthScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```java
public FunctionAppAuthSettingsMicrosoft getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a>

---


### FunctionAppAuthSettingsOutputReference <a name="FunctionAppAuthSettingsOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppAuthSettingsOutputReference;

new FunctionAppAuthSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putActiveDirectory">putActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putFacebook">putFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putGoogle">putGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putMicrosoft">putMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putTwitter">putTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetActiveDirectory">resetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetAdditionalLoginParams">resetAdditionalLoginParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">resetAllowedExternalRedirectUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetDefaultProvider">resetDefaultProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetFacebook">resetFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetGoogle">resetGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetMicrosoft">resetMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTokenRefreshExtensionHours">resetTokenRefreshExtensionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTokenStoreEnabled">resetTokenStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTwitter">resetTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetUnauthenticatedClientAction">resetUnauthenticatedClientAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveDirectory` <a name="putActiveDirectory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putActiveDirectory"></a>

```java
public void putActiveDirectory(FunctionAppAuthSettingsActiveDirectory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a>

---

##### `putFacebook` <a name="putFacebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putFacebook"></a>

```java
public void putFacebook(FunctionAppAuthSettingsFacebook value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putFacebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a>

---

##### `putGoogle` <a name="putGoogle" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putGoogle"></a>

```java
public void putGoogle(FunctionAppAuthSettingsGoogle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putGoogle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a>

---

##### `putMicrosoft` <a name="putMicrosoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putMicrosoft"></a>

```java
public void putMicrosoft(FunctionAppAuthSettingsMicrosoft value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putMicrosoft.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a>

---

##### `putTwitter` <a name="putTwitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putTwitter"></a>

```java
public void putTwitter(FunctionAppAuthSettingsTwitter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putTwitter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a>

---

##### `resetActiveDirectory` <a name="resetActiveDirectory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetActiveDirectory"></a>

```java
public void resetActiveDirectory()
```

##### `resetAdditionalLoginParams` <a name="resetAdditionalLoginParams" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetAdditionalLoginParams"></a>

```java
public void resetAdditionalLoginParams()
```

##### `resetAllowedExternalRedirectUrls` <a name="resetAllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```java
public void resetAllowedExternalRedirectUrls()
```

##### `resetDefaultProvider` <a name="resetDefaultProvider" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetDefaultProvider"></a>

```java
public void resetDefaultProvider()
```

##### `resetFacebook` <a name="resetFacebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetFacebook"></a>

```java
public void resetFacebook()
```

##### `resetGoogle` <a name="resetGoogle" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetGoogle"></a>

```java
public void resetGoogle()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```

##### `resetMicrosoft` <a name="resetMicrosoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetMicrosoft"></a>

```java
public void resetMicrosoft()
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetRuntimeVersion"></a>

```java
public void resetRuntimeVersion()
```

##### `resetTokenRefreshExtensionHours` <a name="resetTokenRefreshExtensionHours" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```java
public void resetTokenRefreshExtensionHours()
```

##### `resetTokenStoreEnabled` <a name="resetTokenStoreEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```java
public void resetTokenStoreEnabled()
```

##### `resetTwitter` <a name="resetTwitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTwitter"></a>

```java
public void resetTwitter()
```

##### `resetUnauthenticatedClientAction` <a name="resetUnauthenticatedClientAction" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```java
public void resetUnauthenticatedClientAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference">FunctionAppAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference">FunctionAppAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference">FunctionAppAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference">FunctionAppAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference">FunctionAppAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.activeDirectoryInput">activeDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.additionalLoginParamsInput">additionalLoginParamsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">allowedExternalRedirectUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.defaultProviderInput">defaultProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.facebookInput">facebookInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.googleInput">googleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.microsoftInput">microsoftInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">tokenRefreshExtensionHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenStoreEnabledInput">tokenStoreEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.twitterInput">twitterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.unauthenticatedClientActionInput">unauthenticatedClientActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.additionalLoginParams">additionalLoginParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.defaultProvider">defaultProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.activeDirectory"></a>

```java
public FunctionAppAuthSettingsActiveDirectoryOutputReference getActiveDirectory();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference">FunctionAppAuthSettingsActiveDirectoryOutputReference</a>

---

##### `facebook`<sup>Required</sup> <a name="facebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.facebook"></a>

```java
public FunctionAppAuthSettingsFacebookOutputReference getFacebook();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference">FunctionAppAuthSettingsFacebookOutputReference</a>

---

##### `google`<sup>Required</sup> <a name="google" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.google"></a>

```java
public FunctionAppAuthSettingsGoogleOutputReference getGoogle();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference">FunctionAppAuthSettingsGoogleOutputReference</a>

---

##### `microsoft`<sup>Required</sup> <a name="microsoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.microsoft"></a>

```java
public FunctionAppAuthSettingsMicrosoftOutputReference getMicrosoft();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference">FunctionAppAuthSettingsMicrosoftOutputReference</a>

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.twitter"></a>

```java
public FunctionAppAuthSettingsTwitterOutputReference getTwitter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference">FunctionAppAuthSettingsTwitterOutputReference</a>

---

##### `activeDirectoryInput`<sup>Optional</sup> <a name="activeDirectoryInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```java
public FunctionAppAuthSettingsActiveDirectory getActiveDirectoryInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a>

---

##### `additionalLoginParamsInput`<sup>Optional</sup> <a name="additionalLoginParamsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.additionalLoginParamsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalLoginParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `allowedExternalRedirectUrlsInput`<sup>Optional</sup> <a name="allowedExternalRedirectUrlsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedExternalRedirectUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultProviderInput`<sup>Optional</sup> <a name="defaultProviderInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.defaultProviderInput"></a>

```java
public java.lang.String getDefaultProviderInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `facebookInput`<sup>Optional</sup> <a name="facebookInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.facebookInput"></a>

```java
public FunctionAppAuthSettingsFacebook getFacebookInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a>

---

##### `googleInput`<sup>Optional</sup> <a name="googleInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.googleInput"></a>

```java
public FunctionAppAuthSettingsGoogle getGoogleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a>

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `microsoftInput`<sup>Optional</sup> <a name="microsoftInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.microsoftInput"></a>

```java
public FunctionAppAuthSettingsMicrosoft getMicrosoftInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a>

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```java
public java.lang.String getRuntimeVersionInput();
```

- *Type:* java.lang.String

---

##### `tokenRefreshExtensionHoursInput`<sup>Optional</sup> <a name="tokenRefreshExtensionHoursInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```java
public java.lang.Number getTokenRefreshExtensionHoursInput();
```

- *Type:* java.lang.Number

---

##### `tokenStoreEnabledInput`<sup>Optional</sup> <a name="tokenStoreEnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```java
public java.lang.Object getTokenStoreEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `twitterInput`<sup>Optional</sup> <a name="twitterInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.twitterInput"></a>

```java
public FunctionAppAuthSettingsTwitter getTwitterInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a>

---

##### `unauthenticatedClientActionInput`<sup>Optional</sup> <a name="unauthenticatedClientActionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```java
public java.lang.String getUnauthenticatedClientActionInput();
```

- *Type:* java.lang.String

---

##### `additionalLoginParams`<sup>Required</sup> <a name="additionalLoginParams" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.additionalLoginParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalLoginParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `allowedExternalRedirectUrls`<sup>Required</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```java
public java.util.List<java.lang.String> getAllowedExternalRedirectUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultProvider`<sup>Required</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.defaultProvider"></a>

```java
public java.lang.String getDefaultProvider();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `tokenRefreshExtensionHours`<sup>Required</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```java
public java.lang.Number getTokenRefreshExtensionHours();
```

- *Type:* java.lang.Number

---

##### `tokenStoreEnabled`<sup>Required</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```java
public java.lang.Object getTokenStoreEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unauthenticatedClientAction`<sup>Required</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```java
public java.lang.String getUnauthenticatedClientAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.internalValue"></a>

```java
public FunctionAppAuthSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a>

---


### FunctionAppAuthSettingsTwitterOutputReference <a name="FunctionAppAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppAuthSettingsTwitterOutputReference;

new FunctionAppAuthSettingsTwitterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerKeyInput">consumerKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretInput">consumerSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerKeyInput`<sup>Optional</sup> <a name="consumerKeyInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```java
public java.lang.String getConsumerKeyInput();
```

- *Type:* java.lang.String

---

##### `consumerSecretInput`<sup>Optional</sup> <a name="consumerSecretInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```java
public java.lang.String getConsumerSecretInput();
```

- *Type:* java.lang.String

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.internalValue"></a>

```java
public FunctionAppAuthSettingsTwitter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a>

---


### FunctionAppConnectionStringList <a name="FunctionAppConnectionStringList" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppConnectionStringList;

new FunctionAppConnectionStringList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.get"></a>

```java
public FunctionAppConnectionStringOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>>

---


### FunctionAppConnectionStringOutputReference <a name="FunctionAppConnectionStringOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppConnectionStringOutputReference;

new FunctionAppConnectionStringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>

---


### FunctionAppIdentityOutputReference <a name="FunctionAppIdentityOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppIdentityOutputReference;

new FunctionAppIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.internalValue"></a>

```java
public FunctionAppIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a>

---


### FunctionAppSiteConfigCorsOutputReference <a name="FunctionAppSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteConfigCorsOutputReference;

new FunctionAppSiteConfigCorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resetSupportCredentials">resetSupportCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSupportCredentials` <a name="resetSupportCredentials" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```java
public void resetSupportCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.supportCredentialsInput">supportCredentialsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.supportCredentials">supportCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportCredentialsInput`<sup>Optional</sup> <a name="supportCredentialsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```java
public java.lang.Object getSupportCredentialsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportCredentials`<sup>Required</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.supportCredentials"></a>

```java
public java.lang.Object getSupportCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.internalValue"></a>

```java
public FunctionAppSiteConfigCors getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a>

---


### FunctionAppSiteConfigIpRestrictionHeadersList <a name="FunctionAppSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteConfigIpRestrictionHeadersList;

new FunctionAppSiteConfigIpRestrictionHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.get"></a>

```java
public FunctionAppSiteConfigIpRestrictionHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>>

---


### FunctionAppSiteConfigIpRestrictionHeadersOutputReference <a name="FunctionAppSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteConfigIpRestrictionHeadersOutputReference;

new FunctionAppSiteConfigIpRestrictionHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```java
public void resetXAzureFdid()
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```java
public void resetXFdHealthProbe()
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```java
public void resetXForwardedFor()
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```java
public void resetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```java
public java.util.List<java.lang.String> getXAzureFdidInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```java
public java.util.List<java.lang.String> getXForwardedForInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```java
public java.util.List<java.lang.String> getXForwardedHostInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```java
public java.util.List<java.lang.String> getXAzureFdid();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbe();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```java
public java.util.List<java.lang.String> getXForwardedFor();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```java
public java.util.List<java.lang.String> getXForwardedHost();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>

---


### FunctionAppSiteConfigIpRestrictionList <a name="FunctionAppSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteConfigIpRestrictionList;

new FunctionAppSiteConfigIpRestrictionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.get"></a>

```java
public FunctionAppSiteConfigIpRestrictionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>>

---


### FunctionAppSiteConfigIpRestrictionOutputReference <a name="FunctionAppSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteConfigIpRestrictionOutputReference;

new FunctionAppSiteConfigIpRestrictionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<FunctionAppSiteConfigIpRestrictionHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```java
public void resetServiceTag()
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```java
public void resetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList">FunctionAppSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.headers"></a>

```java
public FunctionAppSiteConfigIpRestrictionHeadersList getHeaders();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList">FunctionAppSiteConfigIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>>

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```java
public java.lang.String getServiceTagInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```java
public java.lang.String getVirtualNetworkSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```java
public java.lang.String getServiceTag();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>

---


### FunctionAppSiteConfigOutputReference <a name="FunctionAppSiteConfigOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteConfigOutputReference;

new FunctionAppSiteConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putIpRestriction">putIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putScmIpRestriction">putScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAlwaysOn">resetAlwaysOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAppScaleLimit">resetAppScaleLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAutoSwapSlotName">resetAutoSwapSlotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetDotnetFrameworkVersion">resetDotnetFrameworkVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetElasticInstanceMinimum">resetElasticInstanceMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetFtpsState">resetFtpsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetHttp2Enabled">resetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetIpRestriction">resetIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetJavaVersion">resetJavaVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetLinuxFxVersion">resetLinuxFxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetPreWarmedInstanceCount">resetPreWarmedInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled">resetRuntimeScaleMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmIpRestriction">resetScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmType">resetScmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmUseMainIpRestriction">resetScmUseMainIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetUse32BitWorkerProcess">resetUse32BitWorkerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetVnetRouteAllEnabled">resetVnetRouteAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetWebsocketsEnabled">resetWebsocketsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCors` <a name="putCors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putCors"></a>

```java
public void putCors(FunctionAppSiteConfigCors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a>

---

##### `putIpRestriction` <a name="putIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putIpRestriction"></a>

```java
public void putIpRestriction(IResolvable OR java.util.List<FunctionAppSiteConfigIpRestriction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>>

---

##### `putScmIpRestriction` <a name="putScmIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putScmIpRestriction"></a>

```java
public void putScmIpRestriction(IResolvable OR java.util.List<FunctionAppSiteConfigScmIpRestriction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>>

---

##### `resetAlwaysOn` <a name="resetAlwaysOn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAlwaysOn"></a>

```java
public void resetAlwaysOn()
```

##### `resetAppScaleLimit` <a name="resetAppScaleLimit" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAppScaleLimit"></a>

```java
public void resetAppScaleLimit()
```

##### `resetAutoSwapSlotName` <a name="resetAutoSwapSlotName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAutoSwapSlotName"></a>

```java
public void resetAutoSwapSlotName()
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetCors"></a>

```java
public void resetCors()
```

##### `resetDotnetFrameworkVersion` <a name="resetDotnetFrameworkVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetDotnetFrameworkVersion"></a>

```java
public void resetDotnetFrameworkVersion()
```

##### `resetElasticInstanceMinimum` <a name="resetElasticInstanceMinimum" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetElasticInstanceMinimum"></a>

```java
public void resetElasticInstanceMinimum()
```

##### `resetFtpsState` <a name="resetFtpsState" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetFtpsState"></a>

```java
public void resetFtpsState()
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetHealthCheckPath"></a>

```java
public void resetHealthCheckPath()
```

##### `resetHttp2Enabled` <a name="resetHttp2Enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetHttp2Enabled"></a>

```java
public void resetHttp2Enabled()
```

##### `resetIpRestriction` <a name="resetIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetIpRestriction"></a>

```java
public void resetIpRestriction()
```

##### `resetJavaVersion` <a name="resetJavaVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetJavaVersion"></a>

```java
public void resetJavaVersion()
```

##### `resetLinuxFxVersion` <a name="resetLinuxFxVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetLinuxFxVersion"></a>

```java
public void resetLinuxFxVersion()
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetMinTlsVersion"></a>

```java
public void resetMinTlsVersion()
```

##### `resetPreWarmedInstanceCount` <a name="resetPreWarmedInstanceCount" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetPreWarmedInstanceCount"></a>

```java
public void resetPreWarmedInstanceCount()
```

##### `resetRuntimeScaleMonitoringEnabled` <a name="resetRuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled"></a>

```java
public void resetRuntimeScaleMonitoringEnabled()
```

##### `resetScmIpRestriction` <a name="resetScmIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmIpRestriction"></a>

```java
public void resetScmIpRestriction()
```

##### `resetScmType` <a name="resetScmType" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmType"></a>

```java
public void resetScmType()
```

##### `resetScmUseMainIpRestriction` <a name="resetScmUseMainIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```java
public void resetScmUseMainIpRestriction()
```

##### `resetUse32BitWorkerProcess` <a name="resetUse32BitWorkerProcess" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetUse32BitWorkerProcess"></a>

```java
public void resetUse32BitWorkerProcess()
```

##### `resetVnetRouteAllEnabled` <a name="resetVnetRouteAllEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```java
public void resetVnetRouteAllEnabled()
```

##### `resetWebsocketsEnabled` <a name="resetWebsocketsEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```java
public void resetWebsocketsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference">FunctionAppSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ipRestriction">ipRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList">FunctionAppSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmIpRestriction">scmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList">FunctionAppSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.alwaysOnInput">alwaysOnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.appScaleLimitInput">appScaleLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.autoSwapSlotNameInput">autoSwapSlotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.corsInput">corsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.dotnetFrameworkVersionInput">dotnetFrameworkVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.elasticInstanceMinimumInput">elasticInstanceMinimumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ftpsStateInput">ftpsStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.http2EnabledInput">http2EnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ipRestrictionInput">ipRestrictionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.javaVersionInput">javaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.linuxFxVersionInput">linuxFxVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.preWarmedInstanceCountInput">preWarmedInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput">runtimeScaleMonitoringEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmIpRestrictionInput">scmIpRestrictionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmTypeInput">scmTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">scmUseMainIpRestrictionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.use32BitWorkerProcessInput">use32BitWorkerProcessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabledInput">vnetRouteAllEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.websocketsEnabledInput">websocketsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.alwaysOn">alwaysOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.appScaleLimit">appScaleLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.autoSwapSlotName">autoSwapSlotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.dotnetFrameworkVersion">dotnetFrameworkVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum">elasticInstanceMinimum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ftpsState">ftpsState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.http2Enabled">http2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.javaVersion">javaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.linuxFxVersion">linuxFxVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount">preWarmedInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">runtimeScaleMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmType">scmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.use32BitWorkerProcess">use32BitWorkerProcess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.websocketsEnabled">websocketsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.cors"></a>

```java
public FunctionAppSiteConfigCorsOutputReference getCors();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference">FunctionAppSiteConfigCorsOutputReference</a>

---

##### `ipRestriction`<sup>Required</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ipRestriction"></a>

```java
public FunctionAppSiteConfigIpRestrictionList getIpRestriction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList">FunctionAppSiteConfigIpRestrictionList</a>

---

##### `scmIpRestriction`<sup>Required</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmIpRestriction"></a>

```java
public FunctionAppSiteConfigScmIpRestrictionList getScmIpRestriction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList">FunctionAppSiteConfigScmIpRestrictionList</a>

---

##### `alwaysOnInput`<sup>Optional</sup> <a name="alwaysOnInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.alwaysOnInput"></a>

```java
public java.lang.Object getAlwaysOnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `appScaleLimitInput`<sup>Optional</sup> <a name="appScaleLimitInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.appScaleLimitInput"></a>

```java
public java.lang.Number getAppScaleLimitInput();
```

- *Type:* java.lang.Number

---

##### `autoSwapSlotNameInput`<sup>Optional</sup> <a name="autoSwapSlotNameInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.autoSwapSlotNameInput"></a>

```java
public java.lang.String getAutoSwapSlotNameInput();
```

- *Type:* java.lang.String

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.corsInput"></a>

```java
public FunctionAppSiteConfigCors getCorsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a>

---

##### `dotnetFrameworkVersionInput`<sup>Optional</sup> <a name="dotnetFrameworkVersionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.dotnetFrameworkVersionInput"></a>

```java
public java.lang.String getDotnetFrameworkVersionInput();
```

- *Type:* java.lang.String

---

##### `elasticInstanceMinimumInput`<sup>Optional</sup> <a name="elasticInstanceMinimumInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.elasticInstanceMinimumInput"></a>

```java
public java.lang.Number getElasticInstanceMinimumInput();
```

- *Type:* java.lang.Number

---

##### `ftpsStateInput`<sup>Optional</sup> <a name="ftpsStateInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ftpsStateInput"></a>

```java
public java.lang.String getFtpsStateInput();
```

- *Type:* java.lang.String

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.healthCheckPathInput"></a>

```java
public java.lang.String getHealthCheckPathInput();
```

- *Type:* java.lang.String

---

##### `http2EnabledInput`<sup>Optional</sup> <a name="http2EnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.http2EnabledInput"></a>

```java
public java.lang.Object getHttp2EnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipRestrictionInput`<sup>Optional</sup> <a name="ipRestrictionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ipRestrictionInput"></a>

```java
public java.lang.Object getIpRestrictionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>>

---

##### `javaVersionInput`<sup>Optional</sup> <a name="javaVersionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.javaVersionInput"></a>

```java
public java.lang.String getJavaVersionInput();
```

- *Type:* java.lang.String

---

##### `linuxFxVersionInput`<sup>Optional</sup> <a name="linuxFxVersionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.linuxFxVersionInput"></a>

```java
public java.lang.String getLinuxFxVersionInput();
```

- *Type:* java.lang.String

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.minTlsVersionInput"></a>

```java
public java.lang.String getMinTlsVersionInput();
```

- *Type:* java.lang.String

---

##### `preWarmedInstanceCountInput`<sup>Optional</sup> <a name="preWarmedInstanceCountInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.preWarmedInstanceCountInput"></a>

```java
public java.lang.Number getPreWarmedInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `runtimeScaleMonitoringEnabledInput`<sup>Optional</sup> <a name="runtimeScaleMonitoringEnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput"></a>

```java
public java.lang.Object getRuntimeScaleMonitoringEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scmIpRestrictionInput`<sup>Optional</sup> <a name="scmIpRestrictionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```java
public java.lang.Object getScmIpRestrictionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>>

---

##### `scmTypeInput`<sup>Optional</sup> <a name="scmTypeInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmTypeInput"></a>

```java
public java.lang.String getScmTypeInput();
```

- *Type:* java.lang.String

---

##### `scmUseMainIpRestrictionInput`<sup>Optional</sup> <a name="scmUseMainIpRestrictionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```java
public java.lang.Object getScmUseMainIpRestrictionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `use32BitWorkerProcessInput`<sup>Optional</sup> <a name="use32BitWorkerProcessInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.use32BitWorkerProcessInput"></a>

```java
public java.lang.Object getUse32BitWorkerProcessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnetRouteAllEnabledInput`<sup>Optional</sup> <a name="vnetRouteAllEnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```java
public java.lang.Object getVnetRouteAllEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `websocketsEnabledInput`<sup>Optional</sup> <a name="websocketsEnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```java
public java.lang.Object getWebsocketsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alwaysOn`<sup>Required</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.alwaysOn"></a>

```java
public java.lang.Object getAlwaysOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `appScaleLimit`<sup>Required</sup> <a name="appScaleLimit" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.appScaleLimit"></a>

```java
public java.lang.Number getAppScaleLimit();
```

- *Type:* java.lang.Number

---

##### `autoSwapSlotName`<sup>Required</sup> <a name="autoSwapSlotName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.autoSwapSlotName"></a>

```java
public java.lang.String getAutoSwapSlotName();
```

- *Type:* java.lang.String

---

##### `dotnetFrameworkVersion`<sup>Required</sup> <a name="dotnetFrameworkVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```java
public java.lang.String getDotnetFrameworkVersion();
```

- *Type:* java.lang.String

---

##### `elasticInstanceMinimum`<sup>Required</sup> <a name="elasticInstanceMinimum" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```java
public java.lang.Number getElasticInstanceMinimum();
```

- *Type:* java.lang.Number

---

##### `ftpsState`<sup>Required</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ftpsState"></a>

```java
public java.lang.String getFtpsState();
```

- *Type:* java.lang.String

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

---

##### `http2Enabled`<sup>Required</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.http2Enabled"></a>

```java
public java.lang.Object getHttp2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.javaVersion"></a>

```java
public java.lang.String getJavaVersion();
```

- *Type:* java.lang.String

---

##### `linuxFxVersion`<sup>Required</sup> <a name="linuxFxVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.linuxFxVersion"></a>

```java
public java.lang.String getLinuxFxVersion();
```

- *Type:* java.lang.String

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.minTlsVersion"></a>

```java
public java.lang.String getMinTlsVersion();
```

- *Type:* java.lang.String

---

##### `preWarmedInstanceCount`<sup>Required</sup> <a name="preWarmedInstanceCount" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```java
public java.lang.Number getPreWarmedInstanceCount();
```

- *Type:* java.lang.Number

---

##### `runtimeScaleMonitoringEnabled`<sup>Required</sup> <a name="runtimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```java
public java.lang.Object getRuntimeScaleMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmType"></a>

```java
public java.lang.String getScmType();
```

- *Type:* java.lang.String

---

##### `scmUseMainIpRestriction`<sup>Required</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```java
public java.lang.Object getScmUseMainIpRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `use32BitWorkerProcess`<sup>Required</sup> <a name="use32BitWorkerProcess" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```java
public java.lang.Object getUse32BitWorkerProcess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnetRouteAllEnabled`<sup>Required</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```java
public java.lang.Object getVnetRouteAllEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `websocketsEnabled`<sup>Required</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.websocketsEnabled"></a>

```java
public java.lang.Object getWebsocketsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.internalValue"></a>

```java
public FunctionAppSiteConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a>

---


### FunctionAppSiteConfigScmIpRestrictionHeadersList <a name="FunctionAppSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteConfigScmIpRestrictionHeadersList;

new FunctionAppSiteConfigScmIpRestrictionHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.get"></a>

```java
public FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>>

---


### FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference <a name="FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference;

new FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```java
public void resetXAzureFdid()
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```java
public void resetXFdHealthProbe()
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```java
public void resetXForwardedFor()
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```java
public void resetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```java
public java.util.List<java.lang.String> getXAzureFdidInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```java
public java.util.List<java.lang.String> getXForwardedForInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```java
public java.util.List<java.lang.String> getXForwardedHostInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```java
public java.util.List<java.lang.String> getXAzureFdid();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbe();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```java
public java.util.List<java.lang.String> getXForwardedFor();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```java
public java.util.List<java.lang.String> getXForwardedHost();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>

---


### FunctionAppSiteConfigScmIpRestrictionList <a name="FunctionAppSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteConfigScmIpRestrictionList;

new FunctionAppSiteConfigScmIpRestrictionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.get"></a>

```java
public FunctionAppSiteConfigScmIpRestrictionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>>

---


### FunctionAppSiteConfigScmIpRestrictionOutputReference <a name="FunctionAppSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteConfigScmIpRestrictionOutputReference;

new FunctionAppSiteConfigScmIpRestrictionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<FunctionAppSiteConfigScmIpRestrictionHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```java
public void resetServiceTag()
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```java
public void resetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList">FunctionAppSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```java
public FunctionAppSiteConfigScmIpRestrictionHeadersList getHeaders();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList">FunctionAppSiteConfigScmIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>>

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```java
public java.lang.String getServiceTagInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```java
public java.lang.String getVirtualNetworkSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```java
public java.lang.String getServiceTag();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>

---


### FunctionAppSiteCredentialList <a name="FunctionAppSiteCredentialList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteCredentialList;

new FunctionAppSiteCredentialList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.get"></a>

```java
public FunctionAppSiteCredentialOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FunctionAppSiteCredentialOutputReference <a name="FunctionAppSiteCredentialOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSiteCredentialOutputReference;

new FunctionAppSiteCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredential">FunctionAppSiteCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.internalValue"></a>

```java
public FunctionAppSiteCredential getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredential">FunctionAppSiteCredential</a>

---


### FunctionAppSourceControlOutputReference <a name="FunctionAppSourceControlOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppSourceControlOutputReference;

new FunctionAppSourceControlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetManualIntegration">resetManualIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetRepoUrl">resetRepoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetRollbackEnabled">resetRollbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetUseMercurial">resetUseMercurial</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetManualIntegration` <a name="resetManualIntegration" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetManualIntegration"></a>

```java
public void resetManualIntegration()
```

##### `resetRepoUrl` <a name="resetRepoUrl" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetRepoUrl"></a>

```java
public void resetRepoUrl()
```

##### `resetRollbackEnabled` <a name="resetRollbackEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetRollbackEnabled"></a>

```java
public void resetRollbackEnabled()
```

##### `resetUseMercurial` <a name="resetUseMercurial" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetUseMercurial"></a>

```java
public void resetUseMercurial()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.manualIntegrationInput">manualIntegrationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.repoUrlInput">repoUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.rollbackEnabledInput">rollbackEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.useMercurialInput">useMercurialInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.manualIntegration">manualIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.repoUrl">repoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.rollbackEnabled">rollbackEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.useMercurial">useMercurial</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `manualIntegrationInput`<sup>Optional</sup> <a name="manualIntegrationInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.manualIntegrationInput"></a>

```java
public java.lang.Object getManualIntegrationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `repoUrlInput`<sup>Optional</sup> <a name="repoUrlInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.repoUrlInput"></a>

```java
public java.lang.String getRepoUrlInput();
```

- *Type:* java.lang.String

---

##### `rollbackEnabledInput`<sup>Optional</sup> <a name="rollbackEnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.rollbackEnabledInput"></a>

```java
public java.lang.Object getRollbackEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useMercurialInput`<sup>Optional</sup> <a name="useMercurialInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.useMercurialInput"></a>

```java
public java.lang.Object getUseMercurialInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `manualIntegration`<sup>Required</sup> <a name="manualIntegration" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.manualIntegration"></a>

```java
public java.lang.Object getManualIntegration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `repoUrl`<sup>Required</sup> <a name="repoUrl" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.repoUrl"></a>

```java
public java.lang.String getRepoUrl();
```

- *Type:* java.lang.String

---

##### `rollbackEnabled`<sup>Required</sup> <a name="rollbackEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.rollbackEnabled"></a>

```java
public java.lang.Object getRollbackEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useMercurial`<sup>Required</sup> <a name="useMercurial" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.useMercurial"></a>

```java
public java.lang.Object getUseMercurial();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.internalValue"></a>

```java
public FunctionAppSourceControl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a>

---


### FunctionAppTimeoutsOutputReference <a name="FunctionAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app.FunctionAppTimeoutsOutputReference;

new FunctionAppTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a>

---



