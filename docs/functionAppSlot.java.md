# `functionAppSlot` Submodule <a name="`functionAppSlot` Submodule" id="@cdktf/provider-azurerm.functionAppSlot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionAppSlot <a name="FunctionAppSlot" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot azurerm_function_app_slot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlot;

FunctionAppSlot.Builder.create(Construct scope, java.lang.String id)
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
    .functionAppName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageAccountAccessKey(java.lang.String)
    .storageAccountName(java.lang.String)
//  .appSettings(java.util.Map<java.lang.String, java.lang.String>)
//  .authSettings(FunctionAppSlotAuthSettings)
//  .connectionString(IResolvable)
//  .connectionString(java.util.List<FunctionAppSlotConnectionString>)
//  .dailyMemoryTimeQuota(java.lang.Number)
//  .enableBuiltinLogging(java.lang.Boolean)
//  .enableBuiltinLogging(IResolvable)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .httpsOnly(java.lang.Boolean)
//  .httpsOnly(IResolvable)
//  .id(java.lang.String)
//  .identity(FunctionAppSlotIdentity)
//  .osType(java.lang.String)
//  .siteConfig(FunctionAppSlotSiteConfig)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FunctionAppSlotTimeouts)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.appServicePlanId">appServicePlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#app_service_plan_id FunctionAppSlot#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.functionAppName">functionAppName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#function_app_name FunctionAppSlot#function_app_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#location FunctionAppSlot#location}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#name FunctionAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#resource_group_name FunctionAppSlot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#storage_account_access_key FunctionAppSlot#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#storage_account_name FunctionAppSlot#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.appSettings">appSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#app_settings FunctionAppSlot#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.connectionString">connectionString</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>></code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.dailyMemoryTimeQuota">dailyMemoryTimeQuota</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#daily_memory_time_quota FunctionAppSlot#daily_memory_time_quota}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.enableBuiltinLogging">enableBuiltinLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#enable_builtin_logging FunctionAppSlot#enable_builtin_logging}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#enabled FunctionAppSlot#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#https_only FunctionAppSlot#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#id FunctionAppSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#os_type FunctionAppSlot#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#tags FunctionAppSlot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#version FunctionAppSlot#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appServicePlanId`<sup>Required</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.appServicePlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#app_service_plan_id FunctionAppSlot#app_service_plan_id}.

---

##### `functionAppName`<sup>Required</sup> <a name="functionAppName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.functionAppName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#function_app_name FunctionAppSlot#function_app_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#location FunctionAppSlot#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#name FunctionAppSlot#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#resource_group_name FunctionAppSlot#resource_group_name}.

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#storage_account_access_key FunctionAppSlot#storage_account_access_key}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.storageAccountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#storage_account_name FunctionAppSlot#storage_account_name}.

---

##### `appSettings`<sup>Optional</sup> <a name="appSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.appSettings"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#app_settings FunctionAppSlot#app_settings}.

---

##### `authSettings`<sup>Optional</sup> <a name="authSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.authSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#auth_settings FunctionAppSlot#auth_settings}

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.connectionString"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>>

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#connection_string FunctionAppSlot#connection_string}

---

##### `dailyMemoryTimeQuota`<sup>Optional</sup> <a name="dailyMemoryTimeQuota" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.dailyMemoryTimeQuota"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#daily_memory_time_quota FunctionAppSlot#daily_memory_time_quota}.

---

##### `enableBuiltinLogging`<sup>Optional</sup> <a name="enableBuiltinLogging" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.enableBuiltinLogging"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#enable_builtin_logging FunctionAppSlot#enable_builtin_logging}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#enabled FunctionAppSlot#enabled}.

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.httpsOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#https_only FunctionAppSlot#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#id FunctionAppSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#identity FunctionAppSlot#identity}

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.osType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#os_type FunctionAppSlot#os_type}.

---

##### `siteConfig`<sup>Optional</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.siteConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#site_config FunctionAppSlot#site_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#tags FunctionAppSlot#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#timeouts FunctionAppSlot#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#version FunctionAppSlot#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings">putAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putConnectionString">putConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig">putSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetAppSettings">resetAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetAuthSettings">resetAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetDailyMemoryTimeQuota">resetDailyMemoryTimeQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetEnableBuiltinLogging">resetEnableBuiltinLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetHttpsOnly">resetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetOsType">resetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetSiteConfig">resetSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthSettings` <a name="putAuthSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings"></a>

