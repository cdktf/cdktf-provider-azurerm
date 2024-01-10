# `logicAppStandard` Submodule <a name="`logicAppStandard` Submodule" id="@cdktf/provider-azurerm.logicAppStandard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppStandard <a name="LogicAppStandard" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard azurerm_logic_app_standard}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandard;

LogicAppStandard.Builder.create(Construct scope, java.lang.String id)
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
//  .bundleVersion(java.lang.String)
//  .clientAffinityEnabled(java.lang.Boolean)
//  .clientAffinityEnabled(IResolvable)
//  .clientCertificateMode(java.lang.String)
//  .connectionString(IResolvable)
//  .connectionString(java.util.List<LogicAppStandardConnectionString>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .httpsOnly(java.lang.Boolean)
//  .httpsOnly(IResolvable)
//  .id(java.lang.String)
//  .identity(LogicAppStandardIdentity)
//  .siteConfig(LogicAppStandardSiteConfig)
//  .storageAccountShareName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LogicAppStandardTimeouts)
//  .useExtensionBundle(java.lang.Boolean)
//  .useExtensionBundle(IResolvable)
//  .version(java.lang.String)
//  .virtualNetworkSubnetId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.appServicePlanId">appServicePlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#app_service_plan_id LogicAppStandard#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#location LogicAppStandard#location}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#resource_group_name LogicAppStandard#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#storage_account_access_key LogicAppStandard#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#storage_account_name LogicAppStandard#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.appSettings">appSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#app_settings LogicAppStandard#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.bundleVersion">bundleVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#bundle_version LogicAppStandard#bundle_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.clientAffinityEnabled">clientAffinityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#client_affinity_enabled LogicAppStandard#client_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.clientCertificateMode">clientCertificateMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#client_certificate_mode LogicAppStandard#client_certificate_mode}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.connectionString">connectionString</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>></code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#enabled LogicAppStandard#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#https_only LogicAppStandard#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#id LogicAppStandard#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.storageAccountShareName">storageAccountShareName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#storage_account_share_name LogicAppStandard#storage_account_share_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#tags LogicAppStandard#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.useExtensionBundle">useExtensionBundle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#use_extension_bundle LogicAppStandard#use_extension_bundle}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#version LogicAppStandard#version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appServicePlanId`<sup>Required</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.appServicePlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#app_service_plan_id LogicAppStandard#app_service_plan_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#location LogicAppStandard#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#name LogicAppStandard#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#resource_group_name LogicAppStandard#resource_group_name}.

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#storage_account_access_key LogicAppStandard#storage_account_access_key}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.storageAccountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#storage_account_name LogicAppStandard#storage_account_name}.

---

##### `appSettings`<sup>Optional</sup> <a name="appSettings" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.appSettings"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#app_settings LogicAppStandard#app_settings}.

---

##### `bundleVersion`<sup>Optional</sup> <a name="bundleVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.bundleVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#bundle_version LogicAppStandard#bundle_version}.

---

##### `clientAffinityEnabled`<sup>Optional</sup> <a name="clientAffinityEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.clientAffinityEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#client_affinity_enabled LogicAppStandard#client_affinity_enabled}.

---

##### `clientCertificateMode`<sup>Optional</sup> <a name="clientCertificateMode" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.clientCertificateMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#client_certificate_mode LogicAppStandard#client_certificate_mode}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.connectionString"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>>

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#connection_string LogicAppStandard#connection_string}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#enabled LogicAppStandard#enabled}.

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.httpsOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#https_only LogicAppStandard#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#id LogicAppStandard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#identity LogicAppStandard#identity}

---

##### `siteConfig`<sup>Optional</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.siteConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#site_config LogicAppStandard#site_config}

---

##### `storageAccountShareName`<sup>Optional</sup> <a name="storageAccountShareName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.storageAccountShareName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#storage_account_share_name LogicAppStandard#storage_account_share_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#tags LogicAppStandard#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#timeouts LogicAppStandard#timeouts}

---

##### `useExtensionBundle`<sup>Optional</sup> <a name="useExtensionBundle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.useExtensionBundle"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#use_extension_bundle LogicAppStandard#use_extension_bundle}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#version LogicAppStandard#version}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.virtualNetworkSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putConnectionString">putConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig">putSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetAppSettings">resetAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetBundleVersion">resetBundleVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetClientAffinityEnabled">resetClientAffinityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetClientCertificateMode">resetClientCertificateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetHttpsOnly">resetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetSiteConfig">resetSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetStorageAccountShareName">resetStorageAccountShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetUseExtensionBundle">resetUseExtensionBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionString` <a name="putConnectionString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putConnectionString"></a>

