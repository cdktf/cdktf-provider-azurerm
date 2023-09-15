# `azurerm_spring_cloud_app`

Refer to the Terraform Registory for docs: [`azurerm_spring_cloud_app`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app).

# `springCloudApp` Submodule <a name="`springCloudApp` Submodule" id="@cdktf/provider-azurerm.springCloudApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudApp <a name="SpringCloudApp" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app azurerm_spring_cloud_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app.SpringCloudApp;

SpringCloudApp.Builder.create(Construct scope, java.lang.String id)
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
    .resourceGroupName(java.lang.String)
    .serviceName(java.lang.String)
//  .addonJson(java.lang.String)
//  .customPersistentDisk(IResolvable)
//  .customPersistentDisk(java.util.List<SpringCloudAppCustomPersistentDisk>)
//  .httpsOnly(java.lang.Boolean)
//  .httpsOnly(IResolvable)
//  .id(java.lang.String)
//  .identity(SpringCloudAppIdentity)
//  .ingressSettings(SpringCloudAppIngressSettings)
//  .isPublic(java.lang.Boolean)
//  .isPublic(IResolvable)
//  .persistentDisk(SpringCloudAppPersistentDisk)
//  .publicEndpointEnabled(java.lang.Boolean)
//  .publicEndpointEnabled(IResolvable)
//  .timeouts(SpringCloudAppTimeouts)
//  .tlsEnabled(java.lang.Boolean)
//  .tlsEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#name SpringCloudApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#resource_group_name SpringCloudApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#service_name SpringCloudApp#service_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.addonJson">addonJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#addon_json SpringCloudApp#addon_json}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.customPersistentDisk">customPersistentDisk</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>></code> | custom_persistent_disk block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#https_only SpringCloudApp#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#id SpringCloudApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.ingressSettings">ingressSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a></code> | ingress_settings block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.isPublic">isPublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#is_public SpringCloudApp#is_public}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.persistentDisk">persistentDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a></code> | persistent_disk block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.publicEndpointEnabled">publicEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#public_endpoint_enabled SpringCloudApp#public_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.tlsEnabled">tlsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#tls_enabled SpringCloudApp#tls_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#name SpringCloudApp#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#resource_group_name SpringCloudApp#resource_group_name}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#service_name SpringCloudApp#service_name}.

---

##### `addonJson`<sup>Optional</sup> <a name="addonJson" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.addonJson"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#addon_json SpringCloudApp#addon_json}.

---

##### `customPersistentDisk`<sup>Optional</sup> <a name="customPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.customPersistentDisk"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>>

custom_persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#custom_persistent_disk SpringCloudApp#custom_persistent_disk}

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.httpsOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#https_only SpringCloudApp#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#id SpringCloudApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#identity SpringCloudApp#identity}

---

##### `ingressSettings`<sup>Optional</sup> <a name="ingressSettings" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.ingressSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a>

ingress_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#ingress_settings SpringCloudApp#ingress_settings}

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.isPublic"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#is_public SpringCloudApp#is_public}.

---

##### `persistentDisk`<sup>Optional</sup> <a name="persistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.persistentDisk"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a>

persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#persistent_disk SpringCloudApp#persistent_disk}

---

##### `publicEndpointEnabled`<sup>Optional</sup> <a name="publicEndpointEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.publicEndpointEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#public_endpoint_enabled SpringCloudApp#public_endpoint_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#timeouts SpringCloudApp#timeouts}

---

##### `tlsEnabled`<sup>Optional</sup> <a name="tlsEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.tlsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#tls_enabled SpringCloudApp#tls_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putCustomPersistentDisk">putCustomPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIngressSettings">putIngressSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putPersistentDisk">putPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetAddonJson">resetAddonJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetCustomPersistentDisk">resetCustomPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetHttpsOnly">resetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIngressSettings">resetIngressSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIsPublic">resetIsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetPersistentDisk">resetPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetPublicEndpointEnabled">resetPublicEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetTlsEnabled">resetTlsEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCustomPersistentDisk` <a name="putCustomPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putCustomPersistentDisk"></a>