```java
public void putAuthSettings(FunctionAppSlotAuthSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a>

---

##### `putConnectionString` <a name="putConnectionString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putConnectionString"></a>

```java
public void putConnectionString(IResolvable OR java.util.List<FunctionAppSlotConnectionString> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putConnectionString.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putIdentity"></a>

```java
public void putIdentity(FunctionAppSlotIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a>

---

##### `putSiteConfig` <a name="putSiteConfig" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig"></a>

```java
public void putSiteConfig(FunctionAppSlotSiteConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putTimeouts"></a>

```java
public void putTimeouts(FunctionAppSlotTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a>

---

##### `resetAppSettings` <a name="resetAppSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetAppSettings"></a>

```java
public void resetAppSettings()
```

##### `resetAuthSettings` <a name="resetAuthSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetAuthSettings"></a>

```java
public void resetAuthSettings()
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetConnectionString"></a>

```java
public void resetConnectionString()
```

##### `resetDailyMemoryTimeQuota` <a name="resetDailyMemoryTimeQuota" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetDailyMemoryTimeQuota"></a>

```java
public void resetDailyMemoryTimeQuota()
```

##### `resetEnableBuiltinLogging` <a name="resetEnableBuiltinLogging" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetEnableBuiltinLogging"></a>

```java
public void resetEnableBuiltinLogging()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetHttpsOnly` <a name="resetHttpsOnly" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetHttpsOnly"></a>

```java
public void resetHttpsOnly()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetOsType` <a name="resetOsType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetOsType"></a>

```java
public void resetOsType()
```

##### `resetSiteConfig` <a name="resetSiteConfig" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetSiteConfig"></a>

```java
public void resetSiteConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionAppSlot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlot;

FunctionAppSlot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlot;

FunctionAppSlot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlot;

FunctionAppSlot.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlot;

FunctionAppSlot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FunctionAppSlot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FunctionAppSlot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FunctionAppSlot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FunctionAppSlot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FunctionAppSlot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference">FunctionAppSlotAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connectionString">connectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList">FunctionAppSlotConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.defaultHostname">defaultHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference">FunctionAppSlotIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.outboundIpAddresses">outboundIpAddresses</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.possibleOutboundIpAddresses">possibleOutboundIpAddresses</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference">FunctionAppSlotSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteCredential">siteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList">FunctionAppSlotSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference">FunctionAppSlotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appServicePlanIdInput">appServicePlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appSettingsInput">appSettingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.authSettingsInput">authSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connectionStringInput">connectionStringInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dailyMemoryTimeQuotaInput">dailyMemoryTimeQuotaInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enableBuiltinLoggingInput">enableBuiltinLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.functionAppNameInput">functionAppNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.httpsOnlyInput">httpsOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.osTypeInput">osTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteConfigInput">siteConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appServicePlanId">appServicePlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appSettings">appSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dailyMemoryTimeQuota">dailyMemoryTimeQuota</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enableBuiltinLogging">enableBuiltinLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.functionAppName">functionAppName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authSettings`<sup>Required</sup> <a name="authSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.authSettings"></a>

```java
public FunctionAppSlotAuthSettingsOutputReference getAuthSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference">FunctionAppSlotAuthSettingsOutputReference</a>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connectionString"></a>

```java
public FunctionAppSlotConnectionStringList getConnectionString();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList">FunctionAppSlotConnectionStringList</a>

---

##### `defaultHostname`<sup>Required</sup> <a name="defaultHostname" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.defaultHostname"></a>

```java
public java.lang.String getDefaultHostname();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.identity"></a>

```java
public FunctionAppSlotIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference">FunctionAppSlotIdentityOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `outboundIpAddresses`<sup>Required</sup> <a name="outboundIpAddresses" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.outboundIpAddresses"></a>

```java
public java.lang.String getOutboundIpAddresses();
```

- *Type:* java.lang.String

---

##### `possibleOutboundIpAddresses`<sup>Required</sup> <a name="possibleOutboundIpAddresses" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.possibleOutboundIpAddresses"></a>

```java
public java.lang.String getPossibleOutboundIpAddresses();
```

- *Type:* java.lang.String

---

##### `siteConfig`<sup>Required</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteConfig"></a>

```java
public FunctionAppSlotSiteConfigOutputReference getSiteConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference">FunctionAppSlotSiteConfigOutputReference</a>

---

##### `siteCredential`<sup>Required</sup> <a name="siteCredential" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteCredential"></a>

```java
public FunctionAppSlotSiteCredentialList getSiteCredential();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList">FunctionAppSlotSiteCredentialList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.timeouts"></a>

```java
public FunctionAppSlotTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference">FunctionAppSlotTimeoutsOutputReference</a>

---

##### `appServicePlanIdInput`<sup>Optional</sup> <a name="appServicePlanIdInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appServicePlanIdInput"></a>

```java
public java.lang.String getAppServicePlanIdInput();
```

- *Type:* java.lang.String

---

##### `appSettingsInput`<sup>Optional</sup> <a name="appSettingsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appSettingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAppSettingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authSettingsInput`<sup>Optional</sup> <a name="authSettingsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.authSettingsInput"></a>

```java
public FunctionAppSlotAuthSettings getAuthSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a>

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connectionStringInput"></a>

```java
public java.lang.Object getConnectionStringInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>>

---

##### `dailyMemoryTimeQuotaInput`<sup>Optional</sup> <a name="dailyMemoryTimeQuotaInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dailyMemoryTimeQuotaInput"></a>

```java
public java.lang.Number getDailyMemoryTimeQuotaInput();
```

- *Type:* java.lang.Number

---

##### `enableBuiltinLoggingInput`<sup>Optional</sup> <a name="enableBuiltinLoggingInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enableBuiltinLoggingInput"></a>

```java
public java.lang.Object getEnableBuiltinLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `functionAppNameInput`<sup>Optional</sup> <a name="functionAppNameInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.functionAppNameInput"></a>

```java
public java.lang.String getFunctionAppNameInput();
```

- *Type:* java.lang.String

---

##### `httpsOnlyInput`<sup>Optional</sup> <a name="httpsOnlyInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.httpsOnlyInput"></a>

```java
public java.lang.Object getHttpsOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.identityInput"></a>

```java
public FunctionAppSlotIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.osTypeInput"></a>

```java
public java.lang.String getOsTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `siteConfigInput`<sup>Optional</sup> <a name="siteConfigInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteConfigInput"></a>

```java
public FunctionAppSlotSiteConfig getSiteConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a>

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountAccessKeyInput"></a>

```java
public java.lang.String getStorageAccountAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountNameInput"></a>

```java
public java.lang.String getStorageAccountNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `appServicePlanId`<sup>Required</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appServicePlanId"></a>

```java
public java.lang.String getAppServicePlanId();
```

- *Type:* java.lang.String

---

##### `appSettings`<sup>Required</sup> <a name="appSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAppSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `dailyMemoryTimeQuota`<sup>Required</sup> <a name="dailyMemoryTimeQuota" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dailyMemoryTimeQuota"></a>

```java
public java.lang.Number getDailyMemoryTimeQuota();
```

- *Type:* java.lang.Number

---

##### `enableBuiltinLogging`<sup>Required</sup> <a name="enableBuiltinLogging" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enableBuiltinLogging"></a>

```java
public java.lang.Object getEnableBuiltinLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `functionAppName`<sup>Required</sup> <a name="functionAppName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.functionAppName"></a>

```java
public java.lang.String getFunctionAppName();
```

- *Type:* java.lang.String

---

##### `httpsOnly`<sup>Required</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.httpsOnly"></a>

```java
public java.lang.Object getHttpsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionAppSlotAuthSettings <a name="FunctionAppSlotAuthSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotAuthSettings;

FunctionAppSlotAuthSettings.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .activeDirectory(FunctionAppSlotAuthSettingsActiveDirectory)
//  .additionalLoginParams(java.util.Map<java.lang.String, java.lang.String>)
//  .allowedExternalRedirectUrls(java.util.List<java.lang.String>)
//  .defaultProvider(java.lang.String)
//  .facebook(FunctionAppSlotAuthSettingsFacebook)
//  .google(FunctionAppSlotAuthSettingsGoogle)
//  .issuer(java.lang.String)
//  .microsoft(FunctionAppSlotAuthSettingsMicrosoft)
//  .runtimeVersion(java.lang.String)
//  .tokenRefreshExtensionHours(java.lang.Number)
//  .tokenStoreEnabled(java.lang.Boolean)
//  .tokenStoreEnabled(IResolvable)
//  .twitter(FunctionAppSlotAuthSettingsTwitter)
//  .unauthenticatedClientAction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#enabled FunctionAppSlot#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.additionalLoginParams">additionalLoginParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#additional_login_params FunctionAppSlot#additional_login_params}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#allowed_external_redirect_urls FunctionAppSlot#allowed_external_redirect_urls}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.defaultProvider">defaultProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#default_provider FunctionAppSlot#default_provider}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#issuer FunctionAppSlot#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#runtime_version FunctionAppSlot#runtime_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#token_refresh_extension_hours FunctionAppSlot#token_refresh_extension_hours}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#token_store_enabled FunctionAppSlot#token_store_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#unauthenticated_client_action FunctionAppSlot#unauthenticated_client_action}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#enabled FunctionAppSlot#enabled}.

---

##### `activeDirectory`<sup>Optional</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.activeDirectory"></a>

```java
public FunctionAppSlotAuthSettingsActiveDirectory getActiveDirectory();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#active_directory FunctionAppSlot#active_directory}

---

##### `additionalLoginParams`<sup>Optional</sup> <a name="additionalLoginParams" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.additionalLoginParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalLoginParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#additional_login_params FunctionAppSlot#additional_login_params}.

---

##### `allowedExternalRedirectUrls`<sup>Optional</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.allowedExternalRedirectUrls"></a>

```java
public java.util.List<java.lang.String> getAllowedExternalRedirectUrls();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#allowed_external_redirect_urls FunctionAppSlot#allowed_external_redirect_urls}.

---

##### `defaultProvider`<sup>Optional</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.defaultProvider"></a>

```java
public java.lang.String getDefaultProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#default_provider FunctionAppSlot#default_provider}.

---

##### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.facebook"></a>

```java
public FunctionAppSlotAuthSettingsFacebook getFacebook();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#facebook FunctionAppSlot#facebook}

---

##### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.google"></a>

```java
public FunctionAppSlotAuthSettingsGoogle getGoogle();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#google FunctionAppSlot#google}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#issuer FunctionAppSlot#issuer}.

---

##### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.microsoft"></a>

```java
public FunctionAppSlotAuthSettingsMicrosoft getMicrosoft();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#microsoft FunctionAppSlot#microsoft}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#runtime_version FunctionAppSlot#runtime_version}.

---

##### `tokenRefreshExtensionHours`<sup>Optional</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.tokenRefreshExtensionHours"></a>

```java
public java.lang.Number getTokenRefreshExtensionHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#token_refresh_extension_hours FunctionAppSlot#token_refresh_extension_hours}.

---

##### `tokenStoreEnabled`<sup>Optional</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.tokenStoreEnabled"></a>

```java
public java.lang.Object getTokenStoreEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#token_store_enabled FunctionAppSlot#token_store_enabled}.

---

##### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.twitter"></a>

```java
public FunctionAppSlotAuthSettingsTwitter getTwitter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#twitter FunctionAppSlot#twitter}

---

##### `unauthenticatedClientAction`<sup>Optional</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.unauthenticatedClientAction"></a>

```java
public java.lang.String getUnauthenticatedClientAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#unauthenticated_client_action FunctionAppSlot#unauthenticated_client_action}.

---

### FunctionAppSlotAuthSettingsActiveDirectory <a name="FunctionAppSlotAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotAuthSettingsActiveDirectory;

FunctionAppSlotAuthSettingsActiveDirectory.builder()
    .clientId(java.lang.String)
//  .allowedAudiences(java.util.List<java.lang.String>)
//  .clientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.allowedAudiences">allowedAudiences</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#allowed_audiences FunctionAppSlot#allowed_audiences}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}.

---

##### `allowedAudiences`<sup>Optional</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiences();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#allowed_audiences FunctionAppSlot#allowed_audiences}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}.

---

### FunctionAppSlotAuthSettingsFacebook <a name="FunctionAppSlotAuthSettingsFacebook" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotAuthSettingsFacebook;

FunctionAppSlotAuthSettingsFacebook.builder()
    .appId(java.lang.String)
    .appSecret(java.lang.String)
//  .oauthScopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#app_id FunctionAppSlot#app_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.appSecret">appSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#app_secret FunctionAppSlot#app_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#app_id FunctionAppSlot#app_id}.

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.appSecret"></a>

```java
public java.lang.String getAppSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#app_secret FunctionAppSlot#app_secret}.

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}.

---

### FunctionAppSlotAuthSettingsGoogle <a name="FunctionAppSlotAuthSettingsGoogle" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotAuthSettingsGoogle;

FunctionAppSlotAuthSettingsGoogle.builder()
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
//  .oauthScopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}.

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}.

