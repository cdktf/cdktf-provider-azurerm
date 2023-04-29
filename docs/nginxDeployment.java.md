# `azurerm_nginx_deployment`

Refer to the Terraform Registory for docs: [`azurerm_nginx_deployment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment).

# `nginxDeployment` Submodule <a name="`nginxDeployment` Submodule" id="@cdktf/provider-azurerm.nginxDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NginxDeployment <a name="NginxDeployment" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment azurerm_nginx_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeployment;

NginxDeployment.Builder.create(Construct scope, java.lang.String id)
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
    .resourceGroupName(java.lang.String)
    .sku(java.lang.String)
//  .diagnoseSupportEnabled(java.lang.Boolean)
//  .diagnoseSupportEnabled(IResolvable)
//  .frontendPrivate(IResolvable)
//  .frontendPrivate(java.util.List<NginxDeploymentFrontendPrivate>)
//  .frontendPublic(NginxDeploymentFrontendPublic)
//  .id(java.lang.String)
//  .identity(NginxDeploymentIdentity)
//  .loggingStorageAccount(IResolvable)
//  .loggingStorageAccount(java.util.List<NginxDeploymentLoggingStorageAccount>)
//  .managedResourceGroup(java.lang.String)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<NginxDeploymentNetworkInterface>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NginxDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#location NginxDeployment#location}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#name NginxDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#resource_group_name NginxDeployment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#sku NginxDeployment#sku}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.diagnoseSupportEnabled">diagnoseSupportEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#diagnose_support_enabled NginxDeployment#diagnose_support_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.frontendPrivate">frontendPrivate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate">NginxDeploymentFrontendPrivate</a>></code> | frontend_private block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.frontendPublic">frontendPublic</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a></code> | frontend_public block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#id NginxDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.loggingStorageAccount">loggingStorageAccount</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount">NginxDeploymentLoggingStorageAccount</a>></code> | logging_storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.managedResourceGroup">managedResourceGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#managed_resource_group NginxDeployment#managed_resource_group}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface">NginxDeploymentNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#tags NginxDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts">NginxDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#location NginxDeployment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#name NginxDeployment#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#resource_group_name NginxDeployment#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.sku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#sku NginxDeployment#sku}.

---

##### `diagnoseSupportEnabled`<sup>Optional</sup> <a name="diagnoseSupportEnabled" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.diagnoseSupportEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#diagnose_support_enabled NginxDeployment#diagnose_support_enabled}.

---

##### `frontendPrivate`<sup>Optional</sup> <a name="frontendPrivate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.frontendPrivate"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate">NginxDeploymentFrontendPrivate</a>>

frontend_private block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#frontend_private NginxDeployment#frontend_private}

---

##### `frontendPublic`<sup>Optional</sup> <a name="frontendPublic" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.frontendPublic"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a>

frontend_public block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#frontend_public NginxDeployment#frontend_public}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#id NginxDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#identity NginxDeployment#identity}

---

##### `loggingStorageAccount`<sup>Optional</sup> <a name="loggingStorageAccount" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.loggingStorageAccount"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount">NginxDeploymentLoggingStorageAccount</a>>

logging_storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#logging_storage_account NginxDeployment#logging_storage_account}

---

##### `managedResourceGroup`<sup>Optional</sup> <a name="managedResourceGroup" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.managedResourceGroup"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#managed_resource_group NginxDeployment#managed_resource_group}.

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.networkInterface"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface">NginxDeploymentNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#network_interface NginxDeployment#network_interface}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#tags NginxDeployment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts">NginxDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#timeouts NginxDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPrivate">putFrontendPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPublic">putFrontendPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putLoggingStorageAccount">putLoggingStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetDiagnoseSupportEnabled">resetDiagnoseSupportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetFrontendPrivate">resetFrontendPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetFrontendPublic">resetFrontendPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetLoggingStorageAccount">resetLoggingStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetManagedResourceGroup">resetManagedResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFrontendPrivate` <a name="putFrontendPrivate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPrivate"></a>

```java
public void putFrontendPrivate(IResolvable OR java.util.List<NginxDeploymentFrontendPrivate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPrivate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate">NginxDeploymentFrontendPrivate</a>>

---

##### `putFrontendPublic` <a name="putFrontendPublic" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPublic"></a>

```java
public void putFrontendPublic(NginxDeploymentFrontendPublic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPublic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putIdentity"></a>

```java
public void putIdentity(NginxDeploymentIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a>

---

##### `putLoggingStorageAccount` <a name="putLoggingStorageAccount" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putLoggingStorageAccount"></a>

```java
public void putLoggingStorageAccount(IResolvable OR java.util.List<NginxDeploymentLoggingStorageAccount> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putLoggingStorageAccount.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount">NginxDeploymentLoggingStorageAccount</a>>

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putNetworkInterface"></a>

```java
public void putNetworkInterface(IResolvable OR java.util.List<NginxDeploymentNetworkInterface> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putNetworkInterface.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface">NginxDeploymentNetworkInterface</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putTimeouts"></a>

```java
public void putTimeouts(NginxDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts">NginxDeploymentTimeouts</a>

---

##### `resetDiagnoseSupportEnabled` <a name="resetDiagnoseSupportEnabled" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetDiagnoseSupportEnabled"></a>

```java
public void resetDiagnoseSupportEnabled()
```

##### `resetFrontendPrivate` <a name="resetFrontendPrivate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetFrontendPrivate"></a>

```java
public void resetFrontendPrivate()
```

##### `resetFrontendPublic` <a name="resetFrontendPublic" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetFrontendPublic"></a>

```java
public void resetFrontendPublic()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetLoggingStorageAccount` <a name="resetLoggingStorageAccount" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetLoggingStorageAccount"></a>

```java
public void resetLoggingStorageAccount()
```

##### `resetManagedResourceGroup` <a name="resetManagedResourceGroup" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetManagedResourceGroup"></a>

```java
public void resetManagedResourceGroup()
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetNetworkInterface"></a>

```java
public void resetNetworkInterface()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeployment;

NginxDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeployment;

NginxDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeployment;

NginxDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPrivate">frontendPrivate</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList">NginxDeploymentFrontendPrivateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPublic">frontendPublic</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference">NginxDeploymentFrontendPublicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference">NginxDeploymentIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.loggingStorageAccount">loggingStorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList">NginxDeploymentLoggingStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList">NginxDeploymentNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.nginxVersion">nginxVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference">NginxDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.diagnoseSupportEnabledInput">diagnoseSupportEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPrivateInput">frontendPrivateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate">NginxDeploymentFrontendPrivate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPublicInput">frontendPublicInput</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.loggingStorageAccountInput">loggingStorageAccountInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount">NginxDeploymentLoggingStorageAccount</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.managedResourceGroupInput">managedResourceGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface">NginxDeploymentNetworkInterface</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts">NginxDeploymentTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.diagnoseSupportEnabled">diagnoseSupportEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.managedResourceGroup">managedResourceGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `frontendPrivate`<sup>Required</sup> <a name="frontendPrivate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPrivate"></a>

```java
public NginxDeploymentFrontendPrivateList getFrontendPrivate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList">NginxDeploymentFrontendPrivateList</a>

---

##### `frontendPublic`<sup>Required</sup> <a name="frontendPublic" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPublic"></a>

```java
public NginxDeploymentFrontendPublicOutputReference getFrontendPublic();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference">NginxDeploymentFrontendPublicOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.identity"></a>

```java
public NginxDeploymentIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference">NginxDeploymentIdentityOutputReference</a>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `loggingStorageAccount`<sup>Required</sup> <a name="loggingStorageAccount" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.loggingStorageAccount"></a>

```java
public NginxDeploymentLoggingStorageAccountList getLoggingStorageAccount();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList">NginxDeploymentLoggingStorageAccountList</a>

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.networkInterface"></a>

```java
public NginxDeploymentNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList">NginxDeploymentNetworkInterfaceList</a>

---

##### `nginxVersion`<sup>Required</sup> <a name="nginxVersion" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.nginxVersion"></a>

```java
public java.lang.String getNginxVersion();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.timeouts"></a>

```java
public NginxDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference">NginxDeploymentTimeoutsOutputReference</a>

---

##### `diagnoseSupportEnabledInput`<sup>Optional</sup> <a name="diagnoseSupportEnabledInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.diagnoseSupportEnabledInput"></a>

```java
public java.lang.Object getDiagnoseSupportEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `frontendPrivateInput`<sup>Optional</sup> <a name="frontendPrivateInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPrivateInput"></a>

```java
public java.lang.Object getFrontendPrivateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate">NginxDeploymentFrontendPrivate</a>>

---

##### `frontendPublicInput`<sup>Optional</sup> <a name="frontendPublicInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPublicInput"></a>

```java
public NginxDeploymentFrontendPublic getFrontendPublicInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.identityInput"></a>

```java
public NginxDeploymentIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `loggingStorageAccountInput`<sup>Optional</sup> <a name="loggingStorageAccountInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.loggingStorageAccountInput"></a>

```java
public java.lang.Object getLoggingStorageAccountInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount">NginxDeploymentLoggingStorageAccount</a>>

---

##### `managedResourceGroupInput`<sup>Optional</sup> <a name="managedResourceGroupInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.managedResourceGroupInput"></a>

```java
public java.lang.String getManagedResourceGroupInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.networkInterfaceInput"></a>

```java
public java.lang.Object getNetworkInterfaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface">NginxDeploymentNetworkInterface</a>>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts">NginxDeploymentTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `diagnoseSupportEnabled`<sup>Required</sup> <a name="diagnoseSupportEnabled" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.diagnoseSupportEnabled"></a>

```java
public java.lang.Object getDiagnoseSupportEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managedResourceGroup`<sup>Required</sup> <a name="managedResourceGroup" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.managedResourceGroup"></a>

```java
public java.lang.String getManagedResourceGroup();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NginxDeploymentConfig <a name="NginxDeploymentConfig" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeploymentConfig;

NginxDeploymentConfig.builder()
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
    .resourceGroupName(java.lang.String)
    .sku(java.lang.String)
//  .diagnoseSupportEnabled(java.lang.Boolean)
//  .diagnoseSupportEnabled(IResolvable)
//  .frontendPrivate(IResolvable)
//  .frontendPrivate(java.util.List<NginxDeploymentFrontendPrivate>)
//  .frontendPublic(NginxDeploymentFrontendPublic)
//  .id(java.lang.String)
//  .identity(NginxDeploymentIdentity)
//  .loggingStorageAccount(IResolvable)
//  .loggingStorageAccount(java.util.List<NginxDeploymentLoggingStorageAccount>)
//  .managedResourceGroup(java.lang.String)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<NginxDeploymentNetworkInterface>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NginxDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#location NginxDeployment#location}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#name NginxDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#resource_group_name NginxDeployment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#sku NginxDeployment#sku}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.diagnoseSupportEnabled">diagnoseSupportEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#diagnose_support_enabled NginxDeployment#diagnose_support_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.frontendPrivate">frontendPrivate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate">NginxDeploymentFrontendPrivate</a>></code> | frontend_private block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.frontendPublic">frontendPublic</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a></code> | frontend_public block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#id NginxDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.loggingStorageAccount">loggingStorageAccount</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount">NginxDeploymentLoggingStorageAccount</a>></code> | logging_storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.managedResourceGroup">managedResourceGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#managed_resource_group NginxDeployment#managed_resource_group}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface">NginxDeploymentNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#tags NginxDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts">NginxDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#location NginxDeployment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#name NginxDeployment#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#resource_group_name NginxDeployment#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#sku NginxDeployment#sku}.

---

##### `diagnoseSupportEnabled`<sup>Optional</sup> <a name="diagnoseSupportEnabled" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.diagnoseSupportEnabled"></a>

```java
public java.lang.Object getDiagnoseSupportEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#diagnose_support_enabled NginxDeployment#diagnose_support_enabled}.

---

##### `frontendPrivate`<sup>Optional</sup> <a name="frontendPrivate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.frontendPrivate"></a>

```java
public java.lang.Object getFrontendPrivate();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate">NginxDeploymentFrontendPrivate</a>>

frontend_private block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#frontend_private NginxDeployment#frontend_private}

---

##### `frontendPublic`<sup>Optional</sup> <a name="frontendPublic" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.frontendPublic"></a>

```java
public NginxDeploymentFrontendPublic getFrontendPublic();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a>

frontend_public block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#frontend_public NginxDeployment#frontend_public}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#id NginxDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.identity"></a>

```java
public NginxDeploymentIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#identity NginxDeployment#identity}

---

##### `loggingStorageAccount`<sup>Optional</sup> <a name="loggingStorageAccount" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.loggingStorageAccount"></a>

```java
public java.lang.Object getLoggingStorageAccount();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount">NginxDeploymentLoggingStorageAccount</a>>

logging_storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#logging_storage_account NginxDeployment#logging_storage_account}

---

##### `managedResourceGroup`<sup>Optional</sup> <a name="managedResourceGroup" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.managedResourceGroup"></a>

```java
public java.lang.String getManagedResourceGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#managed_resource_group NginxDeployment#managed_resource_group}.

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.networkInterface"></a>

```java
public java.lang.Object getNetworkInterface();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface">NginxDeploymentNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#network_interface NginxDeployment#network_interface}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#tags NginxDeployment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.timeouts"></a>

```java
public NginxDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts">NginxDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#timeouts NginxDeployment#timeouts}

---

### NginxDeploymentFrontendPrivate <a name="NginxDeploymentFrontendPrivate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeploymentFrontendPrivate;

NginxDeploymentFrontendPrivate.builder()
    .allocationMethod(java.lang.String)
    .ipAddress(java.lang.String)
    .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.allocationMethod">allocationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#allocation_method NginxDeployment#allocation_method}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#ip_address NginxDeployment#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#subnet_id NginxDeployment#subnet_id}. |

---

##### `allocationMethod`<sup>Required</sup> <a name="allocationMethod" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.allocationMethod"></a>

```java
public java.lang.String getAllocationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#allocation_method NginxDeployment#allocation_method}.

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#ip_address NginxDeployment#ip_address}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#subnet_id NginxDeployment#subnet_id}.

---

### NginxDeploymentFrontendPublic <a name="NginxDeploymentFrontendPublic" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeploymentFrontendPublic;

NginxDeploymentFrontendPublic.builder()
//  .ipAddress(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic.property.ipAddress">ipAddress</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#ip_address NginxDeployment#ip_address}. |

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic.property.ipAddress"></a>

```java
public java.util.List<java.lang.String> getIpAddress();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#ip_address NginxDeployment#ip_address}.

---

### NginxDeploymentIdentity <a name="NginxDeploymentIdentity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeploymentIdentity;

NginxDeploymentIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#type NginxDeployment#type}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#identity_ids NginxDeployment#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#type NginxDeployment#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#identity_ids NginxDeployment#identity_ids}.

---

### NginxDeploymentLoggingStorageAccount <a name="NginxDeploymentLoggingStorageAccount" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeploymentLoggingStorageAccount;

NginxDeploymentLoggingStorageAccount.builder()
//  .containerName(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount.property.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#container_name NginxDeployment#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#name NginxDeployment#name}. |

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#container_name NginxDeployment#container_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#name NginxDeployment#name}.

---

### NginxDeploymentNetworkInterface <a name="NginxDeploymentNetworkInterface" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeploymentNetworkInterface;

NginxDeploymentNetworkInterface.builder()
    .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#subnet_id NginxDeployment#subnet_id}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#subnet_id NginxDeployment#subnet_id}.

---

### NginxDeploymentTimeouts <a name="NginxDeploymentTimeouts" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeploymentTimeouts;

NginxDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#create NginxDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#delete NginxDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#read NginxDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#update NginxDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#create NginxDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#delete NginxDeployment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#read NginxDeployment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/nginx_deployment#update NginxDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NginxDeploymentFrontendPrivateList <a name="NginxDeploymentFrontendPrivateList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeploymentFrontendPrivateList;

new NginxDeploymentFrontendPrivateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.get"></a>

```java
public NginxDeploymentFrontendPrivateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate">NginxDeploymentFrontendPrivate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate">NginxDeploymentFrontendPrivate</a>>

---


### NginxDeploymentFrontendPrivateOutputReference <a name="NginxDeploymentFrontendPrivateOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeploymentFrontendPrivateOutputReference;

new NginxDeploymentFrontendPrivateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.allocationMethodInput">allocationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.allocationMethod">allocationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate">NginxDeploymentFrontendPrivate</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocationMethodInput`<sup>Optional</sup> <a name="allocationMethodInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.allocationMethodInput"></a>

```java
public java.lang.String getAllocationMethodInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `allocationMethod`<sup>Required</sup> <a name="allocationMethod" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.allocationMethod"></a>

```java
public java.lang.String getAllocationMethod();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate">NginxDeploymentFrontendPrivate</a> OR com.hashicorp.cdktf.IResolvable

---


### NginxDeploymentFrontendPublicOutputReference <a name="NginxDeploymentFrontendPublicOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeploymentFrontendPublicOutputReference;

new NginxDeploymentFrontendPublicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.ipAddressInput"></a>

```java
public java.util.List<java.lang.String> getIpAddressInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.ipAddress"></a>

```java
public java.util.List<java.lang.String> getIpAddress();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.internalValue"></a>

```java
public NginxDeploymentFrontendPublic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a>

---


### NginxDeploymentIdentityOutputReference <a name="NginxDeploymentIdentityOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeploymentIdentityOutputReference;

new NginxDeploymentIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.internalValue"></a>

```java
public NginxDeploymentIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a>

---


### NginxDeploymentLoggingStorageAccountList <a name="NginxDeploymentLoggingStorageAccountList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeploymentLoggingStorageAccountList;

new NginxDeploymentLoggingStorageAccountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.get"></a>

```java
public NginxDeploymentLoggingStorageAccountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount">NginxDeploymentLoggingStorageAccount</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount">NginxDeploymentLoggingStorageAccount</a>>

---


### NginxDeploymentLoggingStorageAccountOutputReference <a name="NginxDeploymentLoggingStorageAccountOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeploymentLoggingStorageAccountOutputReference;

new NginxDeploymentLoggingStorageAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerName` <a name="resetContainerName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resetContainerName"></a>

```java
public void resetContainerName()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount">NginxDeploymentLoggingStorageAccount</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount">NginxDeploymentLoggingStorageAccount</a> OR com.hashicorp.cdktf.IResolvable

---


### NginxDeploymentNetworkInterfaceList <a name="NginxDeploymentNetworkInterfaceList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeploymentNetworkInterfaceList;

new NginxDeploymentNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.get"></a>

```java
public NginxDeploymentNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface">NginxDeploymentNetworkInterface</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface">NginxDeploymentNetworkInterface</a>>

---


### NginxDeploymentNetworkInterfaceOutputReference <a name="NginxDeploymentNetworkInterfaceOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeploymentNetworkInterfaceOutputReference;

new NginxDeploymentNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface">NginxDeploymentNetworkInterface</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface">NginxDeploymentNetworkInterface</a> OR com.hashicorp.cdktf.IResolvable

---


### NginxDeploymentTimeoutsOutputReference <a name="NginxDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.nginx_deployment.NginxDeploymentTimeoutsOutputReference;

new NginxDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts">NginxDeploymentTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts">NginxDeploymentTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