```java
public void putCustomPersistentDisk(IResolvable OR java.util.List<SpringCloudAppCustomPersistentDisk> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putCustomPersistentDisk.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIdentity"></a>

```java
public void putIdentity(SpringCloudAppIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a>

---

##### `putIngressSettings` <a name="putIngressSettings" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIngressSettings"></a>

```java
public void putIngressSettings(SpringCloudAppIngressSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIngressSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a>

---

##### `putPersistentDisk` <a name="putPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putPersistentDisk"></a>

```java
public void putPersistentDisk(SpringCloudAppPersistentDisk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putPersistentDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putTimeouts"></a>

```java
public void putTimeouts(SpringCloudAppTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a>

---

##### `resetAddonJson` <a name="resetAddonJson" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetAddonJson"></a>

```java
public void resetAddonJson()
```

##### `resetCustomPersistentDisk` <a name="resetCustomPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetCustomPersistentDisk"></a>

```java
public void resetCustomPersistentDisk()
```

##### `resetHttpsOnly` <a name="resetHttpsOnly" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetHttpsOnly"></a>

```java
public void resetHttpsOnly()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetIngressSettings` <a name="resetIngressSettings" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIngressSettings"></a>

```java
public void resetIngressSettings()
```

##### `resetIsPublic` <a name="resetIsPublic" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIsPublic"></a>

```java
public void resetIsPublic()
```

##### `resetPersistentDisk` <a name="resetPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetPersistentDisk"></a>

```java
public void resetPersistentDisk()
```

##### `resetPublicEndpointEnabled` <a name="resetPublicEndpointEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetPublicEndpointEnabled"></a>

```java
public void resetPublicEndpointEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTlsEnabled` <a name="resetTlsEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetTlsEnabled"></a>

```java
public void resetTlsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app.SpringCloudApp;

SpringCloudApp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app.SpringCloudApp;

SpringCloudApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app.SpringCloudApp;

SpringCloudApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.customPersistentDisk">customPersistentDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList">SpringCloudAppCustomPersistentDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference">SpringCloudAppIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.ingressSettings">ingressSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference">SpringCloudAppIngressSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.persistentDisk">persistentDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference">SpringCloudAppPersistentDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference">SpringCloudAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.addonJsonInput">addonJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.customPersistentDiskInput">customPersistentDiskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.httpsOnlyInput">httpsOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.ingressSettingsInput">ingressSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.isPublicInput">isPublicInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.persistentDiskInput">persistentDiskInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.publicEndpointEnabledInput">publicEndpointEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tlsEnabledInput">tlsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.addonJson">addonJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.isPublic">isPublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.publicEndpointEnabled">publicEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tlsEnabled">tlsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customPersistentDisk`<sup>Required</sup> <a name="customPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.customPersistentDisk"></a>

```java
public SpringCloudAppCustomPersistentDiskList getCustomPersistentDisk();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList">SpringCloudAppCustomPersistentDiskList</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.identity"></a>

```java
public SpringCloudAppIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference">SpringCloudAppIdentityOutputReference</a>

---

##### `ingressSettings`<sup>Required</sup> <a name="ingressSettings" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.ingressSettings"></a>

```java
public SpringCloudAppIngressSettingsOutputReference getIngressSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference">SpringCloudAppIngressSettingsOutputReference</a>

---

##### `persistentDisk`<sup>Required</sup> <a name="persistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.persistentDisk"></a>

```java
public SpringCloudAppPersistentDiskOutputReference getPersistentDisk();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference">SpringCloudAppPersistentDiskOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.timeouts"></a>

```java
public SpringCloudAppTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference">SpringCloudAppTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `addonJsonInput`<sup>Optional</sup> <a name="addonJsonInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.addonJsonInput"></a>

```java
public java.lang.String getAddonJsonInput();
```

- *Type:* java.lang.String

---

##### `customPersistentDiskInput`<sup>Optional</sup> <a name="customPersistentDiskInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.customPersistentDiskInput"></a>

```java
public java.lang.Object getCustomPersistentDiskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>>

---

##### `httpsOnlyInput`<sup>Optional</sup> <a name="httpsOnlyInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.httpsOnlyInput"></a>

```java
public java.lang.Object getHttpsOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.identityInput"></a>

```java
public SpringCloudAppIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressSettingsInput`<sup>Optional</sup> <a name="ingressSettingsInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.ingressSettingsInput"></a>

```java
public SpringCloudAppIngressSettings getIngressSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a>

---

##### `isPublicInput`<sup>Optional</sup> <a name="isPublicInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.isPublicInput"></a>

```java
public java.lang.Object getIsPublicInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `persistentDiskInput`<sup>Optional</sup> <a name="persistentDiskInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.persistentDiskInput"></a>

```java
public SpringCloudAppPersistentDisk getPersistentDiskInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a>

---

##### `publicEndpointEnabledInput`<sup>Optional</sup> <a name="publicEndpointEnabledInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.publicEndpointEnabledInput"></a>

```java
public java.lang.Object getPublicEndpointEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a>

---

##### `tlsEnabledInput`<sup>Optional</sup> <a name="tlsEnabledInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tlsEnabledInput"></a>

```java
public java.lang.Object getTlsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `addonJson`<sup>Required</sup> <a name="addonJson" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.addonJson"></a>

```java
public java.lang.String getAddonJson();
```

- *Type:* java.lang.String

---

##### `httpsOnly`<sup>Required</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.httpsOnly"></a>

```java
public java.lang.Object getHttpsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.isPublic"></a>

```java
public java.lang.Object getIsPublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicEndpointEnabled`<sup>Required</sup> <a name="publicEndpointEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.publicEndpointEnabled"></a>

```java
public java.lang.Object getPublicEndpointEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `tlsEnabled`<sup>Required</sup> <a name="tlsEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tlsEnabled"></a>

```java
public java.lang.Object getTlsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudAppConfig <a name="SpringCloudAppConfig" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app.SpringCloudAppConfig;

SpringCloudAppConfig.builder()
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
    .resourceGroupName(java.lang.String)
    .serviceName(java.lang.String)
//  .addonJson(java.lang.String)
//  .customPersistentDisk(IResolvable)
//  .customPersistentDisk(java.util.List<SpringCloudAppCustomPersistentDisk>)
//  .httpsOnly(java.lang.Boolean)
//  .httpsOnly(IResolvable)
//  .id(java.lang.String)
//  .identity(SpringCloudAppIdentity)
//  .ingressSettings(SpringCloudAppIngressSettings)
//  .isPublic(java.lang.Boolean)
//  .isPublic(IResolvable)
//  .persistentDisk(SpringCloudAppPersistentDisk)
//  .publicEndpointEnabled(java.lang.Boolean)
//  .publicEndpointEnabled(IResolvable)
//  .timeouts(SpringCloudAppTimeouts)
//  .tlsEnabled(java.lang.Boolean)
//  .tlsEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#name SpringCloudApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#resource_group_name SpringCloudApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#service_name SpringCloudApp#service_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.addonJson">addonJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#addon_json SpringCloudApp#addon_json}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.customPersistentDisk">customPersistentDisk</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>></code> | custom_persistent_disk block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#https_only SpringCloudApp#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#id SpringCloudApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.ingressSettings">ingressSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a></code> | ingress_settings block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.isPublic">isPublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#is_public SpringCloudApp#is_public}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.persistentDisk">persistentDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a></code> | persistent_disk block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.publicEndpointEnabled">publicEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#public_endpoint_enabled SpringCloudApp#public_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.tlsEnabled">tlsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#tls_enabled SpringCloudApp#tls_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#name SpringCloudApp#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#resource_group_name SpringCloudApp#resource_group_name}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#service_name SpringCloudApp#service_name}.

---

##### `addonJson`<sup>Optional</sup> <a name="addonJson" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.addonJson"></a>

```java
public java.lang.String getAddonJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#addon_json SpringCloudApp#addon_json}.

---

##### `customPersistentDisk`<sup>Optional</sup> <a name="customPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.customPersistentDisk"></a>

```java
public java.lang.Object getCustomPersistentDisk();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>>

custom_persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#custom_persistent_disk SpringCloudApp#custom_persistent_disk}

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.httpsOnly"></a>

```java
public java.lang.Object getHttpsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#https_only SpringCloudApp#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#id SpringCloudApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.identity"></a>

```java
public SpringCloudAppIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#identity SpringCloudApp#identity}

---

##### `ingressSettings`<sup>Optional</sup> <a name="ingressSettings" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.ingressSettings"></a>

```java
public SpringCloudAppIngressSettings getIngressSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a>

ingress_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#ingress_settings SpringCloudApp#ingress_settings}

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.isPublic"></a>

```java
public java.lang.Object getIsPublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#is_public SpringCloudApp#is_public}.

---

##### `persistentDisk`<sup>Optional</sup> <a name="persistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.persistentDisk"></a>

```java
public SpringCloudAppPersistentDisk getPersistentDisk();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a>

persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#persistent_disk SpringCloudApp#persistent_disk}

---

##### `publicEndpointEnabled`<sup>Optional</sup> <a name="publicEndpointEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.publicEndpointEnabled"></a>

```java
public java.lang.Object getPublicEndpointEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#public_endpoint_enabled SpringCloudApp#public_endpoint_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.timeouts"></a>

```java
public SpringCloudAppTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#timeouts SpringCloudApp#timeouts}

---

##### `tlsEnabled`<sup>Optional</sup> <a name="tlsEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.tlsEnabled"></a>

```java
public java.lang.Object getTlsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#tls_enabled SpringCloudApp#tls_enabled}.

---

### SpringCloudAppCustomPersistentDisk <a name="SpringCloudAppCustomPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app.SpringCloudAppCustomPersistentDisk;

SpringCloudAppCustomPersistentDisk.builder()
    .mountPath(java.lang.String)
    .shareName(java.lang.String)
    .storageName(java.lang.String)
//  .mountOptions(java.util.List<java.lang.String>)
//  .readOnlyEnabled(java.lang.Boolean)
//  .readOnlyEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#mount_path SpringCloudApp#mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.shareName">shareName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#share_name SpringCloudApp#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.storageName">storageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#storage_name SpringCloudApp#storage_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#mount_options SpringCloudApp#mount_options}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.readOnlyEnabled">readOnlyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#read_only_enabled SpringCloudApp#read_only_enabled}. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#mount_path SpringCloudApp#mount_path}.

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#share_name SpringCloudApp#share_name}.

---

##### `storageName`<sup>Required</sup> <a name="storageName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.storageName"></a>

```java
public java.lang.String getStorageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#storage_name SpringCloudApp#storage_name}.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.mountOptions"></a>

```java
public java.util.List<java.lang.String> getMountOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#mount_options SpringCloudApp#mount_options}.

---

##### `readOnlyEnabled`<sup>Optional</sup> <a name="readOnlyEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.readOnlyEnabled"></a>

```java
public java.lang.Object getReadOnlyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#read_only_enabled SpringCloudApp#read_only_enabled}.

---

### SpringCloudAppIdentity <a name="SpringCloudAppIdentity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app.SpringCloudAppIdentity;

SpringCloudAppIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#type SpringCloudApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#identity_ids SpringCloudApp#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#type SpringCloudApp#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#identity_ids SpringCloudApp#identity_ids}.

---

### SpringCloudAppIngressSettings <a name="SpringCloudAppIngressSettings" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app.SpringCloudAppIngressSettings;

SpringCloudAppIngressSettings.builder()
//  .backendProtocol(java.lang.String)
//  .readTimeoutInSeconds(java.lang.Number)
//  .sendTimeoutInSeconds(java.lang.Number)
//  .sessionAffinity(java.lang.String)
//  .sessionCookieMaxAge(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.backendProtocol">backendProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#backend_protocol SpringCloudApp#backend_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.readTimeoutInSeconds">readTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#read_timeout_in_seconds SpringCloudApp#read_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sendTimeoutInSeconds">sendTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#send_timeout_in_seconds SpringCloudApp#send_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#session_affinity SpringCloudApp#session_affinity}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sessionCookieMaxAge">sessionCookieMaxAge</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#session_cookie_max_age SpringCloudApp#session_cookie_max_age}. |

---

##### `backendProtocol`<sup>Optional</sup> <a name="backendProtocol" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.backendProtocol"></a>

```java
public java.lang.String getBackendProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#backend_protocol SpringCloudApp#backend_protocol}.

---

##### `readTimeoutInSeconds`<sup>Optional</sup> <a name="readTimeoutInSeconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.readTimeoutInSeconds"></a>

```java
public java.lang.Number getReadTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#read_timeout_in_seconds SpringCloudApp#read_timeout_in_seconds}.

---

##### `sendTimeoutInSeconds`<sup>Optional</sup> <a name="sendTimeoutInSeconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sendTimeoutInSeconds"></a>

```java
public java.lang.Number getSendTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#send_timeout_in_seconds SpringCloudApp#send_timeout_in_seconds}.

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sessionAffinity"></a>

```java
public java.lang.String getSessionAffinity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#session_affinity SpringCloudApp#session_affinity}.

---

##### `sessionCookieMaxAge`<sup>Optional</sup> <a name="sessionCookieMaxAge" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sessionCookieMaxAge"></a>

```java
public java.lang.Number getSessionCookieMaxAge();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#session_cookie_max_age SpringCloudApp#session_cookie_max_age}.

---

### SpringCloudAppPersistentDisk <a name="SpringCloudAppPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app.SpringCloudAppPersistentDisk;

SpringCloudAppPersistentDisk.builder()
    .sizeInGb(java.lang.Number)
//  .mountPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk.property.sizeInGb">sizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#size_in_gb SpringCloudApp#size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#mount_path SpringCloudApp#mount_path}. |

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk.property.sizeInGb"></a>

```java
public java.lang.Number getSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#size_in_gb SpringCloudApp#size_in_gb}.

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#mount_path SpringCloudApp#mount_path}.

---

### SpringCloudAppTimeouts <a name="SpringCloudAppTimeouts" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app.SpringCloudAppTimeouts;

SpringCloudAppTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#create SpringCloudApp#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#delete SpringCloudApp#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#read SpringCloudApp#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#update SpringCloudApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#create SpringCloudApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#delete SpringCloudApp#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#read SpringCloudApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/spring_cloud_app#update SpringCloudApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudAppCustomPersistentDiskList <a name="SpringCloudAppCustomPersistentDiskList" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app.SpringCloudAppCustomPersistentDiskList;

new SpringCloudAppCustomPersistentDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.get"></a>

```java
public SpringCloudAppCustomPersistentDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>>

---


### SpringCloudAppCustomPersistentDiskOutputReference <a name="SpringCloudAppCustomPersistentDiskOutputReference" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app.SpringCloudAppCustomPersistentDiskOutputReference;

new SpringCloudAppCustomPersistentDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resetReadOnlyEnabled">resetReadOnlyEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resetMountOptions"></a>

```java
public void resetMountOptions()
```

##### `resetReadOnlyEnabled` <a name="resetReadOnlyEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resetReadOnlyEnabled"></a>

```java
public void resetReadOnlyEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.readOnlyEnabledInput">readOnlyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.storageNameInput">storageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.readOnlyEnabled">readOnlyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.shareName">shareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.storageName">storageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMountOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `readOnlyEnabledInput`<sup>Optional</sup> <a name="readOnlyEnabledInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.readOnlyEnabledInput"></a>

```java
public java.lang.Object getReadOnlyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.shareNameInput"></a>

```java
public java.lang.String getShareNameInput();
```

- *Type:* java.lang.String

---

##### `storageNameInput`<sup>Optional</sup> <a name="storageNameInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.storageNameInput"></a>

```java
public java.lang.String getStorageNameInput();
```

- *Type:* java.lang.String

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountOptions"></a>

```java
public java.util.List<java.lang.String> getMountOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `readOnlyEnabled`<sup>Required</sup> <a name="readOnlyEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.readOnlyEnabled"></a>

```java
public java.lang.Object getReadOnlyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

---

##### `storageName`<sup>Required</sup> <a name="storageName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.storageName"></a>

```java
public java.lang.String getStorageName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>

---


### SpringCloudAppIdentityOutputReference <a name="SpringCloudAppIdentityOutputReference" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app.SpringCloudAppIdentityOutputReference;

new SpringCloudAppIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.internalValue"></a>

```java
public SpringCloudAppIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a>

---


### SpringCloudAppIngressSettingsOutputReference <a name="SpringCloudAppIngressSettingsOutputReference" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app.SpringCloudAppIngressSettingsOutputReference;

new SpringCloudAppIngressSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetBackendProtocol">resetBackendProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetReadTimeoutInSeconds">resetReadTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSendTimeoutInSeconds">resetSendTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSessionAffinity">resetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSessionCookieMaxAge">resetSessionCookieMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackendProtocol` <a name="resetBackendProtocol" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetBackendProtocol"></a>

```java
public void resetBackendProtocol()
```

##### `resetReadTimeoutInSeconds` <a name="resetReadTimeoutInSeconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetReadTimeoutInSeconds"></a>

```java
public void resetReadTimeoutInSeconds()
```

##### `resetSendTimeoutInSeconds` <a name="resetSendTimeoutInSeconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSendTimeoutInSeconds"></a>

```java
public void resetSendTimeoutInSeconds()
```

##### `resetSessionAffinity` <a name="resetSessionAffinity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSessionAffinity"></a>

```java
public void resetSessionAffinity()
```

##### `resetSessionCookieMaxAge` <a name="resetSessionCookieMaxAge" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSessionCookieMaxAge"></a>

```java
public void resetSessionCookieMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.backendProtocolInput">backendProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.readTimeoutInSecondsInput">readTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sendTimeoutInSecondsInput">sendTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionAffinityInput">sessionAffinityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionCookieMaxAgeInput">sessionCookieMaxAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.backendProtocol">backendProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.readTimeoutInSeconds">readTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sendTimeoutInSeconds">sendTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionCookieMaxAge">sessionCookieMaxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendProtocolInput`<sup>Optional</sup> <a name="backendProtocolInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.backendProtocolInput"></a>

```java
public java.lang.String getBackendProtocolInput();
```

- *Type:* java.lang.String

---

##### `readTimeoutInSecondsInput`<sup>Optional</sup> <a name="readTimeoutInSecondsInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.readTimeoutInSecondsInput"></a>

```java
public java.lang.Number getReadTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `sendTimeoutInSecondsInput`<sup>Optional</sup> <a name="sendTimeoutInSecondsInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sendTimeoutInSecondsInput"></a>

```java
public java.lang.Number getSendTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `sessionAffinityInput`<sup>Optional</sup> <a name="sessionAffinityInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionAffinityInput"></a>

```java
public java.lang.String getSessionAffinityInput();
```

- *Type:* java.lang.String

---

##### `sessionCookieMaxAgeInput`<sup>Optional</sup> <a name="sessionCookieMaxAgeInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionCookieMaxAgeInput"></a>

```java
public java.lang.Number getSessionCookieMaxAgeInput();
```

- *Type:* java.lang.Number

---

##### `backendProtocol`<sup>Required</sup> <a name="backendProtocol" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.backendProtocol"></a>

```java
public java.lang.String getBackendProtocol();
```

- *Type:* java.lang.String

---

##### `readTimeoutInSeconds`<sup>Required</sup> <a name="readTimeoutInSeconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.readTimeoutInSeconds"></a>

```java
public java.lang.Number getReadTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `sendTimeoutInSeconds`<sup>Required</sup> <a name="sendTimeoutInSeconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sendTimeoutInSeconds"></a>

```java
public java.lang.Number getSendTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionAffinity"></a>

```java
public java.lang.String getSessionAffinity();
```

- *Type:* java.lang.String

---

##### `sessionCookieMaxAge`<sup>Required</sup> <a name="sessionCookieMaxAge" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionCookieMaxAge"></a>

```java
public java.lang.Number getSessionCookieMaxAge();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.internalValue"></a>

```java
public SpringCloudAppIngressSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a>

---


### SpringCloudAppPersistentDiskOutputReference <a name="SpringCloudAppPersistentDiskOutputReference" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app.SpringCloudAppPersistentDiskOutputReference;

new SpringCloudAppPersistentDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountPath` <a name="resetMountPath" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.resetMountPath"></a>

```java
public void resetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.sizeInGbInput">sizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.sizeInGb">sizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `sizeInGbInput`<sup>Optional</sup> <a name="sizeInGbInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.sizeInGbInput"></a>

```java
public java.lang.Number getSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.sizeInGb"></a>

```java
public java.lang.Number getSizeInGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.internalValue"></a>

```java
public SpringCloudAppPersistentDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a>

---


### SpringCloudAppTimeoutsOutputReference <a name="SpringCloudAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app.SpringCloudAppTimeoutsOutputReference;

new SpringCloudAppTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a>

---