---

### FunctionAppSlotAuthSettingsMicrosoft <a name="FunctionAppSlotAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotAuthSettingsMicrosoft;

FunctionAppSlotAuthSettingsMicrosoft.builder()
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
//  .oauthScopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}.

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}.

---

### FunctionAppSlotAuthSettingsTwitter <a name="FunctionAppSlotAuthSettingsTwitter" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotAuthSettingsTwitter;

FunctionAppSlotAuthSettingsTwitter.builder()
    .consumerKey(java.lang.String)
    .consumerSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#consumer_key FunctionAppSlot#consumer_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#consumer_secret FunctionAppSlot#consumer_secret}. |

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#consumer_key FunctionAppSlot#consumer_key}.

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#consumer_secret FunctionAppSlot#consumer_secret}.

---

### FunctionAppSlotConfig <a name="FunctionAppSlotConfig" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotConfig;

FunctionAppSlotConfig.builder()
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
    .functionAppName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageAccountAccessKey(java.lang.String)
    .storageAccountName(java.lang.String)
//  .appSettings(java.util.Map<java.lang.String, java.lang.String>)
//  .authSettings(FunctionAppSlotAuthSettings)
//  .connectionString(IResolvable)
//  .connectionString(java.util.List<FunctionAppSlotConnectionString>)
//  .dailyMemoryTimeQuota(java.lang.Number)
//  .enableBuiltinLogging(java.lang.Boolean)
//  .enableBuiltinLogging(IResolvable)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .httpsOnly(java.lang.Boolean)
//  .httpsOnly(IResolvable)
//  .id(java.lang.String)
//  .identity(FunctionAppSlotIdentity)
//  .osType(java.lang.String)
//  .siteConfig(FunctionAppSlotSiteConfig)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FunctionAppSlotTimeouts)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.appServicePlanId">appServicePlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#app_service_plan_id FunctionAppSlot#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.functionAppName">functionAppName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#function_app_name FunctionAppSlot#function_app_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#location FunctionAppSlot#location}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#name FunctionAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#resource_group_name FunctionAppSlot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#storage_account_access_key FunctionAppSlot#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#storage_account_name FunctionAppSlot#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.appSettings">appSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#app_settings FunctionAppSlot#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.connectionString">connectionString</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>></code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.dailyMemoryTimeQuota">dailyMemoryTimeQuota</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#daily_memory_time_quota FunctionAppSlot#daily_memory_time_quota}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.enableBuiltinLogging">enableBuiltinLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#enable_builtin_logging FunctionAppSlot#enable_builtin_logging}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#enabled FunctionAppSlot#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#https_only FunctionAppSlot#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#id FunctionAppSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#os_type FunctionAppSlot#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#tags FunctionAppSlot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#version FunctionAppSlot#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appServicePlanId`<sup>Required</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.appServicePlanId"></a>

```java
public java.lang.String getAppServicePlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#app_service_plan_id FunctionAppSlot#app_service_plan_id}.

---

##### `functionAppName`<sup>Required</sup> <a name="functionAppName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.functionAppName"></a>

```java
public java.lang.String getFunctionAppName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#function_app_name FunctionAppSlot#function_app_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#location FunctionAppSlot#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#name FunctionAppSlot#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#resource_group_name FunctionAppSlot#resource_group_name}.

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#storage_account_access_key FunctionAppSlot#storage_account_access_key}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#storage_account_name FunctionAppSlot#storage_account_name}.

---

##### `appSettings`<sup>Optional</sup> <a name="appSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.appSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAppSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#app_settings FunctionAppSlot#app_settings}.

---

##### `authSettings`<sup>Optional</sup> <a name="authSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.authSettings"></a>

```java
public FunctionAppSlotAuthSettings getAuthSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#auth_settings FunctionAppSlot#auth_settings}

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.connectionString"></a>

```java
public java.lang.Object getConnectionString();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>>

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#connection_string FunctionAppSlot#connection_string}

---

##### `dailyMemoryTimeQuota`<sup>Optional</sup> <a name="dailyMemoryTimeQuota" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.dailyMemoryTimeQuota"></a>

```java
public java.lang.Number getDailyMemoryTimeQuota();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#daily_memory_time_quota FunctionAppSlot#daily_memory_time_quota}.

---

##### `enableBuiltinLogging`<sup>Optional</sup> <a name="enableBuiltinLogging" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.enableBuiltinLogging"></a>

```java
public java.lang.Object getEnableBuiltinLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#enable_builtin_logging FunctionAppSlot#enable_builtin_logging}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#enabled FunctionAppSlot#enabled}.

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.httpsOnly"></a>

```java
public java.lang.Object getHttpsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#https_only FunctionAppSlot#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#id FunctionAppSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.identity"></a>

```java
public FunctionAppSlotIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#identity FunctionAppSlot#identity}

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#os_type FunctionAppSlot#os_type}.

---

##### `siteConfig`<sup>Optional</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.siteConfig"></a>

```java
public FunctionAppSlotSiteConfig getSiteConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#site_config FunctionAppSlot#site_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#tags FunctionAppSlot#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.timeouts"></a>

```java
public FunctionAppSlotTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#timeouts FunctionAppSlot#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#version FunctionAppSlot#version}.

---

### FunctionAppSlotConnectionString <a name="FunctionAppSlotConnectionString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotConnectionString;

FunctionAppSlotConnectionString.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#name FunctionAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#type FunctionAppSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#value FunctionAppSlot#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#name FunctionAppSlot#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#type FunctionAppSlot#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#value FunctionAppSlot#value}.

---

### FunctionAppSlotIdentity <a name="FunctionAppSlotIdentity" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotIdentity;

FunctionAppSlotIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#type FunctionAppSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#identity_ids FunctionAppSlot#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#type FunctionAppSlot#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#identity_ids FunctionAppSlot#identity_ids}.

---

### FunctionAppSlotSiteConfig <a name="FunctionAppSlotSiteConfig" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteConfig;

FunctionAppSlotSiteConfig.builder()
//  .alwaysOn(java.lang.Boolean)
//  .alwaysOn(IResolvable)
//  .appScaleLimit(java.lang.Number)
//  .autoSwapSlotName(java.lang.String)
//  .cors(FunctionAppSlotSiteConfigCors)
//  .dotnetFrameworkVersion(java.lang.String)
//  .elasticInstanceMinimum(java.lang.Number)
//  .ftpsState(java.lang.String)
//  .healthCheckPath(java.lang.String)
//  .http2Enabled(java.lang.Boolean)
//  .http2Enabled(IResolvable)
//  .ipRestriction(IResolvable)
//  .ipRestriction(java.util.List<FunctionAppSlotSiteConfigIpRestriction>)
//  .javaVersion(java.lang.String)
//  .linuxFxVersion(java.lang.String)
//  .minTlsVersion(java.lang.String)
//  .preWarmedInstanceCount(java.lang.Number)
//  .runtimeScaleMonitoringEnabled(java.lang.Boolean)
//  .runtimeScaleMonitoringEnabled(IResolvable)
//  .scmIpRestriction(IResolvable)
//  .scmIpRestriction(java.util.List<FunctionAppSlotSiteConfigScmIpRestriction>)
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
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.alwaysOn">alwaysOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#always_on FunctionAppSlot#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.appScaleLimit">appScaleLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#app_scale_limit FunctionAppSlot#app_scale_limit}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.autoSwapSlotName">autoSwapSlotName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#auto_swap_slot_name FunctionAppSlot#auto_swap_slot_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.dotnetFrameworkVersion">dotnetFrameworkVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#dotnet_framework_version FunctionAppSlot#dotnet_framework_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.elasticInstanceMinimum">elasticInstanceMinimum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#elastic_instance_minimum FunctionAppSlot#elastic_instance_minimum}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.ftpsState">ftpsState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#ftps_state FunctionAppSlot#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#health_check_path FunctionAppSlot#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.http2Enabled">http2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#http2_enabled FunctionAppSlot#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.ipRestriction">ipRestriction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#ip_restriction FunctionAppSlot#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.javaVersion">javaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#java_version FunctionAppSlot#java_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.linuxFxVersion">linuxFxVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#linux_fx_version FunctionAppSlot#linux_fx_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#min_tls_version FunctionAppSlot#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.preWarmedInstanceCount">preWarmedInstanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#pre_warmed_instance_count FunctionAppSlot#pre_warmed_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.runtimeScaleMonitoringEnabled">runtimeScaleMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#runtime_scale_monitoring_enabled FunctionAppSlot#runtime_scale_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmIpRestriction">scmIpRestriction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#scm_ip_restriction FunctionAppSlot#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmType">scmType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#scm_type FunctionAppSlot#scm_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#scm_use_main_ip_restriction FunctionAppSlot#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.use32BitWorkerProcess">use32BitWorkerProcess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#use_32_bit_worker_process FunctionAppSlot#use_32_bit_worker_process}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#vnet_route_all_enabled FunctionAppSlot#vnet_route_all_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.websocketsEnabled">websocketsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#websockets_enabled FunctionAppSlot#websockets_enabled}. |