```java
public void putConnectionString(IResolvable OR java.util.List<LogicAppStandardConnectionString> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putConnectionString.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putIdentity"></a>

```java
public void putIdentity(LogicAppStandardIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a>

---

##### `putSiteConfig` <a name="putSiteConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig"></a>

```java
public void putSiteConfig(LogicAppStandardSiteConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putTimeouts"></a>

```java
public void putTimeouts(LogicAppStandardTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a>

---

##### `resetAppSettings` <a name="resetAppSettings" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetAppSettings"></a>

```java
public void resetAppSettings()
```

##### `resetBundleVersion` <a name="resetBundleVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetBundleVersion"></a>

```java
public void resetBundleVersion()
```

##### `resetClientAffinityEnabled` <a name="resetClientAffinityEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetClientAffinityEnabled"></a>

```java
public void resetClientAffinityEnabled()
```

##### `resetClientCertificateMode` <a name="resetClientCertificateMode" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetClientCertificateMode"></a>

```java
public void resetClientCertificateMode()
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetConnectionString"></a>

```java
public void resetConnectionString()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetHttpsOnly` <a name="resetHttpsOnly" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetHttpsOnly"></a>

```java
public void resetHttpsOnly()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetSiteConfig` <a name="resetSiteConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetSiteConfig"></a>

```java
public void resetSiteConfig()
```

##### `resetStorageAccountShareName` <a name="resetStorageAccountShareName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetStorageAccountShareName"></a>

```java
public void resetStorageAccountShareName()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUseExtensionBundle` <a name="resetUseExtensionBundle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetUseExtensionBundle"></a>

```java
public void resetUseExtensionBundle()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVersion"></a>

```java
public void resetVersion()
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVirtualNetworkSubnetId"></a>

```java
public void resetVirtualNetworkSubnetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogicAppStandard resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandard;

LogicAppStandard.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandard;

LogicAppStandard.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandard;

LogicAppStandard.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandard;

LogicAppStandard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogicAppStandard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LogicAppStandard resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogicAppStandard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogicAppStandard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LogicAppStandard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connectionString">connectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList">LogicAppStandardConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.customDomainVerificationId">customDomainVerificationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.defaultHostname">defaultHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference">LogicAppStandardIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.outboundIpAddresses">outboundIpAddresses</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.possibleOutboundIpAddresses">possibleOutboundIpAddresses</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference">LogicAppStandardSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteCredential">siteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList">LogicAppStandardSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference">LogicAppStandardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appServicePlanIdInput">appServicePlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appSettingsInput">appSettingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.bundleVersionInput">bundleVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientAffinityEnabledInput">clientAffinityEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientCertificateModeInput">clientCertificateModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connectionStringInput">connectionStringInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.httpsOnlyInput">httpsOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteConfigInput">siteConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountShareNameInput">storageAccountShareNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.useExtensionBundleInput">useExtensionBundleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appServicePlanId">appServicePlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appSettings">appSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.bundleVersion">bundleVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientAffinityEnabled">clientAffinityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientCertificateMode">clientCertificateMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountShareName">storageAccountShareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.useExtensionBundle">useExtensionBundle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connectionString"></a>

```java
public LogicAppStandardConnectionStringList getConnectionString();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList">LogicAppStandardConnectionStringList</a>

---

##### `customDomainVerificationId`<sup>Required</sup> <a name="customDomainVerificationId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.customDomainVerificationId"></a>

```java
public java.lang.String getCustomDomainVerificationId();
```

- *Type:* java.lang.String

---

##### `defaultHostname`<sup>Required</sup> <a name="defaultHostname" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.defaultHostname"></a>

```java
public java.lang.String getDefaultHostname();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.identity"></a>

```java
public LogicAppStandardIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference">LogicAppStandardIdentityOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `outboundIpAddresses`<sup>Required</sup> <a name="outboundIpAddresses" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.outboundIpAddresses"></a>

```java
public java.lang.String getOutboundIpAddresses();
```

- *Type:* java.lang.String

---

##### `possibleOutboundIpAddresses`<sup>Required</sup> <a name="possibleOutboundIpAddresses" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.possibleOutboundIpAddresses"></a>

```java
public java.lang.String getPossibleOutboundIpAddresses();
```

- *Type:* java.lang.String

---

##### `siteConfig`<sup>Required</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteConfig"></a>

```java
public LogicAppStandardSiteConfigOutputReference getSiteConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference">LogicAppStandardSiteConfigOutputReference</a>

---

##### `siteCredential`<sup>Required</sup> <a name="siteCredential" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteCredential"></a>

```java
public LogicAppStandardSiteCredentialList getSiteCredential();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList">LogicAppStandardSiteCredentialList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.timeouts"></a>

```java
public LogicAppStandardTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference">LogicAppStandardTimeoutsOutputReference</a>

---

##### `appServicePlanIdInput`<sup>Optional</sup> <a name="appServicePlanIdInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appServicePlanIdInput"></a>

```java
public java.lang.String getAppServicePlanIdInput();
```

- *Type:* java.lang.String

---

##### `appSettingsInput`<sup>Optional</sup> <a name="appSettingsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appSettingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAppSettingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `bundleVersionInput`<sup>Optional</sup> <a name="bundleVersionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.bundleVersionInput"></a>

```java
public java.lang.String getBundleVersionInput();
```

- *Type:* java.lang.String

---

##### `clientAffinityEnabledInput`<sup>Optional</sup> <a name="clientAffinityEnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientAffinityEnabledInput"></a>

```java
public java.lang.Object getClientAffinityEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientCertificateModeInput`<sup>Optional</sup> <a name="clientCertificateModeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientCertificateModeInput"></a>

```java
public java.lang.String getClientCertificateModeInput();
```

- *Type:* java.lang.String

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connectionStringInput"></a>

```java
public java.lang.Object getConnectionStringInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpsOnlyInput`<sup>Optional</sup> <a name="httpsOnlyInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.httpsOnlyInput"></a>

```java
public java.lang.Object getHttpsOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.identityInput"></a>

```java
public LogicAppStandardIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `siteConfigInput`<sup>Optional</sup> <a name="siteConfigInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteConfigInput"></a>

```java
public LogicAppStandardSiteConfig getSiteConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a>

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountAccessKeyInput"></a>

```java
public java.lang.String getStorageAccountAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountNameInput"></a>

```java
public java.lang.String getStorageAccountNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountShareNameInput`<sup>Optional</sup> <a name="storageAccountShareNameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountShareNameInput"></a>

```java
public java.lang.String getStorageAccountShareNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a>

---

##### `useExtensionBundleInput`<sup>Optional</sup> <a name="useExtensionBundleInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.useExtensionBundleInput"></a>

```java
public java.lang.Object getUseExtensionBundleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.virtualNetworkSubnetIdInput"></a>

```java
public java.lang.String getVirtualNetworkSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `appServicePlanId`<sup>Required</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appServicePlanId"></a>

```java
public java.lang.String getAppServicePlanId();
```

- *Type:* java.lang.String

---

##### `appSettings`<sup>Required</sup> <a name="appSettings" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAppSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `bundleVersion`<sup>Required</sup> <a name="bundleVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.bundleVersion"></a>

```java
public java.lang.String getBundleVersion();
```

- *Type:* java.lang.String

---

##### `clientAffinityEnabled`<sup>Required</sup> <a name="clientAffinityEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientAffinityEnabled"></a>

```java
public java.lang.Object getClientAffinityEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientCertificateMode`<sup>Required</sup> <a name="clientCertificateMode" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientCertificateMode"></a>

```java
public java.lang.String getClientCertificateMode();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpsOnly`<sup>Required</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.httpsOnly"></a>

```java
public java.lang.Object getHttpsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

---

##### `storageAccountShareName`<sup>Required</sup> <a name="storageAccountShareName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountShareName"></a>

```java
public java.lang.String getStorageAccountShareName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useExtensionBundle`<sup>Required</sup> <a name="useExtensionBundle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.useExtensionBundle"></a>

```java
public java.lang.Object getUseExtensionBundle();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppStandardConfig <a name="LogicAppStandardConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardConfig;

LogicAppStandardConfig.builder()
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
//  .bundleVersion(java.lang.String)
//  .clientAffinityEnabled(java.lang.Boolean)
//  .clientAffinityEnabled(IResolvable)
//  .clientCertificateMode(java.lang.String)
//  .connectionString(IResolvable)
//  .connectionString(java.util.List<LogicAppStandardConnectionString>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .httpsOnly(java.lang.Boolean)
//  .httpsOnly(IResolvable)
//  .id(java.lang.String)
//  .identity(LogicAppStandardIdentity)
//  .siteConfig(LogicAppStandardSiteConfig)
//  .storageAccountShareName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LogicAppStandardTimeouts)
//  .useExtensionBundle(java.lang.Boolean)
//  .useExtensionBundle(IResolvable)
//  .version(java.lang.String)
//  .virtualNetworkSubnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.appServicePlanId">appServicePlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#app_service_plan_id LogicAppStandard#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#location LogicAppStandard#location}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#resource_group_name LogicAppStandard#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#storage_account_access_key LogicAppStandard#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#storage_account_name LogicAppStandard#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.appSettings">appSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#app_settings LogicAppStandard#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.bundleVersion">bundleVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#bundle_version LogicAppStandard#bundle_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.clientAffinityEnabled">clientAffinityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#client_affinity_enabled LogicAppStandard#client_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.clientCertificateMode">clientCertificateMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#client_certificate_mode LogicAppStandard#client_certificate_mode}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.connectionString">connectionString</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>></code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#enabled LogicAppStandard#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#https_only LogicAppStandard#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#id LogicAppStandard#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountShareName">storageAccountShareName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#storage_account_share_name LogicAppStandard#storage_account_share_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#tags LogicAppStandard#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.useExtensionBundle">useExtensionBundle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#use_extension_bundle LogicAppStandard#use_extension_bundle}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#version LogicAppStandard#version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appServicePlanId`<sup>Required</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.appServicePlanId"></a>

```java
public java.lang.String getAppServicePlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#app_service_plan_id LogicAppStandard#app_service_plan_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#location LogicAppStandard#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#name LogicAppStandard#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#resource_group_name LogicAppStandard#resource_group_name}.

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#storage_account_access_key LogicAppStandard#storage_account_access_key}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#storage_account_name LogicAppStandard#storage_account_name}.

---

##### `appSettings`<sup>Optional</sup> <a name="appSettings" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.appSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAppSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#app_settings LogicAppStandard#app_settings}.

---

##### `bundleVersion`<sup>Optional</sup> <a name="bundleVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.bundleVersion"></a>

```java
public java.lang.String getBundleVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#bundle_version LogicAppStandard#bundle_version}.

---

##### `clientAffinityEnabled`<sup>Optional</sup> <a name="clientAffinityEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.clientAffinityEnabled"></a>

```java
public java.lang.Object getClientAffinityEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#client_affinity_enabled LogicAppStandard#client_affinity_enabled}.

---

##### `clientCertificateMode`<sup>Optional</sup> <a name="clientCertificateMode" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.clientCertificateMode"></a>

```java
public java.lang.String getClientCertificateMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#client_certificate_mode LogicAppStandard#client_certificate_mode}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.connectionString"></a>

```java
public java.lang.Object getConnectionString();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>>

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#connection_string LogicAppStandard#connection_string}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#enabled LogicAppStandard#enabled}.

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.httpsOnly"></a>

```java
public java.lang.Object getHttpsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#https_only LogicAppStandard#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#id LogicAppStandard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.identity"></a>

```java
public LogicAppStandardIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#identity LogicAppStandard#identity}

---

##### `siteConfig`<sup>Optional</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.siteConfig"></a>

```java
public LogicAppStandardSiteConfig getSiteConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#site_config LogicAppStandard#site_config}

---

##### `storageAccountShareName`<sup>Optional</sup> <a name="storageAccountShareName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountShareName"></a>

```java
public java.lang.String getStorageAccountShareName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#storage_account_share_name LogicAppStandard#storage_account_share_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#tags LogicAppStandard#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.timeouts"></a>

```java
public LogicAppStandardTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#timeouts LogicAppStandard#timeouts}

---

##### `useExtensionBundle`<sup>Optional</sup> <a name="useExtensionBundle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.useExtensionBundle"></a>

```java
public java.lang.Object getUseExtensionBundle();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#use_extension_bundle LogicAppStandard#use_extension_bundle}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#version LogicAppStandard#version}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}.

---

### LogicAppStandardConnectionString <a name="LogicAppStandardConnectionString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardConnectionString;

LogicAppStandardConnectionString.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#type LogicAppStandard#type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#value LogicAppStandard#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#name LogicAppStandard#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#type LogicAppStandard#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#value LogicAppStandard#value}.

---

### LogicAppStandardIdentity <a name="LogicAppStandardIdentity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardIdentity;

LogicAppStandardIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#type LogicAppStandard#type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#identity_ids LogicAppStandard#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#type LogicAppStandard#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#identity_ids LogicAppStandard#identity_ids}.

---

### LogicAppStandardSiteConfig <a name="LogicAppStandardSiteConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteConfig;

LogicAppStandardSiteConfig.builder()
//  .alwaysOn(java.lang.Boolean)
//  .alwaysOn(IResolvable)
//  .appScaleLimit(java.lang.Number)
//  .cors(LogicAppStandardSiteConfigCors)
//  .dotnetFrameworkVersion(java.lang.String)
//  .elasticInstanceMinimum(java.lang.Number)
//  .ftpsState(java.lang.String)
//  .healthCheckPath(java.lang.String)
//  .http2Enabled(java.lang.Boolean)
//  .http2Enabled(IResolvable)
//  .ipRestriction(IResolvable)
//  .ipRestriction(java.util.List<LogicAppStandardSiteConfigIpRestriction>)
//  .linuxFxVersion(java.lang.String)
//  .minTlsVersion(java.lang.String)
//  .preWarmedInstanceCount(java.lang.Number)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .runtimeScaleMonitoringEnabled(java.lang.Boolean)
//  .runtimeScaleMonitoringEnabled(IResolvable)
//  .scmIpRestriction(IResolvable)
//  .scmIpRestriction(java.util.List<LogicAppStandardSiteConfigScmIpRestriction>)
//  .scmMinTlsVersion(java.lang.String)
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
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.alwaysOn">alwaysOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#always_on LogicAppStandard#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.appScaleLimit">appScaleLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#app_scale_limit LogicAppStandard#app_scale_limit}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.dotnetFrameworkVersion">dotnetFrameworkVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#dotnet_framework_version LogicAppStandard#dotnet_framework_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.elasticInstanceMinimum">elasticInstanceMinimum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#elastic_instance_minimum LogicAppStandard#elastic_instance_minimum}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.ftpsState">ftpsState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#ftps_state LogicAppStandard#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#health_check_path LogicAppStandard#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.http2Enabled">http2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#http2_enabled LogicAppStandard#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.ipRestriction">ipRestriction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#ip_restriction LogicAppStandard#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.linuxFxVersion">linuxFxVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#linux_fx_version LogicAppStandard#linux_fx_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#min_tls_version LogicAppStandard#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.preWarmedInstanceCount">preWarmedInstanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#pre_warmed_instance_count LogicAppStandard#pre_warmed_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#public_network_access_enabled LogicAppStandard#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.runtimeScaleMonitoringEnabled">runtimeScaleMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#runtime_scale_monitoring_enabled LogicAppStandard#runtime_scale_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmIpRestriction">scmIpRestriction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#scm_ip_restriction LogicAppStandard#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmMinTlsVersion">scmMinTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#scm_min_tls_version LogicAppStandard#scm_min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmType">scmType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#scm_type LogicAppStandard#scm_type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#scm_use_main_ip_restriction LogicAppStandard#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.use32BitWorkerProcess">use32BitWorkerProcess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#use_32_bit_worker_process LogicAppStandard#use_32_bit_worker_process}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#vnet_route_all_enabled LogicAppStandard#vnet_route_all_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.websocketsEnabled">websocketsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#websockets_enabled LogicAppStandard#websockets_enabled}. |

---

##### `alwaysOn`<sup>Optional</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.alwaysOn"></a>

```java
public java.lang.Object getAlwaysOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#always_on LogicAppStandard#always_on}.

---

##### `appScaleLimit`<sup>Optional</sup> <a name="appScaleLimit" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.appScaleLimit"></a>

```java
public java.lang.Number getAppScaleLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#app_scale_limit LogicAppStandard#app_scale_limit}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.cors"></a>

```java
public LogicAppStandardSiteConfigCors getCors();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#cors LogicAppStandard#cors}

---

##### `dotnetFrameworkVersion`<sup>Optional</sup> <a name="dotnetFrameworkVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.dotnetFrameworkVersion"></a>

```java
public java.lang.String getDotnetFrameworkVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#dotnet_framework_version LogicAppStandard#dotnet_framework_version}.

---

##### `elasticInstanceMinimum`<sup>Optional</sup> <a name="elasticInstanceMinimum" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.elasticInstanceMinimum"></a>

```java
public java.lang.Number getElasticInstanceMinimum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#elastic_instance_minimum LogicAppStandard#elastic_instance_minimum}.

---

##### `ftpsState`<sup>Optional</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.ftpsState"></a>

```java
public java.lang.String getFtpsState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#ftps_state LogicAppStandard#ftps_state}.

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#health_check_path LogicAppStandard#health_check_path}.

---

##### `http2Enabled`<sup>Optional</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.http2Enabled"></a>

```java
public java.lang.Object getHttp2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#http2_enabled LogicAppStandard#http2_enabled}.

---

##### `ipRestriction`<sup>Optional</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.ipRestriction"></a>

```java
public java.lang.Object getIpRestriction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#ip_restriction LogicAppStandard#ip_restriction}.

---

##### `linuxFxVersion`<sup>Optional</sup> <a name="linuxFxVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.linuxFxVersion"></a>

```java
public java.lang.String getLinuxFxVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#linux_fx_version LogicAppStandard#linux_fx_version}.

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.minTlsVersion"></a>

```java
public java.lang.String getMinTlsVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#min_tls_version LogicAppStandard#min_tls_version}.

---

##### `preWarmedInstanceCount`<sup>Optional</sup> <a name="preWarmedInstanceCount" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.preWarmedInstanceCount"></a>

```java
public java.lang.Number getPreWarmedInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#pre_warmed_instance_count LogicAppStandard#pre_warmed_instance_count}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#public_network_access_enabled LogicAppStandard#public_network_access_enabled}.

---

##### `runtimeScaleMonitoringEnabled`<sup>Optional</sup> <a name="runtimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.runtimeScaleMonitoringEnabled"></a>

```java
public java.lang.Object getRuntimeScaleMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#runtime_scale_monitoring_enabled LogicAppStandard#runtime_scale_monitoring_enabled}.

---

##### `scmIpRestriction`<sup>Optional</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmIpRestriction"></a>

```java
public java.lang.Object getScmIpRestriction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#scm_ip_restriction LogicAppStandard#scm_ip_restriction}.

---

##### `scmMinTlsVersion`<sup>Optional</sup> <a name="scmMinTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmMinTlsVersion"></a>

```java
public java.lang.String getScmMinTlsVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#scm_min_tls_version LogicAppStandard#scm_min_tls_version}.

---

##### `scmType`<sup>Optional</sup> <a name="scmType" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmType"></a>

```java
public java.lang.String getScmType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#scm_type LogicAppStandard#scm_type}.

---

##### `scmUseMainIpRestriction`<sup>Optional</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmUseMainIpRestriction"></a>

```java
public java.lang.Object getScmUseMainIpRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#scm_use_main_ip_restriction LogicAppStandard#scm_use_main_ip_restriction}.

---

##### `use32BitWorkerProcess`<sup>Optional</sup> <a name="use32BitWorkerProcess" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.use32BitWorkerProcess"></a>

```java
public java.lang.Object getUse32BitWorkerProcess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#use_32_bit_worker_process LogicAppStandard#use_32_bit_worker_process}.

---

##### `vnetRouteAllEnabled`<sup>Optional</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.vnetRouteAllEnabled"></a>

```java
public java.lang.Object getVnetRouteAllEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#vnet_route_all_enabled LogicAppStandard#vnet_route_all_enabled}.

---

##### `websocketsEnabled`<sup>Optional</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.websocketsEnabled"></a>

```java
public java.lang.Object getWebsocketsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#websockets_enabled LogicAppStandard#websockets_enabled}.

---

### LogicAppStandardSiteConfigCors <a name="LogicAppStandardSiteConfigCors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteConfigCors;

LogicAppStandardSiteConfigCors.builder()
    .allowedOrigins(java.util.List<java.lang.String>)
//  .supportCredentials(java.lang.Boolean)
//  .supportCredentials(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#allowed_origins LogicAppStandard#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.property.supportCredentials">supportCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#support_credentials LogicAppStandard#support_credentials}. |

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#allowed_origins LogicAppStandard#allowed_origins}.

---

##### `supportCredentials`<sup>Optional</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.property.supportCredentials"></a>

```java
public java.lang.Object getSupportCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#support_credentials LogicAppStandard#support_credentials}.

---

### LogicAppStandardSiteConfigIpRestriction <a name="LogicAppStandardSiteConfigIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteConfigIpRestriction;

LogicAppStandardSiteConfigIpRestriction.builder()
//  .action(java.lang.String)
//  .headers(IResolvable)
//  .headers(java.util.List<LogicAppStandardSiteConfigIpRestrictionHeaders>)
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
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#action LogicAppStandard#action}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#headers LogicAppStandard#headers}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#ip_address LogicAppStandard#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#priority LogicAppStandard#priority}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.serviceTag">serviceTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#service_tag LogicAppStandard#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#action LogicAppStandard#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#headers LogicAppStandard#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#ip_address LogicAppStandard#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#name LogicAppStandard#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#priority LogicAppStandard#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.serviceTag"></a>

```java
public java.lang.String getServiceTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#service_tag LogicAppStandard#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}.

---

### LogicAppStandardSiteConfigIpRestrictionHeaders <a name="LogicAppStandardSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteConfigIpRestrictionHeaders;

LogicAppStandardSiteConfigIpRestrictionHeaders.builder()
//  .xAzureFdid(java.util.List<java.lang.String>)
//  .xFdHealthProbe(java.util.List<java.lang.String>)
//  .xForwardedFor(java.util.List<java.lang.String>)
//  .xForwardedHost(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#x_azure_fdid LogicAppStandard#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#x_fd_health_probe LogicAppStandard#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#x_forwarded_for LogicAppStandard#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#x_forwarded_host LogicAppStandard#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```java
public java.util.List<java.lang.String> getXAzureFdid();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#x_azure_fdid LogicAppStandard#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbe();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#x_fd_health_probe LogicAppStandard#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```java
public java.util.List<java.lang.String> getXForwardedFor();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#x_forwarded_for LogicAppStandard#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```java
public java.util.List<java.lang.String> getXForwardedHost();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#x_forwarded_host LogicAppStandard#x_forwarded_host}.

---

### LogicAppStandardSiteConfigScmIpRestriction <a name="LogicAppStandardSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteConfigScmIpRestriction;

LogicAppStandardSiteConfigScmIpRestriction.builder()
//  .action(java.lang.String)
//  .headers(IResolvable)
//  .headers(java.util.List<LogicAppStandardSiteConfigScmIpRestrictionHeaders>)
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
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#action LogicAppStandard#action}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#headers LogicAppStandard#headers}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#ip_address LogicAppStandard#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#priority LogicAppStandard#priority}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.serviceTag">serviceTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#service_tag LogicAppStandard#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#action LogicAppStandard#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#headers LogicAppStandard#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#ip_address LogicAppStandard#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#name LogicAppStandard#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#priority LogicAppStandard#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.serviceTag"></a>

```java
public java.lang.String getServiceTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#service_tag LogicAppStandard#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}.

---

### LogicAppStandardSiteConfigScmIpRestrictionHeaders <a name="LogicAppStandardSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteConfigScmIpRestrictionHeaders;

LogicAppStandardSiteConfigScmIpRestrictionHeaders.builder()
//  .xAzureFdid(java.util.List<java.lang.String>)
//  .xFdHealthProbe(java.util.List<java.lang.String>)
//  .xForwardedFor(java.util.List<java.lang.String>)
//  .xForwardedHost(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#x_azure_fdid LogicAppStandard#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#x_fd_health_probe LogicAppStandard#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#x_forwarded_for LogicAppStandard#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#x_forwarded_host LogicAppStandard#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```java
public java.util.List<java.lang.String> getXAzureFdid();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#x_azure_fdid LogicAppStandard#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbe();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#x_fd_health_probe LogicAppStandard#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```java
public java.util.List<java.lang.String> getXForwardedFor();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#x_forwarded_for LogicAppStandard#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```java
public java.util.List<java.lang.String> getXForwardedHost();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#x_forwarded_host LogicAppStandard#x_forwarded_host}.

---

### LogicAppStandardSiteCredential <a name="LogicAppStandardSiteCredential" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteCredential;

LogicAppStandardSiteCredential.builder()
    .build();
```


### LogicAppStandardTimeouts <a name="LogicAppStandardTimeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardTimeouts;

LogicAppStandardTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#create LogicAppStandard#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#delete LogicAppStandard#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#read LogicAppStandard#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#update LogicAppStandard#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#create LogicAppStandard#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#delete LogicAppStandard#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#read LogicAppStandard#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/logic_app_standard#update LogicAppStandard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppStandardConnectionStringList <a name="LogicAppStandardConnectionStringList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardConnectionStringList;

new LogicAppStandardConnectionStringList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.get"></a>

```java
public LogicAppStandardConnectionStringOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>>

---


### LogicAppStandardConnectionStringOutputReference <a name="LogicAppStandardConnectionStringOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardConnectionStringOutputReference;

new LogicAppStandardConnectionStringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>

---


### LogicAppStandardIdentityOutputReference <a name="LogicAppStandardIdentityOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardIdentityOutputReference;

new LogicAppStandardIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.internalValue"></a>

```java
public LogicAppStandardIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a>

---


### LogicAppStandardSiteConfigCorsOutputReference <a name="LogicAppStandardSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteConfigCorsOutputReference;

new LogicAppStandardSiteConfigCorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resetSupportCredentials">resetSupportCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSupportCredentials` <a name="resetSupportCredentials" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```java
public void resetSupportCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.supportCredentialsInput">supportCredentialsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.supportCredentials">supportCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportCredentialsInput`<sup>Optional</sup> <a name="supportCredentialsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```java
public java.lang.Object getSupportCredentialsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportCredentials`<sup>Required</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.supportCredentials"></a>

```java
public java.lang.Object getSupportCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.internalValue"></a>

```java
public LogicAppStandardSiteConfigCors getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a>

---


### LogicAppStandardSiteConfigIpRestrictionHeadersList <a name="LogicAppStandardSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteConfigIpRestrictionHeadersList;

new LogicAppStandardSiteConfigIpRestrictionHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.get"></a>

```java
public LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a>>

---


### LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference <a name="LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference;

new LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```java
public void resetXAzureFdid()
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```java
public void resetXFdHealthProbe()
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```java
public void resetXForwardedFor()
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```java
public void resetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```java
public java.util.List<java.lang.String> getXAzureFdidInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```java
public java.util.List<java.lang.String> getXForwardedForInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```java
public java.util.List<java.lang.String> getXForwardedHostInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```java
public java.util.List<java.lang.String> getXAzureFdid();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbe();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```java
public java.util.List<java.lang.String> getXForwardedFor();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```java
public java.util.List<java.lang.String> getXForwardedHost();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a>

---


### LogicAppStandardSiteConfigIpRestrictionList <a name="LogicAppStandardSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteConfigIpRestrictionList;

new LogicAppStandardSiteConfigIpRestrictionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.get"></a>

```java
public LogicAppStandardSiteConfigIpRestrictionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>>

---


### LogicAppStandardSiteConfigIpRestrictionOutputReference <a name="LogicAppStandardSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteConfigIpRestrictionOutputReference;

new LogicAppStandardSiteConfigIpRestrictionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<LogicAppStandardSiteConfigIpRestrictionHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```java
public void resetServiceTag()
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```java
public void resetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList">LogicAppStandardSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.headers"></a>

```java
public LogicAppStandardSiteConfigIpRestrictionHeadersList getHeaders();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList">LogicAppStandardSiteConfigIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a>>

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```java
public java.lang.String getServiceTagInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```java
public java.lang.String getVirtualNetworkSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```java
public java.lang.String getServiceTag();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>

---


### LogicAppStandardSiteConfigOutputReference <a name="LogicAppStandardSiteConfigOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteConfigOutputReference;

new LogicAppStandardSiteConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putIpRestriction">putIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putScmIpRestriction">putScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetAlwaysOn">resetAlwaysOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetAppScaleLimit">resetAppScaleLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetDotnetFrameworkVersion">resetDotnetFrameworkVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetElasticInstanceMinimum">resetElasticInstanceMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetFtpsState">resetFtpsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetHttp2Enabled">resetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetIpRestriction">resetIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetLinuxFxVersion">resetLinuxFxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetPreWarmedInstanceCount">resetPreWarmedInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled">resetRuntimeScaleMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmIpRestriction">resetScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmMinTlsVersion">resetScmMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmType">resetScmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmUseMainIpRestriction">resetScmUseMainIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetUse32BitWorkerProcess">resetUse32BitWorkerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetVnetRouteAllEnabled">resetVnetRouteAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetWebsocketsEnabled">resetWebsocketsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCors` <a name="putCors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putCors"></a>

```java
public void putCors(LogicAppStandardSiteConfigCors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a>

---

##### `putIpRestriction` <a name="putIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putIpRestriction"></a>

```java
public void putIpRestriction(IResolvable OR java.util.List<LogicAppStandardSiteConfigIpRestriction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>>

---

##### `putScmIpRestriction` <a name="putScmIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putScmIpRestriction"></a>

```java
public void putScmIpRestriction(IResolvable OR java.util.List<LogicAppStandardSiteConfigScmIpRestriction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>>

---

##### `resetAlwaysOn` <a name="resetAlwaysOn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetAlwaysOn"></a>

```java
public void resetAlwaysOn()
```

##### `resetAppScaleLimit` <a name="resetAppScaleLimit" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetAppScaleLimit"></a>

```java
public void resetAppScaleLimit()
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetCors"></a>

```java
public void resetCors()
```

##### `resetDotnetFrameworkVersion` <a name="resetDotnetFrameworkVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetDotnetFrameworkVersion"></a>

```java
public void resetDotnetFrameworkVersion()
```

##### `resetElasticInstanceMinimum` <a name="resetElasticInstanceMinimum" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetElasticInstanceMinimum"></a>

```java
public void resetElasticInstanceMinimum()
```

##### `resetFtpsState` <a name="resetFtpsState" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetFtpsState"></a>

```java
public void resetFtpsState()
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetHealthCheckPath"></a>

```java
public void resetHealthCheckPath()
```

##### `resetHttp2Enabled` <a name="resetHttp2Enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetHttp2Enabled"></a>

```java
public void resetHttp2Enabled()
```

##### `resetIpRestriction` <a name="resetIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetIpRestriction"></a>

```java
public void resetIpRestriction()
```

##### `resetLinuxFxVersion` <a name="resetLinuxFxVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetLinuxFxVersion"></a>

```java
public void resetLinuxFxVersion()
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetMinTlsVersion"></a>

```java
public void resetMinTlsVersion()
```

##### `resetPreWarmedInstanceCount` <a name="resetPreWarmedInstanceCount" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetPreWarmedInstanceCount"></a>

```java
public void resetPreWarmedInstanceCount()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetRuntimeScaleMonitoringEnabled` <a name="resetRuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled"></a>

```java
public void resetRuntimeScaleMonitoringEnabled()
```

##### `resetScmIpRestriction` <a name="resetScmIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmIpRestriction"></a>

```java
public void resetScmIpRestriction()
```

##### `resetScmMinTlsVersion` <a name="resetScmMinTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmMinTlsVersion"></a>

```java
public void resetScmMinTlsVersion()
```

##### `resetScmType` <a name="resetScmType" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmType"></a>

```java
public void resetScmType()
```

##### `resetScmUseMainIpRestriction` <a name="resetScmUseMainIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```java
public void resetScmUseMainIpRestriction()
```

##### `resetUse32BitWorkerProcess` <a name="resetUse32BitWorkerProcess" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetUse32BitWorkerProcess"></a>

```java
public void resetUse32BitWorkerProcess()
```

##### `resetVnetRouteAllEnabled` <a name="resetVnetRouteAllEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```java
public void resetVnetRouteAllEnabled()
```

##### `resetWebsocketsEnabled` <a name="resetWebsocketsEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```java
public void resetWebsocketsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.autoSwapSlotName">autoSwapSlotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference">LogicAppStandardSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ipRestriction">ipRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList">LogicAppStandardSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmIpRestriction">scmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList">LogicAppStandardSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.alwaysOnInput">alwaysOnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.appScaleLimitInput">appScaleLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.corsInput">corsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersionInput">dotnetFrameworkVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimumInput">elasticInstanceMinimumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ftpsStateInput">ftpsStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.http2EnabledInput">http2EnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ipRestrictionInput">ipRestrictionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.linuxFxVersionInput">linuxFxVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCountInput">preWarmedInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput">runtimeScaleMonitoringEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmIpRestrictionInput">scmIpRestrictionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersionInput">scmMinTlsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmTypeInput">scmTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">scmUseMainIpRestrictionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcessInput">use32BitWorkerProcessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabledInput">vnetRouteAllEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.websocketsEnabledInput">websocketsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.alwaysOn">alwaysOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.appScaleLimit">appScaleLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersion">dotnetFrameworkVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimum">elasticInstanceMinimum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ftpsState">ftpsState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.http2Enabled">http2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.linuxFxVersion">linuxFxVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCount">preWarmedInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">runtimeScaleMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersion">scmMinTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmType">scmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcess">use32BitWorkerProcess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.websocketsEnabled">websocketsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoSwapSlotName`<sup>Required</sup> <a name="autoSwapSlotName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.autoSwapSlotName"></a>

```java
public java.lang.String getAutoSwapSlotName();
```

- *Type:* java.lang.String

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.cors"></a>

```java
public LogicAppStandardSiteConfigCorsOutputReference getCors();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference">LogicAppStandardSiteConfigCorsOutputReference</a>

---

##### `ipRestriction`<sup>Required</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ipRestriction"></a>

```java
public LogicAppStandardSiteConfigIpRestrictionList getIpRestriction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList">LogicAppStandardSiteConfigIpRestrictionList</a>

---

##### `scmIpRestriction`<sup>Required</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmIpRestriction"></a>

```java
public LogicAppStandardSiteConfigScmIpRestrictionList getScmIpRestriction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList">LogicAppStandardSiteConfigScmIpRestrictionList</a>

---

##### `alwaysOnInput`<sup>Optional</sup> <a name="alwaysOnInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.alwaysOnInput"></a>

```java
public java.lang.Object getAlwaysOnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `appScaleLimitInput`<sup>Optional</sup> <a name="appScaleLimitInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.appScaleLimitInput"></a>

```java
public java.lang.Number getAppScaleLimitInput();
```

- *Type:* java.lang.Number

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.corsInput"></a>

```java
public LogicAppStandardSiteConfigCors getCorsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a>

---

##### `dotnetFrameworkVersionInput`<sup>Optional</sup> <a name="dotnetFrameworkVersionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersionInput"></a>

```java
public java.lang.String getDotnetFrameworkVersionInput();
```

- *Type:* java.lang.String

---

##### `elasticInstanceMinimumInput`<sup>Optional</sup> <a name="elasticInstanceMinimumInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimumInput"></a>

```java
public java.lang.Number getElasticInstanceMinimumInput();
```

- *Type:* java.lang.Number

---

##### `ftpsStateInput`<sup>Optional</sup> <a name="ftpsStateInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ftpsStateInput"></a>

```java
public java.lang.String getFtpsStateInput();
```

- *Type:* java.lang.String

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.healthCheckPathInput"></a>

```java
public java.lang.String getHealthCheckPathInput();
```

- *Type:* java.lang.String

---

##### `http2EnabledInput`<sup>Optional</sup> <a name="http2EnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.http2EnabledInput"></a>

```java
public java.lang.Object getHttp2EnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipRestrictionInput`<sup>Optional</sup> <a name="ipRestrictionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ipRestrictionInput"></a>

```java
public java.lang.Object getIpRestrictionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>>

---

##### `linuxFxVersionInput`<sup>Optional</sup> <a name="linuxFxVersionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.linuxFxVersionInput"></a>

```java
public java.lang.String getLinuxFxVersionInput();
```

- *Type:* java.lang.String

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.minTlsVersionInput"></a>

```java
public java.lang.String getMinTlsVersionInput();
```

- *Type:* java.lang.String

---

##### `preWarmedInstanceCountInput`<sup>Optional</sup> <a name="preWarmedInstanceCountInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCountInput"></a>

```java
public java.lang.Number getPreWarmedInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runtimeScaleMonitoringEnabledInput`<sup>Optional</sup> <a name="runtimeScaleMonitoringEnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput"></a>

```java
public java.lang.Object getRuntimeScaleMonitoringEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scmIpRestrictionInput`<sup>Optional</sup> <a name="scmIpRestrictionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```java
public java.lang.Object getScmIpRestrictionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>>

---

##### `scmMinTlsVersionInput`<sup>Optional</sup> <a name="scmMinTlsVersionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersionInput"></a>

```java
public java.lang.String getScmMinTlsVersionInput();
```

- *Type:* java.lang.String

---

##### `scmTypeInput`<sup>Optional</sup> <a name="scmTypeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmTypeInput"></a>

```java
public java.lang.String getScmTypeInput();
```

- *Type:* java.lang.String

---

##### `scmUseMainIpRestrictionInput`<sup>Optional</sup> <a name="scmUseMainIpRestrictionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```java
public java.lang.Object getScmUseMainIpRestrictionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `use32BitWorkerProcessInput`<sup>Optional</sup> <a name="use32BitWorkerProcessInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcessInput"></a>

```java
public java.lang.Object getUse32BitWorkerProcessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnetRouteAllEnabledInput`<sup>Optional</sup> <a name="vnetRouteAllEnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```java
public java.lang.Object getVnetRouteAllEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `websocketsEnabledInput`<sup>Optional</sup> <a name="websocketsEnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```java
public java.lang.Object getWebsocketsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alwaysOn`<sup>Required</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.alwaysOn"></a>

```java
public java.lang.Object getAlwaysOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `appScaleLimit`<sup>Required</sup> <a name="appScaleLimit" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.appScaleLimit"></a>

```java
public java.lang.Number getAppScaleLimit();
```

- *Type:* java.lang.Number

---

##### `dotnetFrameworkVersion`<sup>Required</sup> <a name="dotnetFrameworkVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```java
public java.lang.String getDotnetFrameworkVersion();
```

- *Type:* java.lang.String

---

##### `elasticInstanceMinimum`<sup>Required</sup> <a name="elasticInstanceMinimum" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```java
public java.lang.Number getElasticInstanceMinimum();
```

- *Type:* java.lang.Number

---

##### `ftpsState`<sup>Required</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ftpsState"></a>

```java
public java.lang.String getFtpsState();
```

- *Type:* java.lang.String

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

---

##### `http2Enabled`<sup>Required</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.http2Enabled"></a>

```java
public java.lang.Object getHttp2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `linuxFxVersion`<sup>Required</sup> <a name="linuxFxVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.linuxFxVersion"></a>

```java
public java.lang.String getLinuxFxVersion();
```

- *Type:* java.lang.String

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.minTlsVersion"></a>

```java
public java.lang.String getMinTlsVersion();
```

- *Type:* java.lang.String

---

##### `preWarmedInstanceCount`<sup>Required</sup> <a name="preWarmedInstanceCount" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```java
public java.lang.Number getPreWarmedInstanceCount();
```

- *Type:* java.lang.Number

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runtimeScaleMonitoringEnabled`<sup>Required</sup> <a name="runtimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```java
public java.lang.Object getRuntimeScaleMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scmMinTlsVersion`<sup>Required</sup> <a name="scmMinTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersion"></a>

```java
public java.lang.String getScmMinTlsVersion();
```

- *Type:* java.lang.String

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmType"></a>

```java
public java.lang.String getScmType();
```

- *Type:* java.lang.String

---

##### `scmUseMainIpRestriction`<sup>Required</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```java
public java.lang.Object getScmUseMainIpRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `use32BitWorkerProcess`<sup>Required</sup> <a name="use32BitWorkerProcess" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```java
public java.lang.Object getUse32BitWorkerProcess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnetRouteAllEnabled`<sup>Required</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```java
public java.lang.Object getVnetRouteAllEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `websocketsEnabled`<sup>Required</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.websocketsEnabled"></a>

```java
public java.lang.Object getWebsocketsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.internalValue"></a>

```java
public LogicAppStandardSiteConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a>

---


### LogicAppStandardSiteConfigScmIpRestrictionHeadersList <a name="LogicAppStandardSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList;

new LogicAppStandardSiteConfigScmIpRestrictionHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.get"></a>

```java
public LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a>>

---


### LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference <a name="LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference;

new LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```java
public void resetXAzureFdid()
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```java
public void resetXFdHealthProbe()
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```java
public void resetXForwardedFor()
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```java
public void resetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```java
public java.util.List<java.lang.String> getXAzureFdidInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```java
public java.util.List<java.lang.String> getXForwardedForInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```java
public java.util.List<java.lang.String> getXForwardedHostInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```java
public java.util.List<java.lang.String> getXAzureFdid();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```java
public java.util.List<java.lang.String> getXFdHealthProbe();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```java
public java.util.List<java.lang.String> getXForwardedFor();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```java
public java.util.List<java.lang.String> getXForwardedHost();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a>

---


### LogicAppStandardSiteConfigScmIpRestrictionList <a name="LogicAppStandardSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteConfigScmIpRestrictionList;

new LogicAppStandardSiteConfigScmIpRestrictionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.get"></a>

```java
public LogicAppStandardSiteConfigScmIpRestrictionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>>

---


### LogicAppStandardSiteConfigScmIpRestrictionOutputReference <a name="LogicAppStandardSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference;

new LogicAppStandardSiteConfigScmIpRestrictionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<LogicAppStandardSiteConfigScmIpRestrictionHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```java
public void resetServiceTag()
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```java
public void resetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList">LogicAppStandardSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```java
public LogicAppStandardSiteConfigScmIpRestrictionHeadersList getHeaders();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList">LogicAppStandardSiteConfigScmIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a>>

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```java
public java.lang.String getServiceTagInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```java
public java.lang.String getVirtualNetworkSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```java
public java.lang.String getServiceTag();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>

---


### LogicAppStandardSiteCredentialList <a name="LogicAppStandardSiteCredentialList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteCredentialList;

new LogicAppStandardSiteCredentialList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.get"></a>

```java
public LogicAppStandardSiteCredentialOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### LogicAppStandardSiteCredentialOutputReference <a name="LogicAppStandardSiteCredentialOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardSiteCredentialOutputReference;

new LogicAppStandardSiteCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredential">LogicAppStandardSiteCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.internalValue"></a>

```java
public LogicAppStandardSiteCredential getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredential">LogicAppStandardSiteCredential</a>

---


### LogicAppStandardTimeoutsOutputReference <a name="LogicAppStandardTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.logic_app_standard.LogicAppStandardTimeoutsOutputReference;

new LogicAppStandardTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a>

---