---

##### `alwaysOn`<sup>Optional</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.alwaysOn"></a>

```java
public java.lang.Object getAlwaysOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#always_on FunctionAppSlot#always_on}.

---

##### `appScaleLimit`<sup>Optional</sup> <a name="appScaleLimit" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.appScaleLimit"></a>

```java
public java.lang.Number getAppScaleLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#app_scale_limit FunctionAppSlot#app_scale_limit}.

---

##### `autoSwapSlotName`<sup>Optional</sup> <a name="autoSwapSlotName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.autoSwapSlotName"></a>

```java
public java.lang.String getAutoSwapSlotName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#auto_swap_slot_name FunctionAppSlot#auto_swap_slot_name}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.cors"></a>

```java
public FunctionAppSlotSiteConfigCors getCors();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#cors FunctionAppSlot#cors}

---

##### `dotnetFrameworkVersion`<sup>Optional</sup> <a name="dotnetFrameworkVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.dotnetFrameworkVersion"></a>

```java
public java.lang.String getDotnetFrameworkVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#dotnet_framework_version FunctionAppSlot#dotnet_framework_version}.

---

##### `elasticInstanceMinimum`<sup>Optional</sup> <a name="elasticInstanceMinimum" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.elasticInstanceMinimum"></a>

```java
public java.lang.Number getElasticInstanceMinimum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#elastic_instance_minimum FunctionAppSlot#elastic_instance_minimum}.

---

##### `ftpsState`<sup>Optional</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.ftpsState"></a>

```java
public java.lang.String getFtpsState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#ftps_state FunctionAppSlot#ftps_state}.

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#health_check_path FunctionAppSlot#health_check_path}.

---

##### `http2Enabled`<sup>Optional</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.http2Enabled"></a>

```java
public java.lang.Object getHttp2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#http2_enabled FunctionAppSlot#http2_enabled}.

---

##### `ipRestriction`<sup>Optional</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.ipRestriction"></a>

```java
public java.lang.Object getIpRestriction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#ip_restriction FunctionAppSlot#ip_restriction}.

---

##### `javaVersion`<sup>Optional</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.javaVersion"></a>

```java
public java.lang.String getJavaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#java_version FunctionAppSlot#java_version}.

---

##### `linuxFxVersion`<sup>Optional</sup> <a name="linuxFxVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.linuxFxVersion"></a>

```java
public java.lang.String getLinuxFxVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#linux_fx_version FunctionAppSlot#linux_fx_version}.

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.minTlsVersion"></a>

```java
public java.lang.String getMinTlsVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#min_tls_version FunctionAppSlot#min_tls_version}.

---

##### `preWarmedInstanceCount`<sup>Optional</sup> <a name="preWarmedInstanceCount" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.preWarmedInstanceCount"></a>

```java
public java.lang.Number getPreWarmedInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#pre_warmed_instance_count FunctionAppSlot#pre_warmed_instance_count}.

---

##### `runtimeScaleMonitoringEnabled`<sup>Optional</sup> <a name="runtimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.runtimeScaleMonitoringEnabled"></a>

```java
public java.lang.Object getRuntimeScaleMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#runtime_scale_monitoring_enabled FunctionAppSlot#runtime_scale_monitoring_enabled}.

---

##### `scmIpRestriction`<sup>Optional</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmIpRestriction"></a>

```java
public java.lang.Object getScmIpRestriction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#scm_ip_restriction FunctionAppSlot#scm_ip_restriction}.

---

##### `scmType`<sup>Optional</sup> <a name="scmType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmType"></a>

```java
public java.lang.String getScmType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#scm_type FunctionAppSlot#scm_type}.

---

##### `scmUseMainIpRestriction`<sup>Optional</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmUseMainIpRestriction"></a>

```java
public java.lang.Object getScmUseMainIpRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#scm_use_main_ip_restriction FunctionAppSlot#scm_use_main_ip_restriction}.

---

##### `use32BitWorkerProcess`<sup>Optional</sup> <a name="use32BitWorkerProcess" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.use32BitWorkerProcess"></a>

```java
public java.lang.Object getUse32BitWorkerProcess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#use_32_bit_worker_process FunctionAppSlot#use_32_bit_worker_process}.

---

##### `vnetRouteAllEnabled`<sup>Optional</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.vnetRouteAllEnabled"></a>

```java
public java.lang.Object getVnetRouteAllEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#vnet_route_all_enabled FunctionAppSlot#vnet_route_all_enabled}.

---

##### `websocketsEnabled`<sup>Optional</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.websocketsEnabled"></a>

```java
public java.lang.Object getWebsocketsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#websockets_enabled FunctionAppSlot#websockets_enabled}.

---

### FunctionAppSlotSiteConfigCors <a name="FunctionAppSlotSiteConfigCors" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteConfigCors;

FunctionAppSlotSiteConfigCors.builder()
    .allowedOrigins(java.util.List<java.lang.String>)
//  .supportCredentials(java.lang.Boolean)
//  .supportCredentials(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#allowed_origins FunctionAppSlot#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors.property.supportCredentials">supportCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#support_credentials FunctionAppSlot#support_credentials}. |

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#allowed_origins FunctionAppSlot#allowed_origins}.

---

##### `supportCredentials`<sup>Optional</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors.property.supportCredentials"></a>

```java
public java.lang.Object getSupportCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#support_credentials FunctionAppSlot#support_credentials}.

---

### FunctionAppSlotSiteConfigIpRestriction <a name="FunctionAppSlotSiteConfigIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteConfigIpRestriction;

FunctionAppSlotSiteConfigIpRestriction.builder()
//  .action(java.lang.String)
//  .headers(IResolvable)
//  .headers(java.util.List<FunctionAppSlotSiteConfigIpRestrictionHeaders>)
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
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#action FunctionAppSlot#action}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#headers FunctionAppSlot#headers}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#ip_address FunctionAppSlot#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#name FunctionAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#priority FunctionAppSlot#priority}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.serviceTag">serviceTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#service_tag FunctionAppSlot#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#virtual_network_subnet_id FunctionAppSlot#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#action FunctionAppSlot#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#headers FunctionAppSlot#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#ip_address FunctionAppSlot#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#name FunctionAppSlot#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#priority FunctionAppSlot#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.serviceTag"></a>

```java
public java.lang.String getServiceTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#service_tag FunctionAppSlot#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#virtual_network_subnet_id FunctionAppSlot#virtual_network_subnet_id}.

---

### FunctionAppSlotSiteConfigIpRestrictionHeaders <a name="FunctionAppSlotSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteConfigIpRestrictionHeaders;

FunctionAppSlotSiteConfigIpRestrictionHeaders.builder()
//  .xAzureFdid(java.util.List<java.lang.String>)
//  .xFdHealthProbe(java.util.List<java.lang.String>)
//  .xForwardedFor(java.util.List<java.lang.String>)
//  .xForwardedHost(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#x_azure_fdid FunctionAppSlot#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#x_fd_health_probe FunctionAppSlot#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#x_forwarded_for FunctionAppSlot#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#x_forwarded_host FunctionAppSlot#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```java
public java.util.List<java.lang.String> getXAzureFdid();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#x_azure_fdid FunctionAppSlot#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbe();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#x_fd_health_probe FunctionAppSlot#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```java
public java.util.List<java.lang.String> getXForwardedFor();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#x_forwarded_for FunctionAppSlot#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```java
public java.util.List<java.lang.String> getXForwardedHost();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#x_forwarded_host FunctionAppSlot#x_forwarded_host}.

---

### FunctionAppSlotSiteConfigScmIpRestriction <a name="FunctionAppSlotSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteConfigScmIpRestriction;

FunctionAppSlotSiteConfigScmIpRestriction.builder()
//  .action(java.lang.String)
//  .headers(IResolvable)
//  .headers(java.util.List<FunctionAppSlotSiteConfigScmIpRestrictionHeaders>)
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
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#action FunctionAppSlot#action}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#headers FunctionAppSlot#headers}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#ip_address FunctionAppSlot#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#name FunctionAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#priority FunctionAppSlot#priority}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.serviceTag">serviceTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#service_tag FunctionAppSlot#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#virtual_network_subnet_id FunctionAppSlot#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#action FunctionAppSlot#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#headers FunctionAppSlot#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#ip_address FunctionAppSlot#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#name FunctionAppSlot#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#priority FunctionAppSlot#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.serviceTag"></a>

```java
public java.lang.String getServiceTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#service_tag FunctionAppSlot#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#virtual_network_subnet_id FunctionAppSlot#virtual_network_subnet_id}.

---

### FunctionAppSlotSiteConfigScmIpRestrictionHeaders <a name="FunctionAppSlotSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders;

FunctionAppSlotSiteConfigScmIpRestrictionHeaders.builder()
//  .xAzureFdid(java.util.List<java.lang.String>)
//  .xFdHealthProbe(java.util.List<java.lang.String>)
//  .xForwardedFor(java.util.List<java.lang.String>)
//  .xForwardedHost(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#x_azure_fdid FunctionAppSlot#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#x_fd_health_probe FunctionAppSlot#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#x_forwarded_for FunctionAppSlot#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#x_forwarded_host FunctionAppSlot#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```java
public java.util.List<java.lang.String> getXAzureFdid();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#x_azure_fdid FunctionAppSlot#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbe();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#x_fd_health_probe FunctionAppSlot#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```java
public java.util.List<java.lang.String> getXForwardedFor();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#x_forwarded_for FunctionAppSlot#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```java
public java.util.List<java.lang.String> getXForwardedHost();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#x_forwarded_host FunctionAppSlot#x_forwarded_host}.

---

### FunctionAppSlotSiteCredential <a name="FunctionAppSlotSiteCredential" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteCredential;

FunctionAppSlotSiteCredential.builder()
    .build();
```


### FunctionAppSlotTimeouts <a name="FunctionAppSlotTimeouts" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotTimeouts;

FunctionAppSlotTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#create FunctionAppSlot#create}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#delete FunctionAppSlot#delete}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#read FunctionAppSlot#read}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#update FunctionAppSlot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#create FunctionAppSlot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#delete FunctionAppSlot#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#read FunctionAppSlot#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/function_app_slot#update FunctionAppSlot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionAppSlotAuthSettingsActiveDirectoryOutputReference <a name="FunctionAppSlotAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference;

new FunctionAppSlotAuthSettingsActiveDirectoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">resetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAudiences` <a name="resetAllowedAudiences" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```java
public void resetAllowedAudiences()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">allowedAudiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAudiencesInput`<sup>Optional</sup> <a name="allowedAudiencesInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```java
public FunctionAppSlotAuthSettingsActiveDirectory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a>

---


### FunctionAppSlotAuthSettingsFacebookOutputReference <a name="FunctionAppSlotAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotAuthSettingsFacebookOutputReference;

new FunctionAppSlotAuthSettingsFacebookOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```java
public void resetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecretInput">appSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecret">appSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `appSecretInput`<sup>Optional</sup> <a name="appSecretInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```java
public java.lang.String getAppSecretInput();
```

- *Type:* java.lang.String

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```java
public java.util.List<java.lang.String> getOauthScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecret"></a>

```java
public java.lang.String getAppSecret();
```

- *Type:* java.lang.String

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.internalValue"></a>

```java
public FunctionAppSlotAuthSettingsFacebook getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a>

---


### FunctionAppSlotAuthSettingsGoogleOutputReference <a name="FunctionAppSlotAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotAuthSettingsGoogleOutputReference;

new FunctionAppSlotAuthSettingsGoogleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```java
public void resetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```java
public java.util.List<java.lang.String> getOauthScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.internalValue"></a>

```java
public FunctionAppSlotAuthSettingsGoogle getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a>

---


### FunctionAppSlotAuthSettingsMicrosoftOutputReference <a name="FunctionAppSlotAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotAuthSettingsMicrosoftOutputReference;

new FunctionAppSlotAuthSettingsMicrosoftOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```java
public void resetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```java
public java.util.List<java.lang.String> getOauthScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```java
public FunctionAppSlotAuthSettingsMicrosoft getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a>

---


### FunctionAppSlotAuthSettingsOutputReference <a name="FunctionAppSlotAuthSettingsOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotAuthSettingsOutputReference;

new FunctionAppSlotAuthSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putActiveDirectory">putActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putFacebook">putFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putGoogle">putGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putMicrosoft">putMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putTwitter">putTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetActiveDirectory">resetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetAdditionalLoginParams">resetAdditionalLoginParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">resetAllowedExternalRedirectUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetDefaultProvider">resetDefaultProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetFacebook">resetFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetGoogle">resetGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetMicrosoft">resetMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTokenRefreshExtensionHours">resetTokenRefreshExtensionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTokenStoreEnabled">resetTokenStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTwitter">resetTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetUnauthenticatedClientAction">resetUnauthenticatedClientAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveDirectory` <a name="putActiveDirectory" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putActiveDirectory"></a>

```java
public void putActiveDirectory(FunctionAppSlotAuthSettingsActiveDirectory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a>

---

##### `putFacebook` <a name="putFacebook" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putFacebook"></a>

```java
public void putFacebook(FunctionAppSlotAuthSettingsFacebook value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putFacebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a>

---

##### `putGoogle` <a name="putGoogle" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putGoogle"></a>

```java
public void putGoogle(FunctionAppSlotAuthSettingsGoogle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putGoogle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a>

---

##### `putMicrosoft` <a name="putMicrosoft" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putMicrosoft"></a>

```java
public void putMicrosoft(FunctionAppSlotAuthSettingsMicrosoft value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putMicrosoft.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a>

---

##### `putTwitter` <a name="putTwitter" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putTwitter"></a>

```java
public void putTwitter(FunctionAppSlotAuthSettingsTwitter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putTwitter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a>

---

##### `resetActiveDirectory` <a name="resetActiveDirectory" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetActiveDirectory"></a>

```java
public void resetActiveDirectory()
```

##### `resetAdditionalLoginParams` <a name="resetAdditionalLoginParams" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetAdditionalLoginParams"></a>

```java
public void resetAdditionalLoginParams()
```

##### `resetAllowedExternalRedirectUrls` <a name="resetAllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```java
public void resetAllowedExternalRedirectUrls()
```

##### `resetDefaultProvider` <a name="resetDefaultProvider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetDefaultProvider"></a>

```java
public void resetDefaultProvider()
```

##### `resetFacebook` <a name="resetFacebook" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetFacebook"></a>

```java
public void resetFacebook()
```

##### `resetGoogle` <a name="resetGoogle" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetGoogle"></a>

```java
public void resetGoogle()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```

##### `resetMicrosoft` <a name="resetMicrosoft" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetMicrosoft"></a>

```java
public void resetMicrosoft()
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetRuntimeVersion"></a>

```java
public void resetRuntimeVersion()
```

##### `resetTokenRefreshExtensionHours` <a name="resetTokenRefreshExtensionHours" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```java
public void resetTokenRefreshExtensionHours()
```

##### `resetTokenStoreEnabled` <a name="resetTokenStoreEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```java
public void resetTokenStoreEnabled()
```

##### `resetTwitter` <a name="resetTwitter" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTwitter"></a>

```java
public void resetTwitter()
```

##### `resetUnauthenticatedClientAction` <a name="resetUnauthenticatedClientAction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```java
public void resetUnauthenticatedClientAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference">FunctionAppSlotAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference">FunctionAppSlotAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference">FunctionAppSlotAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference">FunctionAppSlotAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference">FunctionAppSlotAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.activeDirectoryInput">activeDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.additionalLoginParamsInput">additionalLoginParamsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">allowedExternalRedirectUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.defaultProviderInput">defaultProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.facebookInput">facebookInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.googleInput">googleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.microsoftInput">microsoftInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">tokenRefreshExtensionHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenStoreEnabledInput">tokenStoreEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.twitterInput">twitterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.unauthenticatedClientActionInput">unauthenticatedClientActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.additionalLoginParams">additionalLoginParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.defaultProvider">defaultProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.activeDirectory"></a>

```java
public FunctionAppSlotAuthSettingsActiveDirectoryOutputReference getActiveDirectory();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference">FunctionAppSlotAuthSettingsActiveDirectoryOutputReference</a>

---

##### `facebook`<sup>Required</sup> <a name="facebook" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.facebook"></a>

```java
public FunctionAppSlotAuthSettingsFacebookOutputReference getFacebook();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference">FunctionAppSlotAuthSettingsFacebookOutputReference</a>

---

##### `google`<sup>Required</sup> <a name="google" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.google"></a>

```java
public FunctionAppSlotAuthSettingsGoogleOutputReference getGoogle();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference">FunctionAppSlotAuthSettingsGoogleOutputReference</a>

---

##### `microsoft`<sup>Required</sup> <a name="microsoft" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.microsoft"></a>

```java
public FunctionAppSlotAuthSettingsMicrosoftOutputReference getMicrosoft();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference">FunctionAppSlotAuthSettingsMicrosoftOutputReference</a>

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.twitter"></a>

```java
public FunctionAppSlotAuthSettingsTwitterOutputReference getTwitter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference">FunctionAppSlotAuthSettingsTwitterOutputReference</a>

---

##### `activeDirectoryInput`<sup>Optional</sup> <a name="activeDirectoryInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```java
public FunctionAppSlotAuthSettingsActiveDirectory getActiveDirectoryInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a>

---

##### `additionalLoginParamsInput`<sup>Optional</sup> <a name="additionalLoginParamsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.additionalLoginParamsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalLoginParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `allowedExternalRedirectUrlsInput`<sup>Optional</sup> <a name="allowedExternalRedirectUrlsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedExternalRedirectUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultProviderInput`<sup>Optional</sup> <a name="defaultProviderInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.defaultProviderInput"></a>

```java
public java.lang.String getDefaultProviderInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `facebookInput`<sup>Optional</sup> <a name="facebookInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.facebookInput"></a>

```java
public FunctionAppSlotAuthSettingsFacebook getFacebookInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a>

---

##### `googleInput`<sup>Optional</sup> <a name="googleInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.googleInput"></a>

```java
public FunctionAppSlotAuthSettingsGoogle getGoogleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a>

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `microsoftInput`<sup>Optional</sup> <a name="microsoftInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.microsoftInput"></a>

```java
public FunctionAppSlotAuthSettingsMicrosoft getMicrosoftInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a>

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```java
public java.lang.String getRuntimeVersionInput();
```

- *Type:* java.lang.String

---

##### `tokenRefreshExtensionHoursInput`<sup>Optional</sup> <a name="tokenRefreshExtensionHoursInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```java
public java.lang.Number getTokenRefreshExtensionHoursInput();
```

- *Type:* java.lang.Number

---

##### `tokenStoreEnabledInput`<sup>Optional</sup> <a name="tokenStoreEnabledInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```java
public java.lang.Object getTokenStoreEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `twitterInput`<sup>Optional</sup> <a name="twitterInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.twitterInput"></a>

```java
public FunctionAppSlotAuthSettingsTwitter getTwitterInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a>

---

##### `unauthenticatedClientActionInput`<sup>Optional</sup> <a name="unauthenticatedClientActionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```java
public java.lang.String getUnauthenticatedClientActionInput();
```

- *Type:* java.lang.String

---

##### `additionalLoginParams`<sup>Required</sup> <a name="additionalLoginParams" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.additionalLoginParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalLoginParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `allowedExternalRedirectUrls`<sup>Required</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```java
public java.util.List<java.lang.String> getAllowedExternalRedirectUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultProvider`<sup>Required</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.defaultProvider"></a>

```java
public java.lang.String getDefaultProvider();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `tokenRefreshExtensionHours`<sup>Required</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```java
public java.lang.Number getTokenRefreshExtensionHours();
```

- *Type:* java.lang.Number

---

##### `tokenStoreEnabled`<sup>Required</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```java
public java.lang.Object getTokenStoreEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unauthenticatedClientAction`<sup>Required</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```java
public java.lang.String getUnauthenticatedClientAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.internalValue"></a>

```java
public FunctionAppSlotAuthSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a>

---


### FunctionAppSlotAuthSettingsTwitterOutputReference <a name="FunctionAppSlotAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotAuthSettingsTwitterOutputReference;

new FunctionAppSlotAuthSettingsTwitterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerKeyInput">consumerKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretInput">consumerSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerKeyInput`<sup>Optional</sup> <a name="consumerKeyInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```java
public java.lang.String getConsumerKeyInput();
```

- *Type:* java.lang.String

---

##### `consumerSecretInput`<sup>Optional</sup> <a name="consumerSecretInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```java
public java.lang.String getConsumerSecretInput();
```

- *Type:* java.lang.String

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.internalValue"></a>

```java
public FunctionAppSlotAuthSettingsTwitter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a>

---


### FunctionAppSlotConnectionStringList <a name="FunctionAppSlotConnectionStringList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotConnectionStringList;

new FunctionAppSlotConnectionStringList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.get"></a>

```java
public FunctionAppSlotConnectionStringOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>>

---


### FunctionAppSlotConnectionStringOutputReference <a name="FunctionAppSlotConnectionStringOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotConnectionStringOutputReference;

new FunctionAppSlotConnectionStringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>

---


### FunctionAppSlotIdentityOutputReference <a name="FunctionAppSlotIdentityOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotIdentityOutputReference;

new FunctionAppSlotIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.internalValue"></a>

```java
public FunctionAppSlotIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a>

---


### FunctionAppSlotSiteConfigCorsOutputReference <a name="FunctionAppSlotSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteConfigCorsOutputReference;

new FunctionAppSlotSiteConfigCorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.resetSupportCredentials">resetSupportCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSupportCredentials` <a name="resetSupportCredentials" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```java
public void resetSupportCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.supportCredentialsInput">supportCredentialsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.supportCredentials">supportCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportCredentialsInput`<sup>Optional</sup> <a name="supportCredentialsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```java
public java.lang.Object getSupportCredentialsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportCredentials`<sup>Required</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.supportCredentials"></a>

```java
public java.lang.Object getSupportCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.internalValue"></a>

```java
public FunctionAppSlotSiteConfigCors getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a>

---


### FunctionAppSlotSiteConfigIpRestrictionHeadersList <a name="FunctionAppSlotSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteConfigIpRestrictionHeadersList;

new FunctionAppSlotSiteConfigIpRestrictionHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.get"></a>

```java
public FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a>>

---


### FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference <a name="FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference;

new FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```java
public void resetXAzureFdid()
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```java
public void resetXFdHealthProbe()
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```java
public void resetXForwardedFor()
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```java
public void resetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```java
public java.util.List<java.lang.String> getXAzureFdidInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```java
public java.util.List<java.lang.String> getXForwardedForInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```java
public java.util.List<java.lang.String> getXForwardedHostInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```java
public java.util.List<java.lang.String> getXAzureFdid();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbe();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```java
public java.util.List<java.lang.String> getXForwardedFor();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```java
public java.util.List<java.lang.String> getXForwardedHost();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a>

---


### FunctionAppSlotSiteConfigIpRestrictionList <a name="FunctionAppSlotSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteConfigIpRestrictionList;

new FunctionAppSlotSiteConfigIpRestrictionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.get"></a>

```java
public FunctionAppSlotSiteConfigIpRestrictionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>>

---


### FunctionAppSlotSiteConfigIpRestrictionOutputReference <a name="FunctionAppSlotSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteConfigIpRestrictionOutputReference;

new FunctionAppSlotSiteConfigIpRestrictionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<FunctionAppSlotSiteConfigIpRestrictionHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```java
public void resetServiceTag()
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```java
public void resetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList">FunctionAppSlotSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.headers"></a>

```java
public FunctionAppSlotSiteConfigIpRestrictionHeadersList getHeaders();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList">FunctionAppSlotSiteConfigIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a>>

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```java
public java.lang.String getServiceTagInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```java
public java.lang.String getVirtualNetworkSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```java
public java.lang.String getServiceTag();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>

---


### FunctionAppSlotSiteConfigOutputReference <a name="FunctionAppSlotSiteConfigOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteConfigOutputReference;

new FunctionAppSlotSiteConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putIpRestriction">putIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putScmIpRestriction">putScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAlwaysOn">resetAlwaysOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAppScaleLimit">resetAppScaleLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAutoSwapSlotName">resetAutoSwapSlotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetDotnetFrameworkVersion">resetDotnetFrameworkVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetElasticInstanceMinimum">resetElasticInstanceMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetFtpsState">resetFtpsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetHttp2Enabled">resetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetIpRestriction">resetIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetJavaVersion">resetJavaVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetLinuxFxVersion">resetLinuxFxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetPreWarmedInstanceCount">resetPreWarmedInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled">resetRuntimeScaleMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmIpRestriction">resetScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmType">resetScmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmUseMainIpRestriction">resetScmUseMainIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetUse32BitWorkerProcess">resetUse32BitWorkerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetVnetRouteAllEnabled">resetVnetRouteAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetWebsocketsEnabled">resetWebsocketsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCors` <a name="putCors" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putCors"></a>

```java
public void putCors(FunctionAppSlotSiteConfigCors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a>

---

##### `putIpRestriction` <a name="putIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putIpRestriction"></a>

```java
public void putIpRestriction(IResolvable OR java.util.List<FunctionAppSlotSiteConfigIpRestriction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>>

---

##### `putScmIpRestriction` <a name="putScmIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putScmIpRestriction"></a>

```java
public void putScmIpRestriction(IResolvable OR java.util.List<FunctionAppSlotSiteConfigScmIpRestriction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>>

---

##### `resetAlwaysOn` <a name="resetAlwaysOn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAlwaysOn"></a>

```java
public void resetAlwaysOn()
```

##### `resetAppScaleLimit` <a name="resetAppScaleLimit" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAppScaleLimit"></a>

```java
public void resetAppScaleLimit()
```

##### `resetAutoSwapSlotName` <a name="resetAutoSwapSlotName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAutoSwapSlotName"></a>

```java
public void resetAutoSwapSlotName()
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetCors"></a>

```java
public void resetCors()
```

##### `resetDotnetFrameworkVersion` <a name="resetDotnetFrameworkVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetDotnetFrameworkVersion"></a>

```java
public void resetDotnetFrameworkVersion()
```

##### `resetElasticInstanceMinimum` <a name="resetElasticInstanceMinimum" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetElasticInstanceMinimum"></a>

```java
public void resetElasticInstanceMinimum()
```

##### `resetFtpsState` <a name="resetFtpsState" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetFtpsState"></a>

```java
public void resetFtpsState()
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetHealthCheckPath"></a>

```java
public void resetHealthCheckPath()
```

##### `resetHttp2Enabled` <a name="resetHttp2Enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetHttp2Enabled"></a>

```java
public void resetHttp2Enabled()
```

##### `resetIpRestriction` <a name="resetIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetIpRestriction"></a>

```java
public void resetIpRestriction()
```

##### `resetJavaVersion` <a name="resetJavaVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetJavaVersion"></a>

```java
public void resetJavaVersion()
```

##### `resetLinuxFxVersion` <a name="resetLinuxFxVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetLinuxFxVersion"></a>

```java
public void resetLinuxFxVersion()
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetMinTlsVersion"></a>

```java
public void resetMinTlsVersion()
```

##### `resetPreWarmedInstanceCount` <a name="resetPreWarmedInstanceCount" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetPreWarmedInstanceCount"></a>

```java
public void resetPreWarmedInstanceCount()
```

##### `resetRuntimeScaleMonitoringEnabled` <a name="resetRuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled"></a>

```java
public void resetRuntimeScaleMonitoringEnabled()
```

##### `resetScmIpRestriction` <a name="resetScmIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmIpRestriction"></a>

```java
public void resetScmIpRestriction()
```

##### `resetScmType` <a name="resetScmType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmType"></a>

```java
public void resetScmType()
```

##### `resetScmUseMainIpRestriction` <a name="resetScmUseMainIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```java
public void resetScmUseMainIpRestriction()
```

##### `resetUse32BitWorkerProcess` <a name="resetUse32BitWorkerProcess" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetUse32BitWorkerProcess"></a>

```java
public void resetUse32BitWorkerProcess()
```

##### `resetVnetRouteAllEnabled` <a name="resetVnetRouteAllEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```java
public void resetVnetRouteAllEnabled()
```

##### `resetWebsocketsEnabled` <a name="resetWebsocketsEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```java
public void resetWebsocketsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference">FunctionAppSlotSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ipRestriction">ipRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList">FunctionAppSlotSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmIpRestriction">scmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList">FunctionAppSlotSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.alwaysOnInput">alwaysOnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.appScaleLimitInput">appScaleLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.autoSwapSlotNameInput">autoSwapSlotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.corsInput">corsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.dotnetFrameworkVersionInput">dotnetFrameworkVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.elasticInstanceMinimumInput">elasticInstanceMinimumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ftpsStateInput">ftpsStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.http2EnabledInput">http2EnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ipRestrictionInput">ipRestrictionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.javaVersionInput">javaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.linuxFxVersionInput">linuxFxVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.preWarmedInstanceCountInput">preWarmedInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput">runtimeScaleMonitoringEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmIpRestrictionInput">scmIpRestrictionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmTypeInput">scmTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">scmUseMainIpRestrictionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.use32BitWorkerProcessInput">use32BitWorkerProcessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabledInput">vnetRouteAllEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.websocketsEnabledInput">websocketsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.alwaysOn">alwaysOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.appScaleLimit">appScaleLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.autoSwapSlotName">autoSwapSlotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.dotnetFrameworkVersion">dotnetFrameworkVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.elasticInstanceMinimum">elasticInstanceMinimum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ftpsState">ftpsState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.http2Enabled">http2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.javaVersion">javaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.linuxFxVersion">linuxFxVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.preWarmedInstanceCount">preWarmedInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">runtimeScaleMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmType">scmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.use32BitWorkerProcess">use32BitWorkerProcess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.websocketsEnabled">websocketsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.cors"></a>

```java
public FunctionAppSlotSiteConfigCorsOutputReference getCors();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference">FunctionAppSlotSiteConfigCorsOutputReference</a>

---

##### `ipRestriction`<sup>Required</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ipRestriction"></a>

```java
public FunctionAppSlotSiteConfigIpRestrictionList getIpRestriction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList">FunctionAppSlotSiteConfigIpRestrictionList</a>

---

##### `scmIpRestriction`<sup>Required</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmIpRestriction"></a>

```java
public FunctionAppSlotSiteConfigScmIpRestrictionList getScmIpRestriction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList">FunctionAppSlotSiteConfigScmIpRestrictionList</a>

---

##### `alwaysOnInput`<sup>Optional</sup> <a name="alwaysOnInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.alwaysOnInput"></a>

```java
public java.lang.Object getAlwaysOnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `appScaleLimitInput`<sup>Optional</sup> <a name="appScaleLimitInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.appScaleLimitInput"></a>

```java
public java.lang.Number getAppScaleLimitInput();
```

- *Type:* java.lang.Number

---

##### `autoSwapSlotNameInput`<sup>Optional</sup> <a name="autoSwapSlotNameInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.autoSwapSlotNameInput"></a>

```java
public java.lang.String getAutoSwapSlotNameInput();
```

- *Type:* java.lang.String

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.corsInput"></a>

```java
public FunctionAppSlotSiteConfigCors getCorsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a>

---

##### `dotnetFrameworkVersionInput`<sup>Optional</sup> <a name="dotnetFrameworkVersionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.dotnetFrameworkVersionInput"></a>

```java
public java.lang.String getDotnetFrameworkVersionInput();
```

- *Type:* java.lang.String

---

##### `elasticInstanceMinimumInput`<sup>Optional</sup> <a name="elasticInstanceMinimumInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.elasticInstanceMinimumInput"></a>

```java
public java.lang.Number getElasticInstanceMinimumInput();
```

- *Type:* java.lang.Number

---

##### `ftpsStateInput`<sup>Optional</sup> <a name="ftpsStateInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ftpsStateInput"></a>

```java
public java.lang.String getFtpsStateInput();
```

- *Type:* java.lang.String

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.healthCheckPathInput"></a>

```java
public java.lang.String getHealthCheckPathInput();
```

- *Type:* java.lang.String

---

##### `http2EnabledInput`<sup>Optional</sup> <a name="http2EnabledInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.http2EnabledInput"></a>

```java
public java.lang.Object getHttp2EnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipRestrictionInput`<sup>Optional</sup> <a name="ipRestrictionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ipRestrictionInput"></a>

```java
public java.lang.Object getIpRestrictionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>>

---

##### `javaVersionInput`<sup>Optional</sup> <a name="javaVersionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.javaVersionInput"></a>

```java
public java.lang.String getJavaVersionInput();
```

- *Type:* java.lang.String

---

##### `linuxFxVersionInput`<sup>Optional</sup> <a name="linuxFxVersionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.linuxFxVersionInput"></a>

```java
public java.lang.String getLinuxFxVersionInput();
```

- *Type:* java.lang.String

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.minTlsVersionInput"></a>

```java
public java.lang.String getMinTlsVersionInput();
```

- *Type:* java.lang.String

---

##### `preWarmedInstanceCountInput`<sup>Optional</sup> <a name="preWarmedInstanceCountInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.preWarmedInstanceCountInput"></a>

```java
public java.lang.Number getPreWarmedInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `runtimeScaleMonitoringEnabledInput`<sup>Optional</sup> <a name="runtimeScaleMonitoringEnabledInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput"></a>

```java
public java.lang.Object getRuntimeScaleMonitoringEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scmIpRestrictionInput`<sup>Optional</sup> <a name="scmIpRestrictionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```java
public java.lang.Object getScmIpRestrictionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>>

---

##### `scmTypeInput`<sup>Optional</sup> <a name="scmTypeInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmTypeInput"></a>

```java
public java.lang.String getScmTypeInput();
```

- *Type:* java.lang.String

---

##### `scmUseMainIpRestrictionInput`<sup>Optional</sup> <a name="scmUseMainIpRestrictionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```java
public java.lang.Object getScmUseMainIpRestrictionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `use32BitWorkerProcessInput`<sup>Optional</sup> <a name="use32BitWorkerProcessInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.use32BitWorkerProcessInput"></a>

```java
public java.lang.Object getUse32BitWorkerProcessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnetRouteAllEnabledInput`<sup>Optional</sup> <a name="vnetRouteAllEnabledInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```java
public java.lang.Object getVnetRouteAllEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `websocketsEnabledInput`<sup>Optional</sup> <a name="websocketsEnabledInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```java
public java.lang.Object getWebsocketsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alwaysOn`<sup>Required</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.alwaysOn"></a>

```java
public java.lang.Object getAlwaysOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `appScaleLimit`<sup>Required</sup> <a name="appScaleLimit" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.appScaleLimit"></a>

```java
public java.lang.Number getAppScaleLimit();
```

- *Type:* java.lang.Number

---

##### `autoSwapSlotName`<sup>Required</sup> <a name="autoSwapSlotName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.autoSwapSlotName"></a>

```java
public java.lang.String getAutoSwapSlotName();
```

- *Type:* java.lang.String

---

##### `dotnetFrameworkVersion`<sup>Required</sup> <a name="dotnetFrameworkVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```java
public java.lang.String getDotnetFrameworkVersion();
```

- *Type:* java.lang.String

---

##### `elasticInstanceMinimum`<sup>Required</sup> <a name="elasticInstanceMinimum" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```java
public java.lang.Number getElasticInstanceMinimum();
```

- *Type:* java.lang.Number

---

##### `ftpsState`<sup>Required</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ftpsState"></a>

```java
public java.lang.String getFtpsState();
```

- *Type:* java.lang.String

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

---

##### `http2Enabled`<sup>Required</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.http2Enabled"></a>

```java
public java.lang.Object getHttp2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.javaVersion"></a>

```java
public java.lang.String getJavaVersion();
```

- *Type:* java.lang.String

---

##### `linuxFxVersion`<sup>Required</sup> <a name="linuxFxVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.linuxFxVersion"></a>

```java
public java.lang.String getLinuxFxVersion();
```

- *Type:* java.lang.String

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.minTlsVersion"></a>

```java
public java.lang.String getMinTlsVersion();
```

- *Type:* java.lang.String

---

##### `preWarmedInstanceCount`<sup>Required</sup> <a name="preWarmedInstanceCount" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```java
public java.lang.Number getPreWarmedInstanceCount();
```

- *Type:* java.lang.Number

---

##### `runtimeScaleMonitoringEnabled`<sup>Required</sup> <a name="runtimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```java
public java.lang.Object getRuntimeScaleMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmType"></a>

```java
public java.lang.String getScmType();
```

- *Type:* java.lang.String

---

##### `scmUseMainIpRestriction`<sup>Required</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```java
public java.lang.Object getScmUseMainIpRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `use32BitWorkerProcess`<sup>Required</sup> <a name="use32BitWorkerProcess" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```java
public java.lang.Object getUse32BitWorkerProcess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnetRouteAllEnabled`<sup>Required</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```java
public java.lang.Object getVnetRouteAllEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `websocketsEnabled`<sup>Required</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.websocketsEnabled"></a>

```java
public java.lang.Object getWebsocketsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.internalValue"></a>

```java
public FunctionAppSlotSiteConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a>

---


### FunctionAppSlotSiteConfigScmIpRestrictionHeadersList <a name="FunctionAppSlotSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList;

new FunctionAppSlotSiteConfigScmIpRestrictionHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.get"></a>

```java
public FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>>

---


### FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference <a name="FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference;

new FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```java
public void resetXAzureFdid()
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```java
public void resetXFdHealthProbe()
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```java
public void resetXForwardedFor()
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```java
public void resetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```java
public java.util.List<java.lang.String> getXAzureFdidInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```java
public java.util.List<java.lang.String> getXForwardedForInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```java
public java.util.List<java.lang.String> getXForwardedHostInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```java
public java.util.List<java.lang.String> getXAzureFdid();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbe();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```java
public java.util.List<java.lang.String> getXForwardedFor();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```java
public java.util.List<java.lang.String> getXForwardedHost();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>

---


### FunctionAppSlotSiteConfigScmIpRestrictionList <a name="FunctionAppSlotSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteConfigScmIpRestrictionList;

new FunctionAppSlotSiteConfigScmIpRestrictionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.get"></a>

```java
public FunctionAppSlotSiteConfigScmIpRestrictionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>>

---


### FunctionAppSlotSiteConfigScmIpRestrictionOutputReference <a name="FunctionAppSlotSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference;

new FunctionAppSlotSiteConfigScmIpRestrictionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<FunctionAppSlotSiteConfigScmIpRestrictionHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```java
public void resetServiceTag()
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```java
public void resetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList">FunctionAppSlotSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```java
public FunctionAppSlotSiteConfigScmIpRestrictionHeadersList getHeaders();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList">FunctionAppSlotSiteConfigScmIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>>

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```java
public java.lang.String getServiceTagInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```java
public java.lang.String getVirtualNetworkSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```java
public java.lang.String getServiceTag();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>

---


### FunctionAppSlotSiteCredentialList <a name="FunctionAppSlotSiteCredentialList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteCredentialList;

new FunctionAppSlotSiteCredentialList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.get"></a>

```java
public FunctionAppSlotSiteCredentialOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FunctionAppSlotSiteCredentialOutputReference <a name="FunctionAppSlotSiteCredentialOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotSiteCredentialOutputReference;

new FunctionAppSlotSiteCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredential">FunctionAppSlotSiteCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.internalValue"></a>

```java
public FunctionAppSlotSiteCredential getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredential">FunctionAppSlotSiteCredential</a>

---


### FunctionAppSlotTimeoutsOutputReference <a name="FunctionAppSlotTimeoutsOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_slot.FunctionAppSlotTimeoutsOutputReference;

new FunctionAppSlotTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a>

---



